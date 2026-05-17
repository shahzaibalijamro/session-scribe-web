// backend/routes/translate.js
import express from 'express';
import { generateObject } from 'ai';
import { openai } from '../index.js';
import { z } from 'zod';

const router = express.Router();

// Schema for live text translation response
const LiveTranslationSchema = z.object({
  translatedText: z.string(),
  confidence: z.number().optional(),
  detectedLanguage: z.string().optional()
});

// Helper function to get translation examples for different languages
const getTranslationExamples = (languageCode) => {
  const examples = {
    'ur': `
        English: "Hello, how are you?"
        Roman Urdu: "Salam, aap kaise hain?"
        
        English: "The meeting will start at 3 PM"
        Roman Urdu: "Meeting 3 baje shuru hogi"`,
        
    'hi': `
        English: "Good morning everyone"  
        Hindi in English: "Sabko suprabhat"
        
        English: "Please review the document"
        Hindi in English: "Kripya document ki samiksha karein"`,
        
    'ar': `
        English: "Welcome to the meeting"
        Arabic in English: "Ahlan wa sahlan fil ijtima"
        
        English: "Let's discuss the project"
        Arabic in English: "Haya nunaqish al-mashru"`,
        
    'zh': `
        English: "Thank you for your time"
        Chinese (Pinyin): "Xie xie nin de shi jian"`,
        
    'ja': `
        English: "Please introduce yourself"
        Japanese (Romaji): "Jikoshokai wo onegaishimasu"`,
        
    'ko': `
        English: "Have a great day"
        Korean (Romanized): "Joeun haru doeseyo"`,
        
    'es': `
        English: "Good afternoon"
        Spanish: "Buenas tardes"`,
        
    'fr': `
        English: "Excuse me"
        French: "Excusez-moi"`,
        
    'de': `
        English: "Nice to meet you"
        German: "Freut mich, Sie kennenzulernen"`,
        
    'it': `
        English: "See you later"
        Italian: "A dopo"`,
        
    'pt': `
        English: "How can I help you?"
        Portuguese: "Como posso ajudá-lo?"`,
        
    'ru': `
        English: "What time is it?"
        Russian: "Kotoryi chas?"`,
        
    'default': `
        All output should use standard Latin alphabet characters only.
        Maintain natural, conversational tone appropriate for live communication.`
  };
  
  return examples[languageCode] || examples.default;
};

// Helper function to get output format instructions for different languages
const getOutputFormatInstructions = (languageCode, languageName) => {
  const instructions = {
    'ur': `
        **URDU OUTPUT FORMAT**: 
        - Use ROMAN URDU (English alphabet) instead of Arabic script
        - Write Urdu words using English letters (e.g., "Salam alaikum" instead of "السلام علیکم")
        - Use common Roman Urdu conventions for live conversation
        - Keep it natural and conversational for real-time communication`,
        
    'hi': `
        **HINDI OUTPUT FORMAT**: 
        - Use HINDI IN ENGLISH (Devanagari transliterated to Roman script)
        - Write Hindi words using English letters (e.g., "Namaste" instead of "नमस्ते")
        - Use standard Hindi romanization for live conversation
        - Keep it natural and conversational for real-time communication`,
        
    'ar': `
        **ARABIC OUTPUT FORMAT**: 
        - Use ARABIC IN ENGLISH (Arabic transliterated to Roman script)
        - Write Arabic words using English letters (e.g., "Ahlan wa sahlan" instead of "أهلاً وسهلاً")
        - Use standard Arabic romanization conventions
        - Keep it natural and conversational for real-time communication`,
        
    'zh': `
        **CHINESE OUTPUT FORMAT**: 
        - Use PINYIN with tone marks or numbers where appropriate
        - For common terms, use widely recognized pinyin
        - Keep it natural for live conversation`,
        
    'ja': `
        **JAPANESE OUTPUT FORMAT**: 
        - Use ROMAJI (Japanese in Roman letters) instead of Hiragana/Katakana/Kanji
        - Use standard Hepburn romanization
        - Keep it natural for live conversation`,
        
    'ko': `
        **KOREAN OUTPUT FORMAT**: 
        - Use ROMANIZED KOREAN instead of Hangul characters
        - Use standard Korean romanization (Revised Romanization)
        - Keep it natural for live conversation`,
        
    'default': `
        **OUTPUT FORMAT**: 
        - Use standard Latin script (English alphabet)
        - Maintain natural conversational tone
        - Ensure compatibility with standard text rendering`
  };
  
  return instructions[languageCode] || instructions.default;
};

// Validation function to ensure Roman/Latin script output
const validateRomanScript = (text, languageCode) => {
  if (!text || typeof text !== 'string') return text;
  
  // Check if text contains non-Latin characters
  const hasNonLatin = /[^\u0000-\u024F\u1E00-\u1EFF\u0100-\u017F\u00C0-\u00FF\u0100-\u017F\u0020-\u007F]/.test(text);
  
  if (hasNonLatin) {
    console.warn(`Non-Latin characters detected in ${languageCode} translation, applying fallback cleaning`);
    
    // Basic transliteration for common characters
    let cleaned = text
      // Remove problematic Unicode ranges
      .replace(/[\u0600-\u06FF]/g, '') // Arabic
      .replace(/[\u0900-\u097F]/g, '') // Devanagari (Hindi)
      .replace(/[\u4E00-\u9FFF]/g, '') // Chinese
      .replace(/[\u3040-\u309F]/g, '') // Hiragana
      .replace(/[\u30A0-\u30FF]/g, '') // Katakana
      .replace(/[\uAC00-\uD7AF]/g, '') // Korean
      // Clean up extra spaces
      .replace(/\s+/g, ' ')
      .trim();
    
    // If text is mostly cleaned out, provide a romanized version note
    if (cleaned.length < text.length * 0.3) {
      cleaned = `[Text in ${languageCode} - using romanized script]`;
    }
    
    return cleaned;
  }
  
  return text;
};

// Main live text translation endpoint
router.post('/live-text', async (req, res) => {
  try {
    const { text, targetLanguage, targetLanguageName } = req.body;

    // Validate input
    if (!text || !targetLanguage || !targetLanguageName) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: text, targetLanguage, targetLanguageName'
      });
    }

    if (text.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Text cannot be empty'
      });
    }

    if (text.length > 1000) {
      return res.status(400).json({
        success: false,
        error: 'Text too long. Maximum 1000 characters allowed for live translation.'
      });
    }

    console.log(`🌍 Live translating text to ${targetLanguageName} (${targetLanguage})`);
    console.log(`📝 Original text: "${text}"`);

    // Use Gemini for translation
    const { object } = await generateObject({
      model: openai('gpt-4o-mini'), // Using flash model for speed in live translation
      schema: LiveTranslationSchema,
      prompt: `
        Translate the following text to ${targetLanguageName} for real-time live conversation.
        
        IMPORTANT LIVE TRANSLATION RULES:
        1. Provide IMMEDIATE, natural translation suitable for live conversation
        2. Keep the same conversational tone and style as the original
        3. Maintain any emotional context (formal, casual, excited, etc.)
        4. For partial sentences or fragments, translate what's available naturally
        5. Preserve proper nouns (names, companies) unless they have established translations
        6. Keep technical terms that are commonly used in English in business contexts
        7. Ensure the translation sounds natural when spoken aloud
        8. For informal speech, use appropriate informal language in the target language
        
        CRITICAL OUTPUT FORMAT REQUIREMENTS:
        ${getOutputFormatInstructions(targetLanguage, targetLanguageName)}
        
        LIVE TRANSLATION EXAMPLES:
        ${getTranslationExamples(targetLanguage)}
        
        Original Text: "${text}"
        
        Provide a natural, conversational translation that someone would actually say in ${targetLanguageName}.
        Remember: Use ONLY Latin/Roman script for the output, no native script characters.
        Focus on maintaining the natural flow of conversation.
      `,
      temperature: 0.2, // Low temperature for consistent but natural translations
    });

    // Validate that the translation uses Roman/Latin script
    const validatedTranslation = validateRomanScript(object.translatedText, targetLanguage);

    console.log(`✅ Translation completed: "${validatedTranslation}"`);

    // Return the translation
    res.json({
      success: true,
      translatedText: validatedTranslation,
      originalText: text,
      targetLanguage: targetLanguage,
      targetLanguageName: targetLanguageName,
      confidence: object.confidence || 0.95,
      detectedLanguage: object.detectedLanguage || 'en',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Live translation error:', error);

    // Handle specific error types
    if (error.message.includes('API_KEY') || error.message.includes('credentials')) {
      return res.status(500).json({
        success: false,
        error: 'Translation service not configured. Please check API keys.',
        code: 'TRANSLATION_CONFIG_ERROR'
      });
    }

    if (error.message.includes('quota') || error.message.includes('limit')) {
      return res.status(429).json({
        success: false,
        error: 'Translation service quota exceeded. Please try again later.',
        code: 'TRANSLATION_QUOTA_ERROR'
      });
    }

    if (error.message.includes('network') || error.message.includes('connection')) {
      return res.status(503).json({
        success: false,
        error: 'Translation service temporarily unavailable. Please try again.',
        code: 'TRANSLATION_NETWORK_ERROR'
      });
    }

    // Generic error
    res.status(500).json({
      success: false,
      error: 'Translation failed. Please try again.',
      code: 'TRANSLATION_ERROR',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Endpoint to get supported languages
router.get('/supported-languages', (req, res) => {
  const supportedLanguages = [
    { code: 'es', name: 'Spanish', flag: '🇪🇸', family: 'Romance' },
    { code: 'fr', name: 'French', flag: '🇫🇷', family: 'Romance' },
    { code: 'de', name: 'German', flag: '🇩🇪', family: 'Germanic' },
    { code: 'zh', name: 'Chinese', flag: '🇨🇳', family: 'Sino-Tibetan' },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵', family: 'Japonic' },
    { code: 'ko', name: 'Korean', flag: '🇰🇷', family: 'Koreanic' },
    { code: 'ar', name: 'Arabic', flag: '🇸🇦', family: 'Semitic' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳', family: 'Indo-European' },
    { code: 'ur', name: 'Urdu', flag: '🇵🇰', family: 'Indo-European' },
    { code: 'pt', name: 'Portuguese', flag: '🇵🇹', family: 'Romance' },
    { code: 'ru', name: 'Russian', flag: '🇷🇺', family: 'Slavic' },
    { code: 'it', name: 'Italian', flag: '🇮🇹', family: 'Romance' },
    { code: 'nl', name: 'Dutch', flag: '🇳🇱', family: 'Germanic' },
    { code: 'tr', name: 'Turkish', flag: '🇹🇷', family: 'Turkic' },
    { code: 'th', name: 'Thai', flag: '🇹🇭', family: 'Tai-Kadai' },
  ];

  res.json({
    success: true,
    languages: supportedLanguages,
    count: supportedLanguages.length
  });
});

// Endpoint to validate translation quality (for debugging)
router.post('/validate', async (req, res) => {
  try {
    const { originalText, translatedText, targetLanguage } = req.body;

    if (!originalText || !translatedText || !targetLanguage) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields'
      });
    }

    // Check for non-Latin characters
    const hasNonLatin = /[^\u0000-\u024F\u1E00-\u1EFF\u0100-\u017F\u00C0-\u00FF\u0100-\u017F\u0020-\u007F]/.test(translatedText);
    
    // Check length ratio (translated text shouldn't be too different in length)
    const lengthRatio = translatedText.length / originalText.length;
    const reasonableLengthRatio = lengthRatio >= 0.3 && lengthRatio <= 3.0;

    // Check for common translation artifacts
    const hasTranslationArtifacts = /\[.*\]/.test(translatedText) || 
                                   translatedText.includes('...') ||
                                   translatedText.toLowerCase().includes('translation');

    const quality = {
      usesLatinScript: !hasNonLatin,
      reasonableLength: reasonableLengthRatio,
      noArtifacts: !hasTranslationArtifacts,
      lengthRatio: lengthRatio,
      originalLength: originalText.length,
      translatedLength: translatedText.length
    };

    const overallScore = Object.values(quality).filter(v => typeof v === 'boolean' && v).length / 3;

    res.json({
      success: true,
      quality: quality,
      score: overallScore,
      recommendation: overallScore >= 0.8 ? 'good' : overallScore >= 0.6 ? 'acceptable' : 'poor'
    });

  } catch (error) {
    console.error('Validation error:', error);
    res.status(500).json({
      success: false,
      error: 'Validation failed'
    });
  }
});

export default router;
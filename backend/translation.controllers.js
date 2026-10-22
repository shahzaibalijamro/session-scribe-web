import { generateObject } from "ai";
import { google } from "@ai-sdk/google";
import { openai } from '@ai-sdk/openai';
import { z } from "zod";

const TranscriptTranslationSchema = z.object({
  translatedText: z.string().min(1, "Translated text is required"),
});

const translateTranscript = async (req, res) => {
  try {
    const { text, targetLanguageCode, targetLanguageName } = req.body;

    // Validate input
    const inputSchema = z.object({
      text: z.string().min(1, "Transcript text is required"),
      targetLanguageCode: z.string().min(1, "Target language code is required"),
      targetLanguageName: z.string().min(1, "Target language name is required"),
    });

    inputSchema.parse(req.body);

    const { object } = await generateObject({
      model: openai('gpt-3.5-turbo'),
      schema: TranscriptTranslationSchema,
      prompt: `
        Translate the following text to ${targetLanguageName} using Latin/Roman script only.
        
        IMPORTANT TRANSLATION RULES:
        1. Translate the text accurately while preserving the original meaning
        2. Keep proper nouns unchanged
        3. Use standard Latin alphabet characters only
        4. Ensure cultural appropriateness
        5. Maintain the same level of formality
        6. ${getOutputFormatInstructions(targetLanguageCode, targetLanguageName)}
        
        Text: ${text}
        
        Examples: ${getTranslationExamples(targetLanguageCode)}
      `,
      temperature: 0.1,
    });

    const translatedText = validateRomanScript(
      { translatedText: object.translatedText },
      targetLanguageCode
    ).translatedText;

    res.status(200).json({ translatedText });
  } catch (error) {
    console.error("Transcript translation failed:", error);
    res.status(500).json({
      error:
        error.message.includes("API_KEY")
          ? "Translation service not configured"
          : error.message.includes("quota") || error.message.includes("limit")
          ? "Translation service quota exceeded"
          : error.message.includes("network") || error.message.includes("connection")
          ? "Network error during translation"
          : "Translation failed: " + error.message,
    });
  }
};

// Reusing helper functions from the provided code
const validateRomanScript = (data, languageCode) => {
  const cleanText = (text) => {
    if (!text || typeof text !== "string") return text;
    const hasNonLatin = /[^-\u024F\u1E00-\u1EFF\u0100-\u017F]/.test(text);
    if (hasNonLatin) {
      console.warn(`Non-Latin characters detected in ${languageCode} translation`);
      let cleaned = text
        .replace(/[\u0600-\u06FF]/g, "")
        .replace(/[\u0900-\u097F]/g, "")
        .replace(/[\u4E00-\u9FFF]/g, "")
        .replace(/[\u3040-\u309F]/g, "")
        .replace(/[\u30A0-\u30FF]/g, "")
        .replace(/[\uAC00-\uD7AF]/g, "")
        .replace(/\s+/g, " ")
        .trim();
      if (cleaned.length < text.length * 0.3) {
        cleaned = `[Content in ${languageCode} - Latin script version]`;
      }
      return cleaned;
    }
    return text;
  };

  if (typeof data === "string") return cleanText(data);
  if (Array.isArray(data)) return data.map(cleanText);
  if (typeof data === "object" && data !== null) {
    const cleaned = {};
    for (const [key, value] of Object.entries(data)) {
      cleaned[key] =
        typeof value === "string"
          ? cleanText(value)
          : Array.isArray(value)
          ? value.map(cleanText)
          : typeof value === "object" && value !== null
          ? validateRomanScript(value, languageCode)
          : value;
    }
    return cleaned;
  }
  return data;
};

const getTranslationExamples = (languageCode) => {
  const examples = {
    ur: `
      English: "Meeting Summary"
      Roman Urdu: "Meeting Ka Khulasa"
      English: "Next Steps"
      Roman Urdu: "Agle Qadam"
      English: "The team discussed the quarterly results"
      Roman Urdu: "Team ne quarterly results par charcha ki"`,
    hi: `
      English: "Meeting Summary"  
      Hindi in English: "Meeting Ka Saransh"
      English: "Participants"
      Hindi in English: "Sahbhagi"
      English: "The project timeline was reviewed"
      Hindi in English: "Project timeline ki samiksha ki gayi"`,
    ar: `
      English: "Meeting Summary"
      Arabic in English: "Mulakhas al-Ijtima"
      English: "Agenda"
      Arabic in English: "Jadwal al-Aamal"
      English: "We need to finalize the budget"
      Arabic in English: "Yajibu an nunahhi al-mizaniya"`,
    zh: `
      English: "Meeting Summary"
      Chinese (Pinyin): "Huiyi Zongjie"
      English: "Action Items"
      Chinese (Pinyin): "Xingdong Xiangmu"`,
    ja: `
      English: "Meeting Summary"
      Japanese (Romaji): "Kaigi no Gaiyou"
      English: "Discussion Points"
      Japanese (Romaji): "Toron no Pointo"`,
    ko: `
      English: "Meeting Summary"
      Korean (Romanized): "Hoeui Yoyak"
      English: "Follow-up Tasks"
      Korean (Romanized): "Huseok Eommu"`,
    default: `
      All output should use standard Latin alphabet characters only.
      Avoid any special Unicode characters that might cause PDF rendering issues.`,
  };
  return examples[languageCode] || examples.default;
};

const getOutputFormatInstructions = (languageCode, languageName) => {
  const instructions = {
    ur: `
      **URDU OUTPUT FORMAT**: 
      - Use ROMAN URDU (English alphabet) instead of Arabic script
      - Write Urdu words using English letters (e.g., "Salam alaikum" instead of "السلام علیکم")
      - Use common Roman Urdu conventions (e.g., "aap", "hum", "kya", "hai")
      - This ensures PDF compatibility and readability
      Example: "Yeh meeting ka summary hai" instead of Arabic script`,
    hi: `
      **HINDI OUTPUT FORMAT**: 
      - Use HINDI IN ENGLISH (Devanagari transliterated to Roman script)
      - Write Hindi words using English letters (e.g., "Namaste" instead of "नमस्ते")
      - Use standard Hindi romanization (e.g., "kya", "hai", "meeting", "summary")
      - This ensures PDF compatibility and readability
      Example: "Yeh meeting ka saransh hai" instead of Devanagari script`,
    ar: `
      **ARABIC OUTPUT FORMAT**: 
      - Use ARABIC IN ENGLISH (Arabic transliterated to Roman script)
      - Write Arabic words using English letters (e.g., "Ahlan wa sahlan" instead of "أهلاً وسهلاً")
      - Use standard Arabic romanization conventions
      - This ensures PDF compatibility and readability
      Example: "Hatha mulakhas al-ijtima" instead of Arabic script`,
    zh: `
      **CHINESE OUTPUT FORMAT**: 
      - Use PINYIN with tone marks or English translation where appropriate
      - For business terms, prefer English equivalents when commonly used
      - Example: "Huiyi zongjie" (Meeting Summary) or use English "Meeting Summary"`,
    ja: `
      **JAPANESE OUTPUT FORMAT**: 
      - Use ROMAJI (Japanese in Roman letters) instead of Hiragana/Katakana/Kanji
      - Example: "Kaigi no gaiyou" instead of Japanese characters
      - For business terms, use English equivalents when appropriate`,
    ko: `
      **KOREAN OUTPUT FORMAT**: 
      - Use ROMANIZED KOREAN instead of Hangul characters
      - Example: "Hoeui yoyak" instead of Korean characters
      - For business terms, use English equivalents when appropriate`,
    default: `
      **OUTPUT FORMAT**: 
      - Use standard Latin script (English alphabet)
      - Ensure all characters are compatible with basic PDF fonts
      - No special Unicode characters that might not render properly`,
  };
  return instructions[languageCode] || instructions.default;
};

export default translateTranscript;
import { generateObject } from 'ai';
import { openai } from '@ai-sdk/openai';
import { ActionItemsSchema, BasicMeetingInfoSchema, ChallengesRisksSchema, DecisionsSchema, DiscussionAnalysisSchema, EnhancedTranslatedMeetingSchema, ImplementationPlanSchema, KeyInitiativesSchema, MeetingDataSchema, MeetingMinutesSchema, MinutesAndStepsSchema, ProjectsSchema, TranscriptSchema, TranslatedMeetingSchema } from './schemas.js';

// // Validation function to ensure Roman/Latin script output
// const validateRomanScript = (meetingData, languageCode) => {
//   const cleanText = (text) => {
//     if (!text || typeof text !== 'string') return text;
    
//     // Check if text contains non-Latin characters
//     const hasNonLatin = /[^\u0000-\u024F\u1E00-\u1EFF\u0100-\u017F]/.test(text);
    
//     if (hasNonLatin) {
//       console.warn(`Non-Latin characters detected in ${languageCode} translation, applying fallback cleaning`);
      
//       // Basic transliteration for common characters
//       let cleaned = text
//         // Remove problematic Unicode ranges
//         .replace(/[\u0600-\u06FF]/g, '') // Arabic
//         .replace(/[\u0900-\u097F]/g, '') // Devanagari (Hindi)
//         .replace(/[\u4E00-\u9FFF]/g, '') // Chinese
//         .replace(/[\u3040-\u309F]/g, '') // Hiragana
//         .replace(/[\u30A0-\u30FF]/g, '') // Katakana
//         .replace(/[\uAC00-\uD7AF]/g, '') // Korean
//         // Clean up extra spaces
//         .replace(/\s+/g, ' ')
//         .trim();
      
//       // If text is mostly cleaned out, add a note
//       if (cleaned.length < text.length * 0.3) {
//         cleaned = `[Content in ${languageCode} - Latin script version]`;
//       }
      
//       return cleaned;
//     }
    
//     return text;
//   };

//   const cleanArray = (arr) => {
//     if (!Array.isArray(arr)) return arr;
//     return arr.map(item => {
//       if (typeof item === 'string') return cleanText(item);
//       if (typeof item === 'object' && item !== null) return cleanObject(item);
//       return item;
//     });
//   };

//   const cleanObject = (obj) => {
//     if (!obj || typeof obj !== 'object') return obj;
//     const cleaned = {};
//     for (const [key, value] of Object.entries(obj)) {
//       if (typeof value === 'string') {
//         cleaned[key] = cleanText(value);
//       } else if (Array.isArray(value)) {
//         cleaned[key] = cleanArray(value);
//       } else if (typeof value === 'object' && value !== null) {
//         cleaned[key] = cleanObject(value);
//       } else {
//         cleaned[key] = value;
//       }
//     }
//     return cleaned;
//   };

//   return cleanObject(meetingData);
// };

// Enhanced validation function to clean all nested objects
const validateRomanScript = (meetingData, languageCode) => {
  const cleanText = (text) => {
    if (!text || typeof text !== 'string') return text;
    
    // Check if text contains non-Latin characters
    const hasNonLatin = /[^\u0000-\u024F\u1E00-\u1EFF\u0100-\u017F]/.test(text);
    
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
      
      // If text is mostly cleaned out, add a note
      if (cleaned.length < text.length * 0.3) {
        cleaned = `[Content in ${languageCode} - Latin script version]`;
      }
      
      return cleaned;
    }
    
    return text;
  };

  const cleanArray = (arr) => {
    if (!Array.isArray(arr)) return arr;
    return arr.map(item => {
      if (typeof item === 'string') return cleanText(item);
      if (typeof item === 'object' && item !== null) return cleanObject(item);
      return item;
    });
  };

  const cleanObject = (obj) => {
    if (!obj || typeof obj !== 'object') return obj;
    const cleaned = {};
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'string') {
        cleaned[key] = cleanText(value);
      } else if (Array.isArray(value)) {
        cleaned[key] = cleanArray(value);
      } else if (typeof value === 'object' && value !== null) {
        cleaned[key] = cleanObject(value);
      } else {
        cleaned[key] = value;
      }
    }
    return cleaned;
  };

  return cleanObject(meetingData);
};


// Helper function to get translation examples for different languages
const getTranslationExamples = (languageCode) => {
  const examples = {
    'ur': `
        English: "Meeting Summary"
        Roman Urdu: "Meeting Ka Khulasa"
        
        English: "Next Steps"
        Roman Urdu: "Agle Qadam"
        
        English: "The team discussed the quarterly results"
        Roman Urdu: "Team ne quarterly results par charcha ki"`,
        
    'hi': `
        English: "Meeting Summary"  
        Hindi in English: "Meeting Ka Saransh"
        
        English: "Participants"
        Hindi in English: "Sahbhagi"
        
        English: "The project timeline was reviewed"
        Hindi in English: "Project timeline ki samiksha ki gayi"`,
        
    'ar': `
        English: "Meeting Summary"
        Arabic in English: "Mulakhas al-Ijtima"
        
        English: "Agenda"
        Arabic in English: "Jadwal al-Aamal"
        
        English: "We need to finalize the budget"
        Arabic in English: "Yajibu an nunahhi al-mizaniya"`,
        
    'zh': `
        English: "Meeting Summary"
        Chinese (Pinyin): "Huiyi Zongjie"
        
        English: "Action Items"
        Chinese (Pinyin): "Xingdong Xiangmu"`,
        
    'ja': `
        English: "Meeting Summary"
        Japanese (Romaji): "Kaigi no Gaiyou"
        
        English: "Discussion Points"
        Japanese (Romaji): "Toron no Pointo"`,
        
    'ko': `
        English: "Meeting Summary"
        Korean (Romanized): "Hoeui Yoyak"
        
        English: "Follow-up Tasks"
        Korean (Romanized): "Huseok Eommu"`,
        
    'default': `
        All output should use standard Latin alphabet characters only.
        Avoid any special Unicode characters that might cause PDF rendering issues.`
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
        - Use common Roman Urdu conventions (e.g., "aap", "hum", "kya", "hai")
        - This ensures PDF compatibility and readability
        Example: "Yeh meeting ka summary hai" instead of Arabic script`,
        
    'hi': `
        **HINDI OUTPUT FORMAT**: 
        - Use HINDI IN ENGLISH (Devanagari transliterated to Roman script)
        - Write Hindi words using English letters (e.g., "Namaste" instead of "नमस्ते")
        - Use standard Hindi romanization (e.g., "kya", "hai", "meeting", "summary")
        - This ensures PDF compatibility and readability
        Example: "Yeh meeting ka saransh hai" instead of Devanagari script`,
        
    'ar': `
        **ARABIC OUTPUT FORMAT**: 
        - Use ARABIC IN ENGLISH (Arabic transliterated to Roman script)
        - Write Arabic words using English letters (e.g., "Ahlan wa sahlan" instead of "أهلاً وسهلاً")
        - Use standard Arabic romanization conventions
        - This ensures PDF compatibility and readability
        Example: "Hatha mulakhas al-ijtima" instead of Arabic script`,
        
    'zh': `
        **CHINESE OUTPUT FORMAT**: 
        - Use PINYIN with tone marks or English translation where appropriate
        - For business terms, prefer English equivalents when commonly used
        - Example: "Huiyi zongjie" (Meeting Summary) or use English "Meeting Summary"`,
        
    'ja': `
        **JAPANESE OUTPUT FORMAT**: 
        - Use ROMAJI (Japanese in Roman letters) instead of Hiragana/Katakana/Kanji
        - Example: "Kaigi no gaiyou" instead of Japanese characters
        - For business terms, use English equivalents when appropriate`,
        
    'ko': `
        **KOREAN OUTPUT FORMAT**: 
        - Use ROMANIZED KOREAN instead of Hangul characters
        - Example: "Hoeui yoyak" instead of Korean characters
        - For business terms, use English equivalents when appropriate`,
        
    'default': `
        **OUTPUT FORMAT**: 
        - Use standard Latin script (English alphabet)
        - Ensure all characters are compatible with basic PDF fonts
        - No special Unicode characters that might not render properly`
  };
  
  return instructions[languageCode] || instructions.default;
};

// Main translation function
// const translateMeetingData = async (meetingData, targetLanguageCode, targetLanguageName) => {
//   try {
//     console.log(`Translating meeting to ${targetLanguageName}...`);

//     // Prepare the meeting data for translation
//     const dataToTranslate = {
//       title: meetingData.title || '',
//       summary: meetingData.summary || '',
//       participants: meetingData.participants || [],
//       agenda: meetingData.agenda || [],
//       minutes: meetingData.minutes || [],
//       nextSteps: meetingData.nextSteps || [],
//       transcript: meetingData.transcript || []
//     };

//     const { object } = await generateObject({
//       model: openai('gpt-3.5-turbo'),
//       schema: TranslatedMeetingSchema,
//               prompt: `
//         Translate the following meeting data to ${targetLanguageName}.
        
//         IMPORTANT TRANSLATION RULES:
//         1. Translate ALL text content accurately while preserving the original meaning
//         2. Keep proper nouns (names, companies, locations) in their original form unless they have established translations
//         3. Maintain professional meeting terminology
//         4. Preserve the structure and formatting of the data
//         5. For dates and times, use the appropriate format for the target language region
//         6. Keep technical terms that are commonly used in English in business contexts
//         7. Ensure cultural appropriateness for the target language
//         8. Maintain the same level of formality as the original
        
//         CRITICAL OUTPUT FORMAT REQUIREMENTS:
//         ${getOutputFormatInstructions(targetLanguageCode, targetLanguageName)}
        
//         Meeting Data to Translate:
        
//         Title: ${dataToTranslate.title}
        
//         Summary: ${dataToTranslate.summary}
        
//         Participants: ${dataToTranslate.participants.join(', ')}
        
//         Agenda Items:
//         ${dataToTranslate.agenda.map((item, index) => `${index + 1}. ${item}`).join('\n')}
        
//         Meeting Minutes:
//         ${dataToTranslate.minutes.map((minute, index) => 
//           `${index + 1}. Topic: ${minute.topic}\n   Details: ${minute.details}`
//         ).join('\n')}
        
//         Next Steps:
//         ${dataToTranslate.nextSteps.map((step, index) => 
//           `${index + 1}. Task: ${step.task}\n   Assignee: ${step.assignee}\n   Due: ${step.due || 'Not specified'}`
//         ).join('\n')}
        
//         Transcript:
//         ${dataToTranslate.transcript.map((conv, index) => 
//           `${conv.speaker}: ${conv.text}`
//         ).join('\n')}
        
//         **EXAMPLES FOR CLARITY:**
//         ${getTranslationExamples(targetLanguageCode)}
        
//         Please provide the complete translation maintaining the exact same structure and all the data fields.
//         Remember: Use ONLY Latin/Roman script for the output, no native script characters.
//       `,
//       temperature: 0.1, // Low temperature for more consistent translations
//     });

//     // Preserve non-translatable fields from original meeting
//     const translatedMeeting = {
//       ...meetingData, // Keep all original fields
//       ...object, // Override with translated content
//       // Preserve important metadata
//       _id: meetingData._id,
//       userId: meetingData.userId,
//       type: meetingData.type,
//       createdAt: meetingData.createdAt,
//       updatedAt: meetingData.updatedAt,
//       recordingAudioUrl: meetingData.recordingAudioUrl,
//       recordingLength: meetingData.recordingLength,
//       emailRecipients: meetingData.emailRecipients,
//       // Add translation metadata
//       isTranslated: true,
//       originalLanguage: 'en',
//       targetLanguage: targetLanguageCode,
//       targetLanguageName: targetLanguageName,
//       translatedAt: new Date().toISOString()
//     };

//     console.log(`Translation to ${targetLanguageName} completed successfully`);
    
//     // Validate that the translation uses Roman/Latin script
//     const validatedMeeting = validateRomanScript(translatedMeeting, targetLanguageCode);
    
//     return validatedMeeting;

//   } catch (error) {
//     console.error(`Translation to ${targetLanguageName} failed:`, error);
    
//     // Provide more specific error messages
//     if (error.message.includes('API_KEY')) {
//       throw new Error('Translation service not configured. Please check API keys.');
//     }
    
//     if (error.message.includes('quota') || error.message.includes('limit')) {
//       throw new Error('Translation service quota exceeded. Please try again later.');
//     }
    
//     if (error.message.includes('network') || error.message.includes('connection')) {
//       throw new Error('Network error during translation. Please check your connection.');
//     }
    
//     throw new Error(`Translation failed: ${error.message}`);
//   }
// };

const translateMeetingData = async (meetingData, targetLanguageCode, targetLanguageName) => {
  try {
    console.log(`Translating meeting to ${targetLanguageName}...`);

    // Prepare the comprehensive meeting data for translation
    const dataToTranslate = {
      // Basic info
      title: meetingData.title || '',
      summary: meetingData.summary || '',
      participants: meetingData.participants || [],
      agenda: meetingData.agenda || [],
      
      // Meeting content
      minutes: meetingData.minutes || [],
      nextSteps: meetingData.nextSteps || [],
      transcript: meetingData.transcript || [],
      
      // NEW: Enhanced fields
      projects: meetingData.projects || [],
      keyInitiatives: meetingData.keyInitiatives || [],
      implementationPlan: meetingData.implementationPlan || null,
      challengesAndRisks: meetingData.challengesAndRisks || [],
      decisionsMade: meetingData.decisionsMade || []
    };

    const { object } = await generateObject({
      model: openai('gpt-3.5-turbo'),
      schema: EnhancedTranslatedMeetingSchema, // Updated schema
      prompt: `
        Translate the following comprehensive meeting data to ${targetLanguageName}.
        
        IMPORTANT TRANSLATION RULES:
        1. Translate ALL text content accurately while preserving the original meaning
        2. Keep proper nouns (names, companies, locations) in their original form unless they have established translations
        3. Maintain professional meeting terminology
        4. Preserve the structure and formatting of the data
        5. For dates and times, use the appropriate format for the target language region
        6. Keep technical terms that are commonly used in English in business contexts
        7. Ensure cultural appropriateness for the target language
        8. Maintain the same level of formality as the original
        9. Translate all project titles, descriptions, objectives, and scope items
        10. Translate challenge/risk descriptions and mitigation strategies
        11. Translate decision descriptions and context
        12. Translate implementation plan objectives and timeline items
        
        CRITICAL OUTPUT FORMAT REQUIREMENTS:
        ${getOutputFormatInstructions(targetLanguageCode, targetLanguageName)}
        
        Meeting Data to Translate:
        
        **BASIC INFORMATION:**
        Title: ${dataToTranslate.title}
        Summary: ${dataToTranslate.summary}
        Participants: ${dataToTranslate.participants.join(', ')}
        
        **AGENDA:**
        ${dataToTranslate.agenda.map((item, index) => `${index + 1}. ${item}`).join('\n')}
        
        **MEETING MINUTES:**
        ${dataToTranslate.minutes.map((minute, index) => 
          `${index + 1}. Topic: ${minute.topic}\n   Details: ${minute.details}`
        ).join('\n')}
        
        **ACTION ITEMS / NEXT STEPS:**
        ${dataToTranslate.nextSteps.map((step, index) => 
          `${index + 1}. Task: ${step.task}\n   Assignee: ${step.assignee}\n   Assigned By: ${step.assignedBy || 'Not specified'}\n   Due: ${step.due || 'Not specified'}\n   Priority: ${step.priority || 'medium'}\n   Category: ${step.category || 'task'}`
        ).join('\n')}
        
        **PROJECTS:**
        ${dataToTranslate.projects.map((project, index) => 
          `${index + 1}. Title: ${project.title}\n   Description: ${project.description}\n   Assignee: ${project.assignee}\n   Assigned By: ${project.assignedBy || 'Not specified'}\n   Deadline: ${project.deadline || 'Not specified'}\n   Scope: ${project.scope ? project.scope.join(', ') : 'Not specified'}`
        ).join('\n')}
        
        **KEY INITIATIVES:**
        ${dataToTranslate.keyInitiatives.map((initiative, index) => 
          `${index + 1}. Title: ${initiative.title}\n   Description: ${initiative.description}\n   Objective: ${initiative.objective}\n   Ownership: ${initiative.ownership}`
        ).join('\n')}
        
        **IMPLEMENTATION PLAN:**
        ${dataToTranslate.implementationPlan ? `
        Objectives: ${dataToTranslate.implementationPlan.objectives ? dataToTranslate.implementationPlan.objectives.join(', ') : 'None'}
        Timeline: ${dataToTranslate.implementationPlan.timeline ? dataToTranslate.implementationPlan.timeline.join(', ') : 'None'}
        Has Timeline: ${dataToTranslate.implementationPlan.hasTimeline ? 'Yes' : 'No'}
        ` : 'No implementation plan'}
        
        **CHALLENGES AND RISKS:**
        ${dataToTranslate.challengesAndRisks.map((item, index) => 
          `${index + 1}. Type: ${item.type}\n   Description: ${item.description}\n   Impact: ${item.impact}\n   Mitigation: ${item.mitigation || 'Not specified'}`
        ).join('\n')}
        
        **DECISIONS MADE:**
        ${dataToTranslate.decisionsMade.map((decision, index) => 
          `${index + 1}. Decision: ${decision.decision}\n   Context: ${decision.context || 'Not specified'}\n   Impact: ${decision.impact || 'Not specified'}\n   Decided By: ${decision.decidedBy || 'Not specified'}`
        ).join('\n')}
        
        **TRANSCRIPT:**
        ${dataToTranslate.transcript.map((conv, index) => 
          `${conv.speaker}: ${conv.text}`
        ).join('\n')}
        
        **EXAMPLES FOR CLARITY:**
        ${getTranslationExamples(targetLanguageCode)}
        
        Please provide the complete translation maintaining the exact same structure and all the data fields.
        Remember: Use ONLY Latin/Roman script for the output, no native script characters.
        Translate ALL content including project descriptions, objectives, challenges, decisions, and implementation details.
      `,
      temperature: 0.1, // Low temperature for more consistent translations
    });

    // Preserve non-translatable fields from original meeting
    const translatedMeeting = {
      ...meetingData, // Keep all original fields
      ...object, // Override with translated content
      
      // Preserve important metadata that shouldn't be translated
      _id: meetingData._id,
      user: meetingData.user,
      userId: meetingData.userId,
      meetingType: meetingData.meetingType, // Keep enum value
      createdAt: meetingData.createdAt,
      updatedAt: meetingData.updatedAt,
      recordingAudioUrl: meetingData.recordingAudioUrl,
      recordingVideoUrl: meetingData.recordingVideoUrl,
      recordingLength: meetingData.recordingLength,
      emailRecipients: meetingData.emailRecipients,
      type: meetingData.type,
      processingMethod: meetingData.processingMethod,
      processingErrors: meetingData.processingErrors,
      
      // Preserve boolean flags
      hasActionItems: meetingData.hasActionItems,
      hasProjects: meetingData.hasProjects,
      hasDecisions: meetingData.hasDecisions,
      hasImplementationPlan: meetingData.hasImplementationPlan,
      hasChallengesRisks: meetingData.hasChallengesRisks,
      hasKeyInitiatives: meetingData.hasKeyInitiatives,
      
      // Add translation metadata
      isTranslated: true,
      originalLanguage: 'en',
      targetLanguage: targetLanguageCode,
      targetLanguageName: targetLanguageName,
      translatedAt: new Date().toISOString()
    };

    console.log(`Translation to ${targetLanguageName} completed successfully`);
    
    // Validate that the translation uses Roman/Latin script
    const validatedMeeting = validateRomanScript(translatedMeeting, targetLanguageCode);
    
    return validatedMeeting;

  } catch (error) {
    console.error(`Translation to ${targetLanguageName} failed:`, error);
    
    // Provide more specific error messages
    if (error.message.includes('API_KEY')) {
      throw new Error('Translation service not configured. Please check API keys.');
    }
    
    if (error.message.includes('quota') || error.message.includes('limit')) {
      throw new Error('Translation service quota exceeded. Please try again later.');
    }
    
    if (error.message.includes('network') || error.message.includes('connection')) {
      throw new Error('Network error during translation. Please check your connection.');
    }
    
    throw new Error(`Translation failed: ${error.message}`);
  }
};

// Helper function to get language-specific formatting
const getLanguageSpecificFormatting = (targetLanguageCode) => {
  const languageFormats = {
    'ur': {
      dateFormat: 'DD/MM/YYYY',
      direction: 'rtl',
      currency: 'PKR'
    },
    'ar': {
      dateFormat: 'DD/MM/YYYY',
      direction: 'rtl',
      currency: 'SAR'
    },
    'zh': {
      dateFormat: 'YYYY年MM月DD日',
      direction: 'ltr',
      currency: 'CNY'
    },
    'ja': {
      dateFormat: 'YYYY年MM月DD日',
      direction: 'ltr',
      currency: 'JPY'
    },
    'ko': {
      dateFormat: 'YYYY년 MM월 DD일',
      direction: 'ltr',
      currency: 'KRW'
    },
    'hi': {
      dateFormat: 'DD/MM/YYYY',
      direction: 'ltr',
      currency: 'INR'
    },
    'default': {
      dateFormat: 'DD/MM/YYYY',
      direction: 'ltr',
      currency: 'USD'
    }
  };
  
  return languageFormats[targetLanguageCode] || languageFormats.default;
};

// Validation function to check translation quality
const validateTranslation = (originalData, translatedData) => {
  const validationErrors = [];
  
  // Check if all required fields are present
  if (!translatedData.title) validationErrors.push('Title translation missing');
  if (!translatedData.summary) validationErrors.push('Summary translation missing');
  
  // Check if arrays have the same length
  if (originalData.participants?.length !== translatedData.participants?.length) {
    validationErrors.push('Participants count mismatch');
  }
  
  if (originalData.agenda?.length !== translatedData.agenda?.length) {
    validationErrors.push('Agenda items count mismatch');
  }
  
  if (originalData.minutes?.length !== translatedData.minutes?.length) {
    validationErrors.push('Minutes count mismatch');
  }
  
  if (originalData.nextSteps?.length !== translatedData.nextSteps?.length) {
    validationErrors.push('Next steps count mismatch');
  }
  
  if (originalData.transcript?.length !== translatedData.transcript?.length) {
    validationErrors.push('Transcript length mismatch');
  }
  
  return {
    isValid: validationErrors.length === 0,
    errors: validationErrors
  };
};

// Structured transcript formatting using Gemini
const formatTranscriptWithSpeakers = async (rawTranscript) => {
  try {
    const { object } = await generateObject({
      model: openai('gpt-3.5-turbo'), // or 'gemini-1.5-flash' for faster/cheaper
      schema: TranscriptSchema,
      prompt: `
        Format this raw meeting transcript into a structured list of speaker utterances.
        
        Rules:
        - Identify speaker changes based on natural language cues
        - Use generic names (Speaker1, Speaker2, etc.) if real names cannot be determined
        - Maintain conversation order
        - Do not invent content
        - Split into logical speaker segments
        
        Raw transcript: ${rawTranscript}
      `,
      temperature: 0.1,
    });

    return object.transcript;
  } catch (error) {
    console.error("Structured transcript formatting failed:", error);
    
    return [{
      speaker: "Speaker1",
      text: rawTranscript || "No transcript available"
    }];
  }
};

// 1. Extract basic meeting information
const extractBasicMeetingInfo = async (formattedTranscription) => {
  try {
    const transcriptText = Array.isArray(formattedTranscription) 
      ? formattedTranscription.map(item => `${item.speaker}: ${item.text}`).join('\n')
      : JSON.stringify(formattedTranscription);

    const { object } = await generateObject({
      model: openai('gpt-3.5-turbo'),
      schema: BasicMeetingInfoSchema,
      prompt: `
        Extract basic meeting information from this transcript.
        
        TASKS:
        1. Generate a descriptive title (5-8 words) based on the main topic discussed
        2. Extract unique participant names mentioned in the transcript
        3. Write a 2-3 sentence summary of what was discussed
        4. List 3-5 main agenda topics that were covered
        5. Classify the meeting type based on content:
           - planning: Planning sessions, roadmap discussions, strategy meetings
           - status-update: Progress reports, standup meetings, check-ins
           - brainstorming: Idea generation, creative sessions, problem-solving
           - decision-making: Making choices, approving plans, voting
           - project-review: Retrospectives, project evaluations, performance reviews
           - general: Everything else
        
        RULES:
        - Title should reflect the actual content discussed
        - Only include participants actually mentioned by name
        - Summary should be factual and concise
        - Agenda items should be specific topics, not generic phrases
        
        Transcript:
        ${transcriptText}
      `,
      temperature: 0.1,
    });

    return object;
  } catch (error) {
    console.error("Basic meeting info extraction failed:", error);
    return {
      title: "Meeting Session",
      participants: [],
      summary: "Meeting information could not be extracted.",
      agenda: [],
      meetingType: 'general'
    };
  }
};

// 2. Extract meeting minutes/discussion points
const extractMeetingMinutes = async (formattedTranscription) => {
  try {
    const transcriptText = Array.isArray(formattedTranscription) 
      ? formattedTranscription.map(item => `${item.speaker}: ${item.text}`).join('\n')
      : JSON.stringify(formattedTranscription);

    const { object } = await generateObject({
      model: openai('gpt-3.5-turbo'),
      schema: MeetingMinutesSchema,
      prompt: `
        Extract key discussion points and meeting minutes from this transcript.
        
        FOCUS ON:
        - Important discussions and topics covered
        - Key points made by participants
        - Decisions or conclusions reached
        - Important information shared
        
        IGNORE:
        - Small talk and casual conversation
        - Technical difficulties or interruptions
        - Off-topic discussions
        
        FORMAT:
        - Each minute should have a clear topic (2-4 words)
        - Details should be 1-2 sentences explaining what was discussed
        - Maximum 8-10 minutes total
        
        Transcript:
        ${transcriptText}
      `,
      temperature: 0.1,
    });

    return object;
  } catch (error) {
    console.error("Meeting minutes extraction failed:", error);
    return { minutes: [] };
  }
};

// 3. Extract action items and tasks
const extractActionItems = async (formattedTranscription) => {
  try {
    const transcriptText = Array.isArray(formattedTranscription) 
      ? formattedTranscription.map(item => `${item.speaker}: ${item.text}`).join('\n')
      : JSON.stringify(formattedTranscription);

    const { object } = await generateObject({
      model: openai('gpt-3.5-turbo'),
      schema: ActionItemsSchema,
      prompt: `
        Extract action items, tasks, and assignments from this transcript.
        
        LOOK FOR:
        - "I'll do..." / "I will..."
        - "Can you..." / "Could you..."
        - "We need to..." followed by assignment
        - "Action item:" or "TODO:"
        - Clear assignments with deadlines
        
        ASSIGNMENT RULES:
        - assignee: Person who will do the task
        - assignedBy: Person who assigned it (if mentioned)
        - due: Use ONLY these formats:
          * "today", "tomorrow"
          * "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"
          * "next week", "this week"
          * "YYYY-MM-DD" for specific dates
          * null if no deadline mentioned
        
        PRIORITY RULES:
        - high: Urgent, ASAP, critical, emergency
        - medium: Important, should do, normal priority
        - low: Nice to have, when possible, future consideration
        
        CATEGORY RULES:
        - task: Regular work tasks
        - activity: Meetings, calls, events
        - project: Larger initiatives
        - follow-up: Check-ins, status updates
        
        ONLY extract explicitly mentioned action items - don't invent tasks!
        
        Transcript:
        ${transcriptText}
      `,
      temperature: 0.1,
    });

    return object;
  } catch (error) {
    console.error("Action items extraction failed:", error);
    return { nextSteps: [] };
  }
};

// 4. Extract larger projects
const extractProjects = async (formattedTranscription) => {
  try {
    const transcriptText = Array.isArray(formattedTranscription) 
      ? formattedTranscription.map(item => `${item.speaker}: ${item.text}`).join('\n')
      : JSON.stringify(formattedTranscription);

    const { object } = await generateObject({
      model: openai('gpt-3.5-turbo'),
      schema: ProjectsSchema,
      prompt: `
        Extract larger projects and initiatives from this transcript.
        
        LOOK FOR:
        - Multi-step initiatives
        - Projects with multiple deliverables
        - Long-term efforts (weeks/months)
        - Cross-functional work
        - Major feature developments
        
        DIFFERENT FROM TASKS:
        - Projects are bigger than single tasks
        - Usually have multiple components
        - Take longer than a few days
        - May involve multiple people
        
        SCOPE ITEMS:
        - Key deliverables or components
        - Major milestones
        - Requirements mentioned
        
        Only extract if there's substantial discussion about the project!
        
        Transcript:
        ${transcriptText}
      `,
      temperature: 0.1,
    });

    return object;
  } catch (error) {
    console.error("Projects extraction failed:", error);
    return { projects: [] };
  }
};

// 5. Extract key initiatives (strategic level)
const extractKeyInitiatives = async (formattedTranscription) => {
  try {
    const transcriptText = Array.isArray(formattedTranscription) 
      ? formattedTranscription.map(item => `${item.speaker}: ${item.text}`).join('\n')
      : JSON.stringify(formattedTranscription);

    const { object } = await generateObject({
      model: openai('gpt-3.5-turbo'),
      schema: KeyInitiativesSchema,
      prompt: `
        Extract strategic initiatives and key business efforts from this transcript.
        
        LOOK FOR:
        - Strategic business initiatives
        - Company-wide efforts
        - New product/service launches
        - Process improvements
        - Organizational changes
        - Long-term goals and objectives
        
        CHARACTERISTICS:
        - Usually company or department-wide
        - Strategic importance
        - Clear business objectives
        - Assigned ownership/leadership
        
        FORMAT:
        - title: Short, descriptive name
        - description: What the initiative involves
        - objective: What it aims to achieve
        - ownership: Who's leading it (person or team)
        
        Only extract if there's meaningful discussion about strategic initiatives!
        
        Transcript:
        ${transcriptText}
      `,
      temperature: 0.1,
    });

    return object;
  } catch (error) {
    console.error("Key initiatives extraction failed:", error);
    return { keyInitiatives: [] };
  }
};

// 6. Extract implementation planning details
const extractImplementationPlan = async (formattedTranscription) => {
  try {
    const transcriptText = Array.isArray(formattedTranscription) 
      ? formattedTranscription.map(item => `${item.speaker}: ${item.text}`).join('\n')
      : JSON.stringify(formattedTranscription);

    const { object } = await generateObject({
      model: openai('gpt-3.5-turbo'),
      schema: ImplementationPlanSchema,
      prompt: `
        Extract implementation planning information from this transcript.
        
        LOOK FOR:
        - Planning discussions
        - Implementation objectives
        - Timeline discussions
        - Start/end dates mentioned
        - Milestones and checkpoints
        - Rollout phases
        
        OBJECTIVES:
        - What are they trying to achieve?
        - Implementation goals
        - Success criteria
        
        TIMELINE:
        - Start dates, end dates
        - Key milestones
        - Phase deadlines
        - Important checkpoints
        
        Set hasTimeline to true ONLY if specific dates or timeline is discussed.
        Return null for implementationPlan if no planning discussion occurs.
        
        Transcript:
        ${transcriptText}
      `,
      temperature: 0.1,
    });

    return object;
  } catch (error) {
    console.error("Implementation plan extraction failed:", error);
    return { implementationPlan: null };
  }
};

// 7. Extract challenges and risks
const extractChallengesRisks = async (formattedTranscription) => {
  try {
    const transcriptText = Array.isArray(formattedTranscription) 
      ? formattedTranscription.map(item => `${item.speaker}: ${item.text}`).join('\n')
      : JSON.stringify(formattedTranscription);

    const { object } = await generateObject({
      model: openai('gpt-3.5-turbo'),
      schema: ChallengesRisksSchema,
      prompt: `
        Extract challenges and risks mentioned in this transcript.
        
        CHALLENGES (current problems):
        - Issues being faced now
        - Obstacles to progress
        - Current difficulties
        - Problems that need solving
        
        RISKS (potential future problems):
        - Things that might go wrong
        - Potential obstacles
        - Future concerns
        - "What if..." scenarios
        
        IMPACT LEVELS:
        - high: Major impact on success/timeline
        - medium: Moderate impact, manageable
        - low: Minor impact, easily addressed
        
        MITIGATION:
        - Solutions or approaches discussed
        - How to address the challenge/risk
        - Preventive measures mentioned
        
        Only extract if explicitly discussed - don't assume risks!
        
        Transcript:
        ${transcriptText}
      `,
      temperature: 0.1,
    });

    return object;
  } catch (error) {
    console.error("Challenges and risks extraction failed:", error);
    return { challengesAndRisks: [] };
  }
};

// 8. Extract decisions made
const extractDecisions = async (formattedTranscription) => {
  try {
    const transcriptText = Array.isArray(formattedTranscription) 
      ? formattedTranscription.map(item => `${item.speaker}: ${item.text}`).join('\n')
      : JSON.stringify(formattedTranscription);

    const { object } = await generateObject({
      model: openai('gpt-3.5-turbo'),
      schema: DecisionsSchema,
      prompt: `
        Extract explicit decisions made during this meeting.
        
        LOOK FOR:
        - "We decided to..."
        - "Let's go with..."
        - "I approve..."
        - "We'll proceed with..."
        - Clear choices made between options
        - Approvals given
        - Rejections of proposals
        
        FORMAT:
        - decision: What was decided (clear, specific)
        - context: Why this decision was needed (if mentioned)
        - impact: What this affects (if discussed)
        - decidedBy: Who made the decision (if clear)
        
        ONLY extract actual decisions - not discussions or considerations!
        Must be clear resolution of a choice or approval.
        
        Transcript:
        ${transcriptText}
      `,
      temperature: 0.1,
    });

    return object;
  } catch (error) {
    console.error("Decisions extraction failed:", error);
    return { decisionsMade: [] };
  }
};

// Main orchestration function with parallel processing
const extractComprehensiveMeetingData = async (formattedTranscription) => {
  try {
    console.log("🔄 Starting modular meeting data extraction...");
    
    // Run all extractions in parallel for better performance
    const [
      basicInfo,
      meetingMinutes,
      actionItems,
      projects,
      keyInitiatives,
      implementationPlan,
      challengesRisks,
      decisions
    ] = await Promise.all([
      extractBasicMeetingInfo(formattedTranscription),
      extractMeetingMinutes(formattedTranscription),
      extractActionItems(formattedTranscription),
      extractProjects(formattedTranscription),
      extractKeyInitiatives(formattedTranscription),
      extractImplementationPlan(formattedTranscription),
      extractChallengesRisks(formattedTranscription),
      extractDecisions(formattedTranscription)
    ]);

    // Combine all results
    const comprehensiveData = {
      basicInfo,
      minutes: meetingMinutes.minutes,
      nextSteps: actionItems.nextSteps,
      projects: projects.projects,
      keyInitiatives: keyInitiatives.keyInitiatives,
      implementationPlan: implementationPlan.implementationPlan,
      challengesAndRisks: challengesRisks.challengesAndRisks,
      decisionsMade: decisions.decisionsMade,
      
      // Set boolean flags
      hasActionItems: actionItems.nextSteps.length > 0,
      hasProjects: projects.projects.length > 0,
      hasDecisions: decisions.decisionsMade.length > 0,
      hasImplementationPlan: !!implementationPlan.implementationPlan?.hasTimeline,
      hasChallengesRisks: challengesRisks.challengesAndRisks.length > 0,
      hasKeyInitiatives: keyInitiatives.keyInitiatives.length > 0,
      
      // Use meeting type from basic info
      meetingType: basicInfo.meetingType
    };

    console.log("✅ Modular extraction completed:", {
      meetingType: comprehensiveData.meetingType,
      minutes: comprehensiveData.minutes.length,
      actionItems: comprehensiveData.nextSteps.length,
      projects: comprehensiveData.projects.length,
      initiatives: comprehensiveData.keyInitiatives.length,
      decisions: comprehensiveData.decisionsMade.length,
      challengesRisks: comprehensiveData.challengesAndRisks.length,
      hasImplementationPlan: comprehensiveData.hasImplementationPlan
    });

    return comprehensiveData;

  } catch (error) {
    console.error("Comprehensive meeting data extraction failed:", error);
    
    // Fallback to basic extraction
    try {
      const basicInfo = await extractBasicMeetingInfo(formattedTranscription);
      return {
        basicInfo,
        minutes: [],
        nextSteps: [],
        projects: [],
        keyInitiatives: [],
        challengesAndRisks: [],
        decisionsMade: [],
        implementationPlan: null,
        meetingType: basicInfo.meetingType || 'general',
        hasActionItems: false,
        hasProjects: false,
        hasDecisions: false,
        hasImplementationPlan: false,
        hasChallengesRisks: false,
        hasKeyInitiatives: false
      };
    } catch (fallbackError) {
      console.error("Even basic extraction failed:", fallbackError);
      throw new Error("Complete meeting data extraction failure");
    }
  }
};

// Extract main meeting data with Gemini
const extractMainMeetingData = async (formattedTranscription) => {
  try {
    const { object } = await generateObject({
      model: openai('gpt-3.5-turbo'),
      schema: MeetingDataSchema,
      prompt: `
        Extract meeting data from this structured transcript.
        Generate a relevant English title based on the content.
        Extract unique participant names and create a brief summary.
        
        Rules:
        - Title should be descriptive and based on actual content
        - Participants should be unique speaker names from the transcript
        - Summary should capture main discussion points
        - Agenda should list key topics covered
        
        Transcript: ${JSON.stringify(formattedTranscription)}
      `,
      temperature: 0.2,
    });

    return object;
  } catch (error) {
    console.error("Main meeting data extraction failed:", error);
    
    const participants = Array.isArray(formattedTranscription) 
      ? [...new Set(formattedTranscription.map(item => item.speaker).filter(Boolean))]
      : [];
    
    return {
      title: "Untitled Meeting",
      participants,
      summary: "No summary available.",
      agenda: []
    };
  }
};

const extractMinutesAndNextSteps = async (formattedTranscription) => {
  try {
    const { object } = await generateObject({
      model: openai('gpt-3.5-turbo'),
      schema: MinutesAndStepsSchema,
      prompt: `
        Extract meeting minutes and action items from this transcript.
        
        For minutes: 
        - Extract key discussion points and decisions made
        - Each minute should have a clear topic and detailed explanation
        
        For next steps: 
        - Only extract explicitly mentioned action items
        - Include the person assigned (or "Unassigned" if unclear)
        - For due dates, use ONLY these standardized formats:
          * "today" - for tasks due today
          * "tomorrow" - for tasks due tomorrow  
          * "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday" - for specific days this week or next week
          * "next week" - for tasks due sometime next week
          * "YYYY-MM-DD" - for specific dates (e.g., "2025-06-30")
          * null - if no due date is mentioned
        - Do NOT include specific times (like "4 PM" or "by 5:30") in the due date field
        - Do NOT use phrases like "end of day", "this afternoon", "ASAP", "by [time]"
        - Convert natural language dates to the standardized formats above
        - Examples:
          * "by 4 PM today" → "today"
          * "tomorrow morning" → "tomorrow"  
          * "by end of day Friday" → "friday"
          * "next Monday at 3 PM" → "monday"
          * "sometime next week" → "next week"
          * "June 30th" → "2025-06-30"
        - Do not invent tasks that weren't clearly stated
        
        Transcript: ${JSON.stringify(formattedTranscription)}
      `,
      temperature: 0.2,
    });

    return object;
  } catch (error) {
    console.error("Minutes and next steps extraction failed:", error);
    return {
      minutes: [],
      nextSteps: []
    };
  }
};

// NEW: Function to analyze discussion topics
const analyzeDiscussionTopics = async (rawTranscript, scheduledTopics, userId, sessionId = null) => {
  try {
    if (!scheduledTopics || scheduledTopics.length === 0) {
      console.log(`📋 [User ${userId}][Session ${sessionId}] No scheduled topics to analyze`);
      return null;
    }

    console.log(`📋 [User ${userId}][Session ${sessionId}] Analyzing ${scheduledTopics.length} scheduled discussion topics`);
    
    const { object } = await generateObject({
      model: openai('gpt-3.5-turbo'),
      schema: DiscussionAnalysisSchema,
      prompt: `
        Analyze this meeting transcript to determine if the scheduled discussion topics were actually covered.
        
        **SCHEDULED DISCUSSION TOPICS:**
        ${scheduledTopics.map((topic, index) => `${index + 1}. ${topic}`).join('\n')}
        
        **MEETING TRANSCRIPT:**
        ${rawTranscript}
        
        **ANALYSIS REQUIREMENTS:**
        
        For each scheduled topic, determine:
        1. **wasDiscussed**: Was this topic actually mentioned or discussed in the meeting?
        2. **discussionLevel**: How thoroughly was it covered?
           - "comprehensive": Significant discussion, multiple speakers, detailed coverage
           - "partial": Some discussion but not thorough, briefly mentioned
           - "minimal": Only briefly touched upon or mentioned in passing
           - "not-discussed": No evidence of discussion in the transcript
        
        3. **transcriptEvidence**: Find direct quotes from the transcript that show this topic was discussed. Include speaker names if available.
        
        4. **summary**: Explain in 1-2 sentences how this topic was covered (or why it wasn't covered)
        
        5. **timeSpentPercentage**: Estimate what percentage of the meeting was spent on this topic (0% if not discussed)
        
        **MATCHING RULES:**
        - Look for exact keyword matches, synonyms, and related concepts
        - Consider context - the same words might mean different things
        - Topics might be discussed in different ways than originally planned
        - Be generous but accurate - if there's reasonable evidence of discussion, count it
        
        **EXAMPLES:**
        - Scheduled: "Budget Review" → Transcript mentions "financial planning", "costs", "expenses" → MATCH
        - Scheduled: "Team Performance" → Transcript discusses "how the team is doing", "productivity" → MATCH  
        - Scheduled: "New Product Launch" → Only mentions "product" in passing → MINIMAL
        - Scheduled: "Marketing Strategy" → No mention of marketing, advertising, or promotion → NOT DISCUSSED
        
        **OVERALL ANALYSIS:**
        - Calculate overallMatchScore as percentage of topics that were discussed (any level above "not-discussed")
        - Provide a summary of adherence to the planned agenda
        - Note any important topics discussed that weren't originally scheduled
        
        Be thorough but fair in your analysis. The goal is to help users understand if their meetings stay on track.
      `,
      temperature: 0.1,
    });

    // Calculate overall statistics
    const discussedTopics = object.topicAnalysis.filter(topic => topic.wasDiscussed);
    const comprehensiveTopics = object.topicAnalysis.filter(topic => topic.discussionLevel === 'comprehensive');
    
    console.log(`✅ [User ${userId}][Session ${sessionId}] Discussion analysis completed:`, {
      totalScheduled: scheduledTopics.length,
      discussed: discussedTopics.length,
      comprehensive: comprehensiveTopics.length,
      matchScore: object.overallMatchScore
    });

    return {
      discussionTopicsAnalysis: object.topicAnalysis,
      hasDiscussionAnalysis: true,
      discussionMatchScore: object.overallMatchScore,
      discussionSummary: object.discussionSummary,
      additionalTopicsDiscussed: object.additionalTopicsDiscussed || []
    };

  } catch (error) {
    console.error(`❌ [User ${userId}][Session ${sessionId}] Discussion analysis failed:`, error);
    
    // Return fallback structure
    return {
      discussionTopicsAnalysis: scheduledTopics.map(topic => ({
        scheduledTopic: topic,
        wasDiscussed: false,
        discussionLevel: 'not-discussed',
        transcriptEvidence: [],
        summary: 'Analysis failed - unable to determine if topic was discussed',
        timeSpentPercentage: 0
      })),
      hasDiscussionAnalysis: true,
      discussionMatchScore: 0,
      discussionSummary: 'Discussion analysis could not be completed due to processing error',
      additionalTopicsDiscussed: []
    };
  }
};


export {
  formatTranscriptWithSpeakers,
  extractMainMeetingData,
  extractMinutesAndNextSteps,
  translateMeetingData,
  getLanguageSpecificFormatting,
  validateTranslation,
  validateRomanScript,
  getTranslationExamples,
  extractComprehensiveMeetingData,
  analyzeDiscussionTopics
};

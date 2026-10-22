// import meetingSchema from "../models/meeting.model.js";
// import { translateMeetingData } from "../prompts.js";

// const translateMeeting = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { targetLanguage, languageName } = req.body;
    
//     // Validate required fields
//     if (!targetLanguage || !languageName) {
//       return res.status(400).json({
//         success: false,
//         message: 'Target language and language name are required'
//       });
//     }

//     // Validate language code (basic validation)
//     const validLanguageCodes = ['ur', 'es', 'fr', 'de', 'ar', 'zh', 'ja', 'ko', 'hi', 'pt', 'ru', 'it'];
//     if (!validLanguageCodes.includes(targetLanguage)) {
//       return res.status(400).json({
//         success: false,
//         message: 'Invalid language code'
//       });
//     }

//     // Fetch the meeting from database
//     const meeting = await meetingSchema.findById(id);
//     if (!meeting) {
//       return res.status(404).json({
//         success: false,
//         message: 'Meeting not found'
//       });
//     }

//     // Check authorization (if needed)
//     // Assuming you have user authentication middleware that sets req.user
//     // if (meeting.userId.toString() !== req.user.id) {
//     //   return res.status(403).json({
//     //     success: false,
//     //     message: 'Unauthorized to access this meeting'
//     //   });
//     // }

//     console.log(`Starting translation to ${languageName} for meeting: ${meeting.title}`);

//     // Translate the meeting data using Gemini
//     const translatedMeeting = await translateMeetingData(meeting.toObject(), targetLanguage, languageName);

//     console.log('Translation completed successfully');

//     // Return the translated meeting data
//     return res.status(200).json({
//       success: true,
//       message: `Meeting translated to ${languageName} successfully`,
//       translatedMeeting,
//       originalMeeting: meeting.toObject()
//     });

//   } catch (error) {
//     console.error('Translation error:', error);
    
//     // Handle specific error types
//     if (error.message.includes('generateObject')) {
//       return res.status(500).json({
//         success: false,
//         message: 'Translation service temporarily unavailable. Please try again.'
//       });
//     }

//     if (error.message.includes('API_KEY') || error.message.includes('authentication')) {
//       return res.status(500).json({
//         success: false,
//         message: 'Translation service configuration error. Please contact support.'
//       });
//     }

//     return res.status(500).json({
//       success: false,
//       message: error.message || 'Failed to translate meeting'
//     });
//   }
// };

// export {
//   translateMeeting
// };




import meetingSchema from "../models/meeting.model.js";
import { translateMeetingData } from "../prompts.js";

const translateMeeting = async (req, res) => {
  try {
    const { id } = req.params;
    const { targetLanguage, languageName } = req.body;
    
    // Validate required fields
    if (!targetLanguage || !languageName) {
      return res.status(400).json({
        success: false,
        message: 'Target language and language name are required'
      });
    }

    // Validate language code (expanded list)
    const validLanguageCodes = [
      'ur', 'es', 'fr', 'de', 'ar', 'zh', 'ja', 'ko', 'hi', 'pt', 'ru', 'it',
      'nl', 'pl', 'tr', 'sv', 'da', 'no', 'fi', 'th', 'vi', 'id', 'ms', 'tl'
    ];
    
    if (!validLanguageCodes.includes(targetLanguage)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid language code. Supported languages: ' + validLanguageCodes.join(', ')
      });
    }

    // Fetch the meeting from database with all fields
    const meeting = await meetingSchema.findById(id).lean(); // Use .lean() for better performance
    
    if (!meeting) {
      return res.status(404).json({
        success: false,
        message: 'Meeting not found'
      });
    }

    // Check authorization (uncomment if you have auth middleware)
    // if (meeting.user.toString() !== req.user.id) {
    //   return res.status(403).json({
    //     success: false,
    //     message: 'Unauthorized to access this meeting'
    //   });
    // }

    console.log(`Starting comprehensive translation to ${languageName} for meeting: ${meeting.title}`);
    console.log('Meeting data structure:', {
      hasProjects: meeting.projects?.length > 0,
      hasKeyInitiatives: meeting.keyInitiatives?.length > 0,
      hasImplementationPlan: !!meeting.implementationPlan,
      hasChallengesRisks: meeting.challengesAndRisks?.length > 0,
      hasDecisions: meeting.decisionsMade?.length > 0,
      hasNextSteps: meeting.nextSteps?.length > 0,
      hasMinutes: meeting.minutes?.length > 0
    });

    // Translate the comprehensive meeting data
    const translatedMeeting = await translateMeetingData(meeting, targetLanguage, languageName);

    console.log('Comprehensive translation completed successfully');

    // Return detailed response with translation summary
    return res.status(200).json({
      success: true,
      message: `Meeting translated to ${languageName} successfully`,
      translationSummary: {
        fieldsTranslated: {
          basicInfo: ['title', 'summary', 'agenda', 'participants'],
          content: ['minutes', 'nextSteps', 'transcript'],
          enhanced: [
            ...(meeting.projects?.length > 0 ? ['projects'] : []),
            ...(meeting.keyInitiatives?.length > 0 ? ['keyInitiatives'] : []),
            ...(meeting.implementationPlan ? ['implementationPlan'] : []),
            ...(meeting.challengesAndRisks?.length > 0 ? ['challengesAndRisks'] : []),
            ...(meeting.decisionsMade?.length > 0 ? ['decisionsMade'] : [])
          ]
        },
        itemCounts: {
          minutes: translatedMeeting.minutes?.length || 0,
          nextSteps: translatedMeeting.nextSteps?.length || 0,
          projects: translatedMeeting.projects?.length || 0,
          keyInitiatives: translatedMeeting.keyInitiatives?.length || 0,
          challengesAndRisks: translatedMeeting.challengesAndRisks?.length || 0,
          decisionsMade: translatedMeeting.decisionsMade?.length || 0,
          transcript: translatedMeeting.transcript?.length || 0
        },
        targetLanguage: targetLanguage,
        targetLanguageName: languageName,
        translatedAt: translatedMeeting.translatedAt
      },
      translatedMeeting,
      // Optionally include original for comparison (remove in production if too large)
      // originalMeeting: meeting
    });

  } catch (error) {
    console.error('Translation error:', error);
    
    // Handle specific error types with better error messages
    if (error.message.includes('generateObject')) {
      return res.status(500).json({
        success: false,
        message: 'Translation service temporarily unavailable. Please try again later.',
        errorType: 'translation_service_error'
      });
    }

    if (error.message.includes('API_KEY') || error.message.includes('authentication')) {
      return res.status(500).json({
        success: false,
        message: 'Translation service configuration error. Please contact support.',
        errorType: 'configuration_error'
      });
    }

    if (error.message.includes('quota') || error.message.includes('limit')) {
      return res.status(429).json({
        success: false,
        message: 'Translation service quota exceeded. Please try again later.',
        errorType: 'quota_exceeded'
      });
    }

    if (error.message.includes('network') || error.message.includes('connection')) {
      return res.status(503).json({
        success: false,
        message: 'Network error during translation. Please check your connection.',
        errorType: 'network_error'
      });
    }

    return res.status(500).json({
      success: false,
      message: error.message || 'Failed to translate meeting',
      errorType: 'unknown_error'
    });
  }
};

// Optional: Add a route to get translation status/capabilities
const getTranslationCapabilities = async (req, res) => {
  try {
    const supportedLanguages = {
      'ur': 'Urdu (Roman)',
      'hi': 'Hindi (Roman)',
      'ar': 'Arabic (Roman)',
      'es': 'Spanish',
      'fr': 'French',
      'de': 'German',
      'zh': 'Chinese (Pinyin)',
      'ja': 'Japanese (Romaji)',
      'ko': 'Korean (Romanized)',
      'pt': 'Portuguese',
      'ru': 'Russian',
      'it': 'Italian',
      'nl': 'Dutch',
      'pl': 'Polish',
      'tr': 'Turkish',
      'sv': 'Swedish',
      'da': 'Danish',
      'no': 'Norwegian',
      'fi': 'Finnish',
      'th': 'Thai',
      'vi': 'Vietnamese',
      'id': 'Indonesian',
      'ms': 'Malay',
      'tl': 'Filipino'
    };

    const translatableFields = {
      basic: ['title', 'summary', 'participants', 'agenda'],
      content: ['minutes', 'nextSteps', 'transcript'],
      enhanced: [
        'projects (title, description, scope)',
        'keyInitiatives (title, description, objective)', 
        'implementationPlan (objectives, timeline)',
        'challengesAndRisks (description, mitigation)',
        'decisionsMade (decision, context, impact)'
      ]
    };

    return res.status(200).json({
      success: true,
      supportedLanguages,
      translatableFields,
      notes: {
        scriptOutput: 'All translations use Latin/Roman script for PDF compatibility',
        preservedFields: ['dates', 'names', 'technical IDs', 'boolean flags', 'enum values']
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to get translation capabilities'
    });
  }
};

export {
  translateMeeting,
  getTranslationCapabilities
};

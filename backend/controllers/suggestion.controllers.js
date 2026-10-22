// // // Add this to your meeting controller file (paste-3.txt)

// // import { generateObject } from 'ai';
// // import { google } from '@ai-sdk/google';
// // import { z } from 'zod';

// // // Schema for suggestions response
// // const SuggestionsSchema = z.object({
// //   suggestions: z.array(z.string()).describe("Array of helpful response suggestions based on the conversation")
// // });

// // /**
// //  * Generate AI-powered suggestions based on conversation transcript
// //  */
// // const getSuggestions = async (req, res) => {
// //   try {
// //     const { transcript } = req.body;
// //     const user = req.user;
    
// //     if (!transcript || typeof transcript !== 'string' || transcript.trim().length === 0) {
// //       return res.status(400).json({
// //         success: false,
// //         error: "Transcript is required and cannot be empty"
// //       });
// //     }

// //     console.log(`🤖 [User ${user._id}] Generating suggestions for transcript (${transcript.length} characters)`);

// //     // Generate suggestions using Gemini
// //     const { object } = await generateObject({
// //       model: google('gemini-1.5-flash'),
// //       schema: SuggestionsSchema,
// //       prompt: `
// //         You are an AI assistant helping someone participate in a live conversation or meeting. 
// //         Based on the following conversation transcript, provide 3-5 helpful suggestions for what the person could say or respond with.

// //         Guidelines for suggestions:
// //         1. Be contextually relevant to the current conversation
// //         2. Provide constructive and professional responses
// //         3. Include different types of responses: questions, comments, agreements, or clarifications
// //         4. Keep suggestions concise but complete (1-2 sentences each)
// //         5. Make suggestions that would naturally fit into the flow of conversation
// //         6. Be helpful for someone who might not know how to respond
// //         7. Include both active participation and supportive responses
// //         8. Consider the tone and formality level of the conversation

// //         Examples of good suggestion types:
// //         - Clarifying questions ("Could you elaborate on the timeline for this project?")
// //         - Supportive agreements ("That's a great point about user experience")
// //         - Constructive additions ("We should also consider the budget implications")
// //         - Process questions ("What would be the next steps for implementation?")
// //         - Summary confirmations ("So if I understand correctly, we're prioritizing...")

// //         Current conversation transcript:
// //         ${transcript}

// //         Generate 3-5 helpful suggestions that would be appropriate responses in this conversation.
// //         Focus on what would be genuinely useful for someone participating in this discussion.
// //       `,
// //       temperature: 0.7, // Moderate creativity for natural suggestions
// //     });

// //     console.log(`✅ [User ${user._id}] Generated ${object.suggestions.length} suggestions successfully`);

// //     // Return the suggestions
// //     res.json({
// //       success: true,
// //       suggestions: object.suggestions,
// //       timestamp: new Date().toISOString(),
// //       transcriptLength: transcript.length
// //     });

// //   } catch (error) {
// //     console.error(`❌ [User ${req.user?._id}] Error generating suggestions:`, error);
    
// //     // Provide more specific error messages
// //     if (error.message.includes('API_KEY')) {
// //       return res.status(500).json({
// //         success: false,
// //         error: 'AI suggestion service not configured. Please check API keys.'
// //       });
// //     }
    
// //     if (error.message.includes('quota') || error.message.includes('limit')) {
// //       return res.status(429).json({
// //         success: false,
// //         error: 'AI service quota exceeded. Please try again later.'
// //       });
// //     }
    
// //     if (error.message.includes('network') || error.message.includes('connection')) {
// //       return res.status(503).json({
// //         success: false,
// //         error: 'Network error with AI service. Please check your connection.'
// //       });
// //     }
    
// //     // Generic error response
// //     res.status(500).json({
// //       success: false,
// //       error: 'Failed to generate suggestions. Please try again.',
// //       details: process.env.NODE_ENV === 'development' ? error.message : undefined
// //     });
// //   }
// // };

// // // Alternative function for getting contextual suggestions with more advanced prompting
// // const getContextualSuggestions = async (req, res) => {
// //   try {
// //     const { transcript, context } = req.body;
// //     const user = req.user;
    
// //     if (!transcript || typeof transcript !== 'string' || transcript.trim().length === 0) {
// //       return res.status(400).json({
// //         success: false,
// //         error: "Transcript is required and cannot be empty"
// //       });
// //     }

// //     console.log(`🤖 [User ${user._id}] Generating contextual suggestions`);

// //     // More advanced prompting with context
// //     const contextPrompt = context ? `
// //       Additional context: ${context}
// //       Meeting type: ${context.meetingType || 'General discussion'}
// //       User role: ${context.userRole || 'Participant'}
// //       Difficulty level: ${context.difficulty || 'Need help responding'}
// //     ` : '';

// //     const { object } = await generateObject({
// //       model: google('gemini-1.5-flash'),
// //       schema: SuggestionsSchema,
// //       prompt: `
// //         You are an intelligent conversation assistant helping someone actively participate in a live discussion.
// //         Your goal is to provide contextually appropriate, helpful, and natural response suggestions.

// //         ${contextPrompt}

// //         Conversation Analysis:
// //         - Identify the main topics being discussed
// //         - Understand the current flow and direction of conversation
// //         - Note any questions that need answers
// //         - Identify opportunities for constructive input
// //         - Consider the tone (formal/informal, collaborative/decisive, etc.)

// //         Suggestion Types to Consider:
// //         1. **Questions for Clarity**: When something needs clarification
// //         2. **Supportive Responses**: When showing agreement or understanding
// //         3. **Constructive Input**: When adding value to the discussion
// //         4. **Process Suggestions**: When discussion needs direction
// //         5. **Summary/Confirmation**: When consensus needs validation

// //         Current Conversation:
// //         ${transcript}

// //         Provide 4-6 specific, actionable suggestions that:
// //         - Are immediately relevant to the last few exchanges
// //         - Help the person contribute meaningfully
// //         - Sound natural and conversational
// //         - Range from safe/supportive to more engaging/leadership-oriented
// //         - Are appropriate for the tone and context of the discussion

// //         Make each suggestion distinct and cover different ways to participate.
// //       `,
// //       temperature: 0.6,
// //     });

// //     console.log(`✅ [User ${user._id}] Generated ${object.suggestions.length} contextual suggestions`);

// //     res.json({
// //       success: true,
// //       suggestions: object.suggestions,
// //       context: context || null,
// //       timestamp: new Date().toISOString(),
// //       transcriptLength: transcript.length
// //     });

// //   } catch (error) {
// //     console.error(`❌ [User ${req.user?._id}] Error generating contextual suggestions:`, error);
    
// //     res.status(500).json({
// //       success: false,
// //       error: 'Failed to generate contextual suggestions. Please try again.',
// //       details: process.env.NODE_ENV === 'development' ? error.message : undefined
// //     });
// //   }
// // };

// // // Export the functions to be added to your routes
// // export { getSuggestions, getContextualSuggestions };










// // Add this to your meeting controller file (paste-3.txt)

// import { generateObject } from 'ai';
// import { openai } from '@ai-sdk/openai';
// import { z } from 'zod';

// // Schema for suggestions response
// const SuggestionsSchema = z.object({
//   suggestions: z.array(z.string()).describe("Array of helpful response suggestions based on the conversation")
// });

// /**
//  * Generate AI-powered suggestions based on conversation transcript
//  */
// const getSuggestions = async (req, res) => {
//   try {
//     const { transcript } = req.body;
//     const user = req.user;
    
//     if (!transcript || typeof transcript !== 'string' || transcript.trim().length === 0) {
//       return res.status(400).json({
//         success: false,
//         error: "Transcript is required and cannot be empty"
//       });
//     }

//     console.log(`🤖 [User ${user._id}] Generating suggestions for transcript (${transcript.length} characters)`);

//     // Generate suggestions using OpenAI
//     const { object } = await generateObject({
//       model: openai('gpt-4o-mini'), // or 'gpt-4o' for more powerful responses
//       schema: SuggestionsSchema,
//       prompt: `
//         You are an AI assistant helping someone participate in a live conversation or meeting. 
//         Based on the following conversation transcript, provide 3-5 helpful suggestions for what the person could say or respond with.

//         Guidelines for suggestions:
//         1. Be contextually relevant to the current conversation
//         2. Provide constructive and professional responses
//         3. Include different types of responses: questions, comments, agreements, or clarifications
//         4. Keep suggestions concise but complete (1-2 sentences each)
//         5. Make suggestions that would naturally fit into the flow of conversation
//         6. Be helpful for someone who might not know how to respond
//         7. Include both active participation and supportive responses
//         8. Consider the tone and formality level of the conversation

//         Examples of good suggestion types:
//         - Clarifying questions ("Could you elaborate on the timeline for this project?")
//         - Supportive agreements ("That's a great point about user experience")
//         - Constructive additions ("We should also consider the budget implications")
//         - Process questions ("What would be the next steps for implementation?")
//         - Summary confirmations ("So if I understand correctly, we're prioritizing...")

//         Current conversation transcript:
//         ${transcript}

//         Generate 3-5 helpful suggestions that would be appropriate responses in this conversation.
//         Focus on what would be genuinely useful for someone participating in this discussion.
//       `,
//       temperature: 0.7, // Moderate creativity for natural suggestions
//     });

//     console.log(`✅ [User ${user._id}] Generated ${object.suggestions.length} suggestions successfully`);

//     // Return the suggestions
//     res.json({
//       success: true,
//       suggestions: object.suggestions,
//       timestamp: new Date().toISOString(),
//       transcriptLength: transcript.length
//     });

//   } catch (error) {
//     console.error(`❌ [User ${req.user?._id}] Error generating suggestions:`, error);
    
//     // Provide more specific error messages
//     if (error.message.includes('API_KEY') || error.message.includes('api_key')) {
//       return res.status(500).json({
//         success: false,
//         error: 'OpenAI API key not configured. Please check your OPENAI_API_KEY environment variable.'
//       });
//     }
    
//     if (error.message.includes('quota') || error.message.includes('limit') || error.message.includes('billing')) {
//       return res.status(429).json({
//         success: false,
//         error: 'OpenAI quota exceeded or billing issue. Please check your OpenAI account.'
//       });
//     }
    
//     if (error.message.includes('network') || error.message.includes('connection')) {
//       return res.status(503).json({
//         success: false,
//         error: 'Network error with OpenAI service. Please check your connection.'
//       });
//     }
    
//     // Generic error response
//     res.status(500).json({
//       success: false,
//       error: 'Failed to generate suggestions. Please try again.',
//       details: process.env.NODE_ENV === 'development' ? error.message : undefined
//     });
//   }
// };

// // Alternative function for getting contextual suggestions with more advanced prompting
// const getContextualSuggestions = async (req, res) => {
//   try {
//     const { transcript, context } = req.body;
//     const user = req.user;
    
//     if (!transcript || typeof transcript !== 'string' || transcript.trim().length === 0) {
//       return res.status(400).json({
//         success: false,
//         error: "Transcript is required and cannot be empty"
//       });
//     }

//     console.log(`🤖 [User ${user._id}] Generating contextual suggestions`);

//     // More advanced prompting with context
//     const contextPrompt = context ? `
//       Additional context: ${context}
//       Meeting type: ${context.meetingType || 'General discussion'}
//       User role: ${context.userRole || 'Participant'}
//       Difficulty level: ${context.difficulty || 'Need help responding'}
//     ` : '';

//     const { object } = await generateObject({
//       model: openai('gpt-4o'), // Using more powerful model for contextual analysis
//       schema: SuggestionsSchema,
//       prompt: `
//         You are an intelligent conversation assistant helping someone actively participate in a live discussion.
//         Your goal is to provide contextually appropriate, helpful, and natural response suggestions.

//         ${contextPrompt}

//         Conversation Analysis:
//         - Identify the main topics being discussed
//         - Understand the current flow and direction of conversation
//         - Note any questions that need answers
//         - Identify opportunities for constructive input
//         - Consider the tone (formal/informal, collaborative/decisive, etc.)

//         Suggestion Types to Consider:
//         1. **Questions for Clarity**: When something needs clarification
//         2. **Supportive Responses**: When showing agreement or understanding
//         3. **Constructive Input**: When adding value to the discussion
//         4. **Process Suggestions**: When discussion needs direction
//         5. **Summary/Confirmation**: When consensus needs validation

//         Current Conversation:
//         ${transcript}

//         Provide 4-6 specific, actionable suggestions that:
//         - Are immediately relevant to the last few exchanges
//         - Help the person contribute meaningfully
//         - Sound natural and conversational
//         - Range from safe/supportive to more engaging/leadership-oriented
//         - Are appropriate for the tone and context of the discussion

//         Make each suggestion distinct and cover different ways to participate.
//       `,
//       temperature: 0.6,
//     });

//     console.log(`✅ [User ${user._id}] Generated ${object.suggestions.length} contextual suggestions`);

//     res.json({
//       success: true,
//       suggestions: object.suggestions,
//       context: context || null,
//       timestamp: new Date().toISOString(),
//       transcriptLength: transcript.length
//     });

//   } catch (error) {
//     console.error(`❌ [User ${req.user?._id}] Error generating contextual suggestions:`, error);
    
//     res.status(500).json({
//       success: false,
//       error: 'Failed to generate contextual suggestions. Please try again.',
//       details: process.env.NODE_ENV === 'development' ? error.message : undefined
//     });
//   }
// };

// // Export the functions to be added to your routes
// export { getSuggestions, getContextualSuggestions };










// Add this to your meeting controller file (paste-3.txt)

import { generateObject } from 'ai';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';

// Schema for single suggestion response
const SuggestionSchema = z.object({
  suggestion: z.string().describe("A single, detailed response suggestion based on the conversation")
});

/**
 * Generate AI-powered suggestion based on conversation transcript
 */
const getSuggestions = async (req, res) => {
  try {
    const { transcript } = req.body;
    const user = req.user;
    
    if (!transcript || typeof transcript !== 'string' || transcript.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: "Transcript is required and cannot be empty"
      });
    }

    console.log(`🤖 [User ${user._id}] Generating suggestion for transcript (${transcript.length} characters)`);

    // Truncate transcript if too long (keep last ~100K characters for context)
    const maxTranscriptLength = 100000;
    const processedTranscript = transcript.length > maxTranscriptLength 
      ? '...' + transcript.slice(-maxTranscriptLength)
      : transcript;

    if (transcript.length > maxTranscriptLength) {
      console.log(`📝 [User ${user._id}] Truncated transcript from ${transcript.length} to ${processedTranscript.length} characters`);
    }

    // Generate single suggestion using OpenAI
    const { object } = await generateObject({
      model: openai('gpt-4o-mini'),
      schema: SuggestionSchema,
      prompt: `
        You are an AI assistant helping someone participate in a live conversation or meeting. 
        Based on the following conversation transcript, provide ONE best, detailed suggestion for what the person should say or respond with.

        Guidelines for the suggestion:
        1. Be contextually relevant and directly address the current conversation
        2. Provide a complete, thoughtful response (2-4 sentences)
        3. Make it professional yet natural and conversational
        4. Consider what would be most valuable to contribute at this moment
        5. If someone asked a question, provide a thoughtful answer or ask for clarification
        6. If discussing a topic, provide constructive input or ask insightful questions
        7. Match the tone and formality level of the conversation
        8. Make it actionable and specific to the current context

        The suggestion should be ready to use - something the person can say verbatim or easily adapt.
        Focus on the most recent part of the conversation and what would be the most helpful response right now.

        Current conversation transcript:
        ${processedTranscript}

        Generate one detailed, helpful suggestion that would be an excellent response in this conversation.
      `,
      temperature: 0.7,
    });

    console.log(`✅ [User ${user._id}] Generated suggestion successfully`);

    // Return the single suggestion
    res.json({
      success: true,
      suggestion: object.suggestion,
      timestamp: new Date().toISOString(),
      transcriptLength: transcript.length
    });

  } catch (error) {
    console.error(`❌ [User ${req.user?._id}] Error generating suggestion:`, error);
    
    // Provide more specific error messages
    if (error.message.includes('API_KEY') || error.message.includes('api_key')) {
      return res.status(500).json({
        success: false,
        error: 'OpenAI API key not configured. Please check your OPENAI_API_KEY environment variable.'
      });
    }
    
    if (error.message.includes('quota') || error.message.includes('limit') || error.message.includes('billing')) {
      return res.status(429).json({
        success: false,
        error: 'OpenAI quota exceeded or billing issue. Please check your OpenAI account.'
      });
    }
    
    if (error.message.includes('network') || error.message.includes('connection')) {
      return res.status(503).json({
        success: false,
        error: 'Network error with OpenAI service. Please check your connection.'
      });
    }
    
    // Generic error response
    res.status(500).json({
      success: false,
      error: 'Failed to generate suggestion. Please try again.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Alternative function for getting contextual suggestions with more advanced prompting
const getContextualSuggestions = async (req, res) => {
  try {
    const { transcript, context } = req.body;
    const user = req.user;
    
    if (!transcript || typeof transcript !== 'string' || transcript.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: "Transcript is required and cannot be empty"
      });
    }

    console.log(`🤖 [User ${user._id}] Generating contextual suggestions`);

    // More advanced prompting with context
    const contextPrompt = context ? `
      Additional context: ${context}
      Meeting type: ${context.meetingType || 'General discussion'}
      User role: ${context.userRole || 'Participant'}
      Difficulty level: ${context.difficulty || 'Need help responding'}
    ` : '';

    const { object } = await generateObject({
      model: openai('gpt-4o'), // Using more powerful model for contextual analysis
      schema: SuggestionsSchema,
      prompt: `
        You are an intelligent conversation assistant helping someone actively participate in a live discussion.
        Your goal is to provide contextually appropriate, helpful, and natural response suggestions.

        ${contextPrompt}

        Conversation Analysis:
        - Identify the main topics being discussed
        - Understand the current flow and direction of conversation
        - Note any questions that need answers
        - Identify opportunities for constructive input
        - Consider the tone (formal/informal, collaborative/decisive, etc.)

        Suggestion Types to Consider:
        1. **Questions for Clarity**: When something needs clarification
        2. **Supportive Responses**: When showing agreement or understanding
        3. **Constructive Input**: When adding value to the discussion
        4. **Process Suggestions**: When discussion needs direction
        5. **Summary/Confirmation**: When consensus needs validation

        Current Conversation:
        ${transcript}

        Provide 4-6 specific, actionable suggestions that:
        - Are immediately relevant to the last few exchanges
        - Help the person contribute meaningfully
        - Sound natural and conversational
        - Range from safe/supportive to more engaging/leadership-oriented
        - Are appropriate for the tone and context of the discussion

        Make each suggestion distinct and cover different ways to participate.
      `,
      temperature: 0.6,
    });

    console.log(`✅ [User ${user._id}] Generated ${object.suggestions.length} contextual suggestions`);

    res.json({
      success: true,
      suggestions: object.suggestions,
      context: context || null,
      timestamp: new Date().toISOString(),
      transcriptLength: transcript.length
    });

  } catch (error) {
    console.error(`❌ [User ${req.user?._id}] Error generating contextual suggestions:`, error);
    
    res.status(500).json({
      success: false,
      error: 'Failed to generate contextual suggestions. Please try again.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Export the functions to be added to your routes
export { getSuggestions, getContextualSuggestions };


// // // import meetingSchema from "../models/meeting.model.js";
// // // import { openaiOriginal } from "../index.js";

// // // const chatAboutLastMeeting = async (req, res) => {
// // //   const user = req.user;
// // //   const { question } = req.body;

// // //   try {
// // //     if (!question || question.trim() === "") {
// // //       return res.status(400).json({ 
// // //         error: "Question is required" 
// // //       });
// // //     }

// // //     // Get the user's last meeting
// // //     const lastMeeting = await meetingSchema
// // //       .findOne({ user: user._id })
// // //       .sort({ createdAt: -1 })
// // //       .lean();

// // //     if (!lastMeeting) {
// // //       return res.json({
// // //         success: true,
// // //         response: "I don't have any meeting summaries to refer to yet. Please record or upload a meeting first, and I'll be happy to answer questions about it!"
// // //       });
// // //     }

// // //     // Prepare meeting context for AI
// // //     const meetingContext = {
// // //       title: lastMeeting.title,
// // //       summary: lastMeeting.summary,
// // //       participants: lastMeeting.participants,
// // //       agenda: lastMeeting.agenda,
// // //       minutes: lastMeeting.minutes,
// // //       nextSteps: lastMeeting.nextSteps,
// // //       createdAt: lastMeeting.createdAt
// // //     };

// // //     // Create a comprehensive context string
// // //     const contextString = `
// // // Meeting Title: ${meetingContext.title}
// // // Date: ${new Date(meetingContext.createdAt).toLocaleDateString()}
// // // Participants: ${meetingContext.participants.join(', ')}

// // // Summary: ${meetingContext.summary}

// // // Agenda Items:
// // // ${meetingContext.agenda.map(item => `- ${item}`).join('\n')}

// // // Meeting Minutes:
// // // ${meetingContext.minutes.map(minute => `Topic: ${minute.topic}\nDetails: ${minute.details}`).join('\n\n')}

// // // Next Steps/Action Items:
// // // ${meetingContext.nextSteps.map(step => `- ${step.task} (Assigned to: ${step.assignee}${step.due ? `, Due: ${step.due}` : ''})`).join('\n')}
// // //     `.trim();

// // //     // Use OpenAI to generate response
// // //     const response = await openaiOriginal.chat.completions.create({
// // //       model: "gpt-4",
// // //       messages: [
// // //         {
// // //           role: "system",
// // //           content: `You are SessionScribe Chat, an AI assistant that helps users understand their meeting summaries. You should only answer questions about the provided meeting context. 

// // // Rules:
// // // 1. Only answer questions related to the meeting data provided
// // // 2. If a question is not related to the meeting content, politely redirect the user
// // // 3. Be concise but informative in your responses
// // // 4. Reference specific details from the meeting when possible
// // // 5. If you don't have enough information to answer a question about the meeting, say so
// // // 6. Do not make up information that's not in the meeting data

// // // Here is the meeting context you should reference:

// // // ${contextString}`
// // //         },
// // //         {
// // //           role: "user",
// // //           content: question
// // //         }
// // //       ],
// // //       temperature: 0.3,
// // //       max_tokens: 500
// // //     });

// // //     const aiResponse = response.choices[0].message.content;

// // //     res.json({
// // //       success: true,
// // //       response: aiResponse,
// // //       meetingTitle: lastMeeting.title,
// // //       meetingDate: new Date(lastMeeting.createdAt).toLocaleDateString()
// // //     });

// // //   } catch (error) {
// // //     console.error("Error in chat about last meeting:", error);
// // //     res.status(500).json({
// // //       error: "Failed to process your question. Please try again.",
// // //       details: error.message
// // //     });
// // //   }
// // // };

// // // // Don't forget to add this to your exports
// // // export {
// // //   chatAboutLastMeeting  // Add this new export
// // // };


// // import meetingSchema from "../models/meeting.model.js";
// // import { openaiOriginal } from "../index.js";

// // const chatAboutLastMeeting = async (req, res) => {
// //   const user = req.user;
// //   const { question } = req.body;

// //   try {
// //     if (!question || question.trim() === "") {
// //       return res.status(400).json({ 
// //         error: "Question is required" 
// //       });
// //     }

// //     // Get the user's last meeting
// //     const lastMeeting = await meetingSchema
// //       .findOne({ user: user._id })
// //       .sort({ createdAt: -1 })
// //       .lean();

// // console.log(lastMeeting);


// //     if (!lastMeeting) {
// //       return res.json({
// //         success: true,
// //         response: "I don't have any meeting summaries to refer to yet. Please record or upload a meeting first, and I'll be happy to answer questions about it!"
// //       });
// //     }

// //     // Prepare meeting context for AI
// //     const meetingContext = {
// //       title: lastMeeting.title,
// //       summary: lastMeeting.summary,
// //       participants: lastMeeting.participants,
// //       agenda: lastMeeting.agenda,
// //       minutes: lastMeeting.minutes,
// //       nextSteps: lastMeeting.nextSteps,
// //       createdAt: lastMeeting.createdAt
// //     };

// //     // Create a comprehensive context string
// //     const contextString = `
// // Meeting Title: ${meetingContext.title}
// // Date: ${new Date(meetingContext.createdAt).toLocaleDateString()}
// // Participants: ${meetingContext.participants.join(', ')}

// // Summary: ${meetingContext.summary}

// // Agenda Items:
// // ${meetingContext.agenda.map(item => `- ${item}`).join('\n')}

// // Meeting Minutes:
// // ${meetingContext.minutes.map(minute => `Topic: ${minute.topic}\nDetails: ${minute.details}`).join('\n\n')}

// // Next Steps/Action Items:
// // ${meetingContext.nextSteps.map(step => `- ${step.task} (Assigned to: ${step.assignee}${step.due ? `, Due: ${step.due}` : ''})`).join('\n')}
// //     `.trim();

// //     // Improved system prompt for better conversational flow
// //     const systemPrompt = `You are SessionScribe, an AI assistant that helps users understand and discuss their meeting summaries. You have access to their most recent meeting data and can answer questions about it.

// // Conversational Guidelines:
// // 1. Be friendly and conversational, not robotic
// // 2. For greetings (hello, hi, etc.), introduce yourself briefly as SessionScribe and offer to help with their meeting information
// // 3. When users ask general questions like "What was my last meeting about?" or "Tell me about my meeting", provide a natural summary without immediately mentioning the specific meeting title
// // 4. Only mention specific meeting titles when directly asked or when it's contextually relevant
// // 5. If asked about something not in the meeting data, politely explain you can only help with meeting-related questions
// // 6. Be helpful and proactive - if someone asks a vague question, offer to elaborate on specific aspects

// // Meeting Context Available:
// // ${contextString}

// // Response Style:
// // - Natural and conversational
// // - Concise but informative
// // - Reference meeting details when relevant
// // - Don't overwhelm with all details at once unless asked
// // - Ask follow-up questions when appropriate to be more helpful`;

// //     // Use OpenAI to generate response
// //     const response = await openaiOriginal.chat.completions.create({
// //       model: "gpt-4",
// //       messages: [
// //         {
// //           role: "system",
// //           content: systemPrompt
// //         },
// //         {
// //           role: "user",
// //           content: question
// //         }
// //       ],
// //       temperature: 0.4, // Slightly higher for more natural responses
// //       max_tokens: 500
// //     });

// //     const aiResponse = response.choices[0].message.content;

// //     res.json({
// //       success: true,
// //       response: aiResponse,
// //       meetingTitle: lastMeeting.title,
// //       meetingDate: new Date(lastMeeting.createdAt).toLocaleDateString()
// //     });

// //   } catch (error) {
// //     console.error("Error in chat about last meeting:", error);
// //     res.status(500).json({
// //       error: "Failed to process your question. Please try again.",
// //       details: error.message
// //     });
// //   }
// // };

// // export {
// //   chatAboutLastMeeting
// // };


// import meetingSchema from "../models/meeting.model.js";
// import { openaiOriginal } from "../index.js";

// // Helper function to format meeting details for chat responses
// const formatMeetingForChat = (meeting) => {
//   if (!meeting) return "No meeting data found.";
  
//   const title = meeting.title || 'Untitled Meeting';
//   const date = new Date(meeting.createdAt).toLocaleDateString();
//   const participants = meeting.participants || [];
//   const agenda = meeting.agenda || [];
//   const summary = meeting.summary || '';
//   const nextSteps = meeting.nextSteps || [];
  
//   let formatted = `**${title}**\n`;
//   formatted += `📅 Date: ${date}\n`;
  
//   if (participants.length > 0) {
//     formatted += `👥 Participants: ${participants.join(', ')}\n`;
//   }
  
//   if (agenda.length > 0) {
//     formatted += `📋 Agenda: ${agenda.join(', ')}\n`;
//   }
  
//   if (summary) {
//     formatted += `📝 Summary: ${summary}\n`;
//   }
  
//   if (nextSteps.length > 0) {
//     formatted += `🎯 Next Steps: ${nextSteps.length} tasks assigned\n`;
//   }
  
//   return formatted;
// };

// // Helper function to parse dates from natural language
// const parseDate = (dateStr) => {
//   const today = new Date();
  
//   if (dateStr.toLowerCase().includes('today')) {
//     return {
//       start: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
//       end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59)
//     };
//   }
  
//   if (dateStr.toLowerCase().includes('yesterday')) {
//     const yesterday = new Date(today);
//     yesterday.setDate(today.getDate() - 1);
//     return {
//       start: new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate()),
//       end: new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate(), 23, 59, 59)
//     };
//   }
  
//   if (dateStr.toLowerCase().includes('this week')) {
//     const startOfWeek = new Date(today);
//     startOfWeek.setDate(today.getDate() - today.getDay());
//     startOfWeek.setHours(0, 0, 0, 0);
    
//     const endOfWeek = new Date(startOfWeek);
//     endOfWeek.setDate(startOfWeek.getDate() + 6);
//     endOfWeek.setHours(23, 59, 59, 999);
    
//     return { start: startOfWeek, end: endOfWeek };
//   }
  
//   if (dateStr.toLowerCase().includes('last week')) {
//     const startOfLastWeek = new Date(today);
//     startOfLastWeek.setDate(today.getDate() - today.getDay() - 7);
//     startOfLastWeek.setHours(0, 0, 0, 0);
    
//     const endOfLastWeek = new Date(startOfLastWeek);
//     endOfLastWeek.setDate(startOfLastWeek.getDate() + 6);
//     endOfLastWeek.setHours(23, 59, 59, 999);
    
//     return { start: startOfLastWeek, end: endOfLastWeek };
//   }
  
//   if (dateStr.toLowerCase().includes('this month')) {
//     const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
//     const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59);
    
//     return { start: startOfMonth, end: endOfMonth };
//   }
  
//   // Try to parse specific date formats
//   const dateFormats = [
//     /(\d{4})-(\d{1,2})-(\d{1,2})/, // YYYY-MM-DD
//     /(\d{1,2})\/(\d{1,2})\/(\d{4})/, // MM/DD/YYYY
//     /(\d{1,2})-(\d{1,2})-(\d{4})/, // MM-DD-YYYY
//   ];
  
//   for (const format of dateFormats) {
//     const match = dateStr.match(format);
//     if (match) {
//       let year, month, day;
//       if (format === dateFormats[0]) { // YYYY-MM-DD
//         [, year, month, day] = match;
//       } else { // MM/DD/YYYY or MM-DD-YYYY
//         [, month, day, year] = match;
//       }
      
//       const parsedDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
//       return {
//         start: new Date(parsedDate.getFullYear(), parsedDate.getMonth(), parsedDate.getDate()),
//         end: new Date(parsedDate.getFullYear(), parsedDate.getMonth(), parsedDate.getDate(), 23, 59, 59)
//       };
//     }
//   }
  
//   return null;
// };

// // Main function to analyze query and determine search strategy
// const analyzeQuery = (question) => {
//   const lowerQuestion = question.toLowerCase();
  
//   const analysis = {
//     type: 'general', // general, search, participant, date, recent, transcript, statistics
//     keywords: [],
//     participant: null,
//     dateRange: null,
//     specificTitle: null,
//     limit: 5
//   };
  
//   // Date-related queries
//   const dateKeywords = ['today', 'yesterday', 'this week', 'last week', 'this month', 'date', 'when', 'on'];
//   if (dateKeywords.some(keyword => lowerQuestion.includes(keyword))) {
//     analysis.type = 'date';
//     analysis.dateRange = parseDate(question);
//   }
  
//   // Participant-related queries
//   const participantKeywords = ['who attended', 'participant', 'speaker', 'with', 'joined'];
//   if (participantKeywords.some(keyword => lowerQuestion.includes(keyword))) {
//     analysis.type = 'participant';
//     // Extract participant name (simplified - you might want to enhance this)
//     const speakerMatch = question.match(/speaker(\d+)/i);
//     if (speakerMatch) {
//       analysis.participant = `Speaker${speakerMatch[1]}`;
//     }
//   }
  
//   // Search queries
//   const searchKeywords = ['about', 'find', 'search', 'meeting', 'discussion', 'topic'];
//   if (searchKeywords.some(keyword => lowerQuestion.includes(keyword))) {
//     analysis.type = 'search';
//     // Extract keywords for search
//     const words = question.split(' ').filter(word => 
//       word.length > 3 && 
//       !['what', 'were', 'about', 'find', 'search', 'meeting', 'meetings', 'discussion', 'the', 'and', 'that', 'this'].includes(word.toLowerCase())
//     );
//     analysis.keywords = words;
//   }
  
//   // Recent meetings queries
//   if (lowerQuestion.includes('recent') || lowerQuestion.includes('latest') || lowerQuestion.includes('last few')) {
//     analysis.type = 'recent';
//   }
  
//   // Statistics queries
//   if (lowerQuestion.includes('how many') || lowerQuestion.includes('statistics') || lowerQuestion.includes('total')) {
//     analysis.type = 'statistics';
//   }
  
//   // Transcript queries
//   if (lowerQuestion.includes('transcript') || lowerQuestion.includes('conversation') || lowerQuestion.includes('what was said')) {
//     analysis.type = 'transcript';
//   }
  
//   return analysis;
// };

// // Search functions based on query type
// const searchMeetings = async (user, analysis) => {
//   const baseFilter = { user: user._id };
//   let meetings = [];
//   let contextInfo = {};
  
//   try {
//     switch (analysis.type) {
//       case 'date':
//         if (analysis.dateRange) {
//           const dateFilter = {
//             ...baseFilter,
//             createdAt: {
//               $gte: analysis.dateRange.start,
//               $lte: analysis.dateRange.end
//             }
//           };
//           meetings = await meetingSchema.find(dateFilter)
//             .sort({ createdAt: -1 })
//             .limit(10)
//             .lean();
          
//           contextInfo.searchType = 'date';
//           contextInfo.dateRange = analysis.dateRange;
//         }
//         break;
        
//       case 'search':
//         if (analysis.keywords.length > 0) {
//           const searchFilter = {
//             ...baseFilter,
//             $or: [
//               { title: { $regex: analysis.keywords.join('|'), $options: 'i' } },
//               { summary: { $regex: analysis.keywords.join('|'), $options: 'i' } },
//               { agenda: { $elemMatch: { $regex: analysis.keywords.join('|'), $options: 'i' } } },
//               { 'transcript.text': { $regex: analysis.keywords.join('|'), $options: 'i' } },
//               { 'minutes.topic': { $regex: analysis.keywords.join('|'), $options: 'i' } },
//               { 'minutes.details': { $regex: analysis.keywords.join('|'), $options: 'i' } }
//             ]
//           };
//           meetings = await meetingSchema.find(searchFilter)
//             .sort({ createdAt: -1 })
//             .limit(5)
//             .lean();
          
//           contextInfo.searchType = 'keyword';
//           contextInfo.keywords = analysis.keywords;
//         }
//         break;
        
//       case 'participant':
//         if (analysis.participant) {
//           const participantFilter = {
//             ...baseFilter,
//             participants: { $regex: analysis.participant, $options: 'i' }
//           };
//           meetings = await meetingSchema.find(participantFilter)
//             .sort({ createdAt: -1 })
//             .limit(5)
//             .lean();
          
//           contextInfo.searchType = 'participant';
//           contextInfo.participant = analysis.participant;
//         }
//         break;
        
//       case 'recent':
//         meetings = await meetingSchema.find(baseFilter)
//           .sort({ createdAt: -1 })
//           .limit(analysis.limit)
//           .lean();
        
//         contextInfo.searchType = 'recent';
//         break;
        
//       case 'statistics':
//         const totalMeetings = await meetingSchema.countDocuments(baseFilter);
//         const recentMeetings = await meetingSchema.countDocuments({
//           ...baseFilter,
//           createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
//         });
        
//         // Get participant statistics
//         const allMeetings = await meetingSchema.find(baseFilter, { participants: 1 }).lean();
//         const participantCount = {};
//         allMeetings.forEach(meeting => {
//           meeting.participants?.forEach(participant => {
//             participantCount[participant] = (participantCount[participant] || 0) + 1;
//           });
//         });
        
//         contextInfo.searchType = 'statistics';
//         contextInfo.stats = {
//           total: totalMeetings,
//           recent: recentMeetings,
//           topParticipants: Object.entries(participantCount)
//             .sort(([,a], [,b]) => b - a)
//             .slice(0, 3)
//         };
//         break;
        
//       case 'transcript':
//         // Get the most recent meeting for transcript
//         const latestMeeting = await meetingSchema.findOne(baseFilter)
//           .sort({ createdAt: -1 })
//           .lean();
        
//         if (latestMeeting) {
//           meetings = [latestMeeting];
//           contextInfo.searchType = 'transcript';
//         }
//         break;
        
//       default:
//         // General query - get the last meeting
//         const lastMeeting = await meetingSchema.findOne(baseFilter)
//           .sort({ createdAt: -1 })
//           .lean();
        
//         if (lastMeeting) {
//           meetings = [lastMeeting];
//           contextInfo.searchType = 'general';
//         }
//         break;
//     }
    
//     return { meetings, contextInfo };
    
//   } catch (error) {
//     console.error("Error searching meetings:", error);
//     return { meetings: [], contextInfo: { error: error.message } };
//   }
// };

// const chatAboutMeetings = async (req, res) => {
//   const user = req.user;
//   const { question } = req.body;

//   try {
//     if (!question || question.trim() === "") {
//       return res.status(400).json({ 
//         error: "Question is required" 
//       });
//     }

//     // Analyze the query to determine search strategy
//     const analysis = analyzeQuery(question);
    
//     // Search meetings based on analysis
//     const { meetings, contextInfo } = await searchMeetings(user, analysis);

//     if (meetings.length === 0) {
//       let noResultsMessage = "";
      
//       switch (contextInfo.searchType) {
//         case 'date':
//           noResultsMessage = "I don't have any meetings for the specified date. Please check if you have any recorded meetings for that time period.";
//           break;
//         case 'keyword':
//           noResultsMessage = `I couldn't find any meetings matching "${contextInfo.keywords?.join(', ')}". Try using different keywords or check the meeting titles and topics.`;
//           break;
//         case 'participant':
//           noResultsMessage = `I couldn't find any meetings with participant "${contextInfo.participant}". Please check the participant name or try a different search.`;
//           break;
//         default:
//           noResultsMessage = "I don't have any meeting summaries to refer to yet. Please record or upload a meeting first, and I'll be happy to answer questions about it!";
//       }
      
//       return res.json({
//         success: true,
//         response: noResultsMessage
//       });
//     }

//     // Prepare context for AI based on search results
//     let meetingContext = "";
    
//     if (contextInfo.searchType === 'statistics') {
//       meetingContext = `
// Statistics Summary:
// - Total meetings: ${contextInfo.stats.total}
// - Meetings in last 30 days: ${contextInfo.stats.recent}
// - Top participants: ${contextInfo.stats.topParticipants.map(([name, count]) => `${name} (${count} meetings)`).join(', ')}
//       `;
//     } else {
//       meetingContext = meetings.map((meeting, index) => {
//         return `
// Meeting ${index + 1}:
// Title: ${meeting.title}
// Date: ${new Date(meeting.createdAt).toLocaleDateString()}
// Participants: ${meeting.participants?.join(', ') || 'None listed'}

// Summary: ${meeting.summary || 'No summary available'}

// Agenda Items:
// ${meeting.agenda?.map(item => `- ${item}`).join('\n') || 'No agenda items'}

// Meeting Minutes:
// ${meeting.minutes?.map(minute => `Topic: ${minute.topic}\nDetails: ${minute.details}`).join('\n\n') || 'No minutes available'}

// Next Steps/Action Items:
// ${meeting.nextSteps?.map(step => `- ${step.task} (Assigned to: ${step.assignee}${step.due ? `, Due: ${step.due}` : ''})`).join('\n') || 'No next steps'}

// ${contextInfo.searchType === 'transcript' && meeting.transcript ? 
//   `Transcript:
// ${meeting.transcript.slice(0, 10).map(t => `${t.speaker}: ${t.text}`).join('\n')}
// ${meeting.transcript.length > 10 ? '... (showing first 10 messages)' : ''}` : ''}
//         `;
//       }).join('\n\n---\n\n');
//     }

//     // Enhanced system prompt based on search type
//     let systemPrompt = `You are SessionScribe, an AI assistant that helps users understand and discuss their meeting summaries. `;
    
//     switch (contextInfo.searchType) {
//       case 'date':
//         systemPrompt += `The user asked about meetings on a specific date. `;
//         break;
//       case 'keyword':
//         systemPrompt += `The user searched for meetings containing specific keywords: ${contextInfo.keywords?.join(', ')}. `;
//         break;
//       case 'participant':
//         systemPrompt += `The user asked about meetings involving ${contextInfo.participant}. `;
//         break;
//       case 'recent':
//         systemPrompt += `The user asked about recent meetings. `;
//         break;
//       case 'statistics':
//         systemPrompt += `The user asked for meeting statistics. `;
//         break;
//       case 'transcript':
//         systemPrompt += `The user asked about meeting transcripts or conversations. `;
//         break;
//       default:
//         systemPrompt += `The user asked a general question about their meetings. `;
//     }

//     systemPrompt += `
// You have access to ${meetings.length} meeting(s) that match their query.

// Conversational Guidelines:
// 1. Be friendly and conversational, not robotic
// 2. For greetings (hello, hi, etc.), introduce yourself briefly as SessionScribe and offer to help with their meeting information
// 3. When multiple meetings are found, provide a clear summary of each
// 4. If only one meeting is found, provide detailed information about it
// 5. For statistics queries, present the numbers in a clear, organized way
// 6. For transcript queries, highlight key conversations or quotes
// 7. If asked about something not in the meeting data, politely explain you can only help with meeting-related questions
// 8. Be helpful and proactive - if someone asks a vague question, offer to elaborate on specific aspects

// Meeting Context Available:
// ${meetingContext}

// Response Style:
// - Natural and conversational
// - Concise but informative
// - Reference meeting details when relevant
// - Don't overwhelm with all details at once unless asked
// - Ask follow-up questions when appropriate to be more helpful
// - When showing multiple meetings, organize them clearly`;

//     // Use OpenAI to generate response
//     const response = await openaiOriginal.chat.completions.create({
//       model: "gpt-4",
//       messages: [
//         {
//           role: "system",
//           content: systemPrompt
//         },
//         {
//           role: "user",
//           content: question
//         }
//       ],
//       temperature: 0.4,
//       max_tokens: 800
//     });

//     const aiResponse = response.choices[0].message.content;

//     // Determine which meeting info to return
//     const latestMeeting = meetings[0];
    
//     res.json({
//       success: true,
//       response: aiResponse,
//       meetingTitle: latestMeeting?.title,
//       meetingDate: latestMeeting ? new Date(latestMeeting.createdAt).toLocaleDateString() : null,
//       searchInfo: {
//         type: contextInfo.searchType,
//         resultCount: meetings.length,
//         ...(contextInfo.keywords && { keywords: contextInfo.keywords }),
//         ...(contextInfo.participant && { participant: contextInfo.participant }),
//         ...(contextInfo.dateRange && { 
//           dateSearched: `${contextInfo.dateRange.start.toLocaleDateString()} - ${contextInfo.dateRange.end.toLocaleDateString()}`
//         })
//       }
//     });

//   } catch (error) {
//     console.error("Error in chat about meetings:", error);
//     res.status(500).json({
//       error: "Failed to process your question. Please try again.",
//       details: error.message
//     });
//   }
// };

// export {
//   chatAboutMeetings
// };



import meetingSchema from "../models/meeting.model.js";
import { openaiOriginal } from "../index.js";

// Helper function to format meeting details for chat responses
const formatMeetingForChat = (meeting) => {
  if (!meeting) return "No meeting data found.";
  
  const title = meeting.title || 'Untitled Meeting';
  const date = new Date(meeting.createdAt).toLocaleDateString();
  const participants = meeting.participants || [];
  const agenda = meeting.agenda || [];
  const summary = meeting.summary || '';
  const nextSteps = meeting.nextSteps || [];
  
  let formatted = `**${title}**\n`;
  formatted += `📅 Date: ${date}\n`;
  
  if (participants.length > 0) {
    formatted += `👥 Participants: ${participants.join(', ')}\n`;
  }
  
  if (agenda.length > 0) {
    formatted += `📋 Agenda: ${agenda.join(', ')}\n`;
  }
  
  if (summary) {
    formatted += `📝 Summary: ${summary}\n`;
  }
  
  if (nextSteps.length > 0) {
    formatted += `🎯 Next Steps: ${nextSteps.length} tasks assigned\n`;
  }
  
  return formatted;
};

// Helper function to parse dates from natural language (FIXED VERSION)
const parseDate = (dateStr) => {
  // Always work in UTC to match MongoDB dates
  const now = new Date();
  
  if (dateStr.toLowerCase().includes('today')) {
    // Get current date in UTC
    const today = new Date();
    const year = today.getUTCFullYear();
    const month = today.getUTCMonth();
    const date = today.getUTCDate();
    
    // Create UTC boundaries for today
    const startOfToday = new Date(Date.UTC(year, month, date, 0, 0, 0, 0));
    const endOfToday = new Date(Date.UTC(year, month, date, 23, 59, 59, 999));
    
    return {
      start: startOfToday,
      end: endOfToday
    };
  }
  
  if (dateStr.toLowerCase().includes('yesterday')) {
    const yesterday = new Date();
    yesterday.setUTCDate(yesterday.getUTCDate() - 1);
    
    const year = yesterday.getUTCFullYear();
    const month = yesterday.getUTCMonth();
    const date = yesterday.getUTCDate();
    
    const startOfYesterday = new Date(Date.UTC(year, month, date, 0, 0, 0, 0));
    const endOfYesterday = new Date(Date.UTC(year, month, date, 23, 59, 59, 999));
    
    return {
      start: startOfYesterday,
      end: endOfYesterday
    };
  }
  
  if (dateStr.toLowerCase().includes('this week')) {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);
    
    return { start: startOfWeek, end: endOfWeek };
  }
  
  if (dateStr.toLowerCase().includes('last week')) {
    const today = new Date();
    const startOfLastWeek = new Date(today);
    startOfLastWeek.setDate(today.getDate() - today.getDay() - 7);
    startOfLastWeek.setHours(0, 0, 0, 0);
    
    const endOfLastWeek = new Date(startOfLastWeek);
    endOfLastWeek.setDate(startOfLastWeek.getDate() + 6);
    endOfLastWeek.setHours(23, 59, 59, 999);
    
    return { start: startOfLastWeek, end: endOfLastWeek };
  }
  
  if (dateStr.toLowerCase().includes('this month')) {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59);
    
    return { start: startOfMonth, end: endOfMonth };
  }
  
  // Try to parse specific date formats
  const dateFormats = [
    /(\d{4})-(\d{1,2})-(\d{1,2})/, // YYYY-MM-DD
    /(\d{1,2})\/(\d{1,2})\/(\d{4})/, // MM/DD/YYYY
    /(\d{1,2})-(\d{1,2})-(\d{4})/, // MM-DD-YYYY
  ];
  
  for (const format of dateFormats) {
    const match = dateStr.match(format);
    if (match) {
      let year, month, day;
      if (format === dateFormats[0]) { // YYYY-MM-DD
        [, year, month, day] = match;
      } else { // MM/DD/YYYY or MM-DD-YYYY
        [, month, day, year] = match;
      }
      
      const parsedDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      const startOfDay = new Date(parsedDate.getFullYear(), parsedDate.getMonth(), parsedDate.getDate());
      startOfDay.setHours(0, 0, 0, 0);
      
      const endOfDay = new Date(parsedDate.getFullYear(), parsedDate.getMonth(), parsedDate.getDate());
      endOfDay.setHours(23, 59, 59, 999);
      
      return {
        start: startOfDay,
        end: endOfDay
      };
    }
  }
  
  return null;
};

// Main function to analyze query and determine search strategy
const analyzeQuery = (question) => {
  const lowerQuestion = question.toLowerCase();
  
  const analysis = {
    type: 'general', // general, search, participant, date, recent, transcript, statistics
    keywords: [],
    participant: null,
    dateRange: null,
    specificTitle: null,
    limit: 5
  };
  
  // Date-related queries
  const dateKeywords = ['today', 'yesterday', 'this week', 'last week', 'this month', 'date', 'when', 'on'];
  if (dateKeywords.some(keyword => lowerQuestion.includes(keyword))) {
    analysis.type = 'date';
    analysis.dateRange = parseDate(question);
  }
  
  // Participant-related queries
  const participantKeywords = ['who attended', 'participant', 'speaker', 'with', 'joined'];
  if (participantKeywords.some(keyword => lowerQuestion.includes(keyword))) {
    analysis.type = 'participant';
    // Extract participant name (simplified - you might want to enhance this)
    const speakerMatch = question.match(/speaker(\d+)/i);
    if (speakerMatch) {
      analysis.participant = `Speaker${speakerMatch[1]}`;
    }
  }
  
  // Search queries
  const searchKeywords = ['about', 'find', 'search', 'meeting', 'discussion', 'topic'];
  if (searchKeywords.some(keyword => lowerQuestion.includes(keyword))) {
    analysis.type = 'search';
    // Extract keywords for search
    const words = question.split(' ').filter(word => 
      word.length > 3 && 
      !['what', 'were', 'about', 'find', 'search', 'meeting', 'meetings', 'discussion', 'the', 'and', 'that', 'this'].includes(word.toLowerCase())
    );
    analysis.keywords = words;
  }
  
  // Recent meetings queries
  if (lowerQuestion.includes('recent') || lowerQuestion.includes('latest') || lowerQuestion.includes('last few')) {
    analysis.type = 'recent';
  }
  
  // Statistics queries
  if (lowerQuestion.includes('how many') || lowerQuestion.includes('statistics') || lowerQuestion.includes('total')) {
    analysis.type = 'statistics';
  }
  
  // Transcript queries
  if (lowerQuestion.includes('transcript') || lowerQuestion.includes('conversation') || lowerQuestion.includes('what was said')) {
    analysis.type = 'transcript';
  }
  
  return analysis;
};

// Search functions based on query type
const searchMeetings = async (user, analysis) => {
  const baseFilter = { user: user._id };
  let meetings = [];
  let contextInfo = {};
  
  try {
    switch (analysis.type) {
      case 'date':
        if (analysis.dateRange) {
          const dateFilter = {
            ...baseFilter,
            createdAt: {
              $gte: analysis.dateRange.start,
              $lte: analysis.dateRange.end
            }
          };
          meetings = await meetingSchema.find(dateFilter)
            .sort({ createdAt: -1 })
            .limit(10)
            .lean();
          
          contextInfo.searchType = 'date';
          contextInfo.dateRange = analysis.dateRange;
        }
        break;
        
      case 'search':
        if (analysis.keywords.length > 0) {
          const searchFilter = {
            ...baseFilter,
            $or: [
              { title: { $regex: analysis.keywords.join('|'), $options: 'i' } },
              { summary: { $regex: analysis.keywords.join('|'), $options: 'i' } },
              { agenda: { $elemMatch: { $regex: analysis.keywords.join('|'), $options: 'i' } } },
              { 'transcript.text': { $regex: analysis.keywords.join('|'), $options: 'i' } },
              { 'minutes.topic': { $regex: analysis.keywords.join('|'), $options: 'i' } },
              { 'minutes.details': { $regex: analysis.keywords.join('|'), $options: 'i' } }
            ]
          };
          meetings = await meetingSchema.find(searchFilter)
            .sort({ createdAt: -1 })
            .limit(5)
            .lean();
          
          contextInfo.searchType = 'keyword';
          contextInfo.keywords = analysis.keywords;
        }
        break;
        
      case 'participant':
        if (analysis.participant) {
          const participantFilter = {
            ...baseFilter,
            participants: { $regex: analysis.participant, $options: 'i' }
          };
          meetings = await meetingSchema.find(participantFilter)
            .sort({ createdAt: -1 })
            .limit(5)
            .lean();
          
          contextInfo.searchType = 'participant';
          contextInfo.participant = analysis.participant;
        }
        break;
        
      case 'recent':
        meetings = await meetingSchema.find(baseFilter)
          .sort({ createdAt: -1 })
          .limit(analysis.limit)
          .lean();
        
        contextInfo.searchType = 'recent';
        break;
        
      case 'statistics':
        const totalMeetings = await meetingSchema.countDocuments(baseFilter);
        const recentMeetings = await meetingSchema.countDocuments({
          ...baseFilter,
          createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
        });
        
        // Get participant statistics
        const allMeetings = await meetingSchema.find(baseFilter, { participants: 1 }).lean();
        const participantCount = {};
        allMeetings.forEach(meeting => {
          meeting.participants?.forEach(participant => {
            participantCount[participant] = (participantCount[participant] || 0) + 1;
          });
        });
        
        contextInfo.searchType = 'statistics';
        contextInfo.stats = {
          total: totalMeetings,
          recent: recentMeetings,
          topParticipants: Object.entries(participantCount)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 3)
        };
        break;
        
      case 'transcript':
        // Get the most recent meeting for transcript
        const latestMeeting = await meetingSchema.findOne(baseFilter)
          .sort({ createdAt: -1 })
          .lean();
        
        if (latestMeeting) {
          meetings = [latestMeeting];
          contextInfo.searchType = 'transcript';
        }
        break;
        
      default:
        // General query - get the last meeting
        const lastMeeting = await meetingSchema.findOne(baseFilter)
          .sort({ createdAt: -1 })
          .lean();
        
        if (lastMeeting) {
          meetings = [lastMeeting];
          contextInfo.searchType = 'general';
        }
        break;
    }
    
    return { meetings, contextInfo };
    
  } catch (error) {
    console.error("Error searching meetings:", error);
    return { meetings: [], contextInfo: { error: error.message } };
  }
};

const chatAboutMeetings = async (req, res) => {
  const user = req.user;
  const { question } = req.body;

  try {
    if (!question || question.trim() === "") {
      return res.status(400).json({ 
        error: "Question is required" 
      });
    }

    // Analyze the query to determine search strategy
    const analysis = analyzeQuery(question);
    
    // Search meetings based on analysis
    const { meetings, contextInfo } = await searchMeetings(user, analysis);

    if (meetings.length === 0) {
      let noResultsMessage = "";
      
      switch (contextInfo.searchType) {
        case 'date':
          noResultsMessage = "I don't have any meetings for the specified date. Please check if you have any recorded meetings for that time period.";
          break;
        case 'keyword':
          noResultsMessage = `I couldn't find any meetings matching "${contextInfo.keywords?.join(', ')}". Try using different keywords or check the meeting titles and topics.`;
          break;
        case 'participant':
          noResultsMessage = `I couldn't find any meetings with participant "${contextInfo.participant}". Please check the participant name or try a different search.`;
          break;
        default:
          noResultsMessage = "I don't have any meeting summaries to refer to yet. Please record or upload a meeting first, and I'll be happy to answer questions about it!";
      }
      
      return res.json({
        success: true,
        response: noResultsMessage
      });
    }

    // Prepare context for AI based on search results
    let meetingContext = "";
    
    if (contextInfo.searchType === 'statistics') {
      meetingContext = `
Statistics Summary:
- Total meetings: ${contextInfo.stats.total}
- Meetings in last 30 days: ${contextInfo.stats.recent}
- Top participants: ${contextInfo.stats.topParticipants.map(([name, count]) => `${name} (${count} meetings)`).join(', ')}
      `;
    } else {
      meetingContext = meetings.map((meeting, index) => {
        return `
Meeting ${index + 1}:
Title: ${meeting.title}
Date: ${new Date(meeting.createdAt).toLocaleDateString()}
Participants: ${meeting.participants?.join(', ') || 'None listed'}

Summary: ${meeting.summary || 'No summary available'}

Agenda Items:
${meeting.agenda?.map(item => `- ${item}`).join('\n') || 'No agenda items'}

Meeting Minutes:
${meeting.minutes?.map(minute => `Topic: ${minute.topic}\nDetails: ${minute.details}`).join('\n\n') || 'No minutes available'}

Next Steps/Action Items:
${meeting.nextSteps?.map(step => `- ${step.task} (Assigned to: ${step.assignee}${step.due ? `, Due: ${step.due}` : ''})`).join('\n') || 'No next steps'}

${contextInfo.searchType === 'transcript' && meeting.transcript ? 
  `Transcript:
${meeting.transcript.slice(0, 10).map(t => `${t.speaker}: ${t.text}`).join('\n')}
${meeting.transcript.length > 10 ? '... (showing first 10 messages)' : ''}` : ''}
        `;
      }).join('\n\n---\n\n');
    }

    // Enhanced system prompt based on search type
    let systemPrompt = `You are SessionScribe, an AI assistant that helps users understand and discuss their meeting summaries. `;
    
    switch (contextInfo.searchType) {
      case 'date':
        systemPrompt += `The user asked about meetings on a specific date. `;
        break;
      case 'keyword':
        systemPrompt += `The user searched for meetings containing specific keywords: ${contextInfo.keywords?.join(', ')}. `;
        break;
      case 'participant':
        systemPrompt += `The user asked about meetings involving ${contextInfo.participant}. `;
        break;
      case 'recent':
        systemPrompt += `The user asked about recent meetings. `;
        break;
      case 'statistics':
        systemPrompt += `The user asked for meeting statistics. `;
        break;
      case 'transcript':
        systemPrompt += `The user asked about meeting transcripts or conversations. `;
        break;
      default:
        systemPrompt += `The user asked a general question about their meetings. `;
    }

    systemPrompt += `
You have access to ${meetings.length} meeting(s) that match their query.

Conversational Guidelines:
1. Be friendly and conversational, not robotic
2. For greetings (hello, hi, etc.), introduce yourself briefly as SessionScribe and offer to help with their meeting information
3. When multiple meetings are found, provide a clear summary of each
4. If only one meeting is found, provide detailed information about it
5. For statistics queries, present the numbers in a clear, organized way
6. For transcript queries, highlight key conversations or quotes
7. If asked about something not in the meeting data, politely explain you can only help with meeting-related questions
8. Be helpful and proactive - if someone asks a vague question, offer to elaborate on specific aspects

Meeting Context Available:
${meetingContext}

Response Style:
- Natural and conversational
- Concise but informative
- Reference meeting details when relevant
- Don't overwhelm with all details at once unless asked
- Ask follow-up questions when appropriate to be more helpful
- When showing multiple meetings, organize them clearly`;

    // Use OpenAI to generate response
    const response = await openaiOriginal.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: question
        }
      ],
      temperature: 0.4,
      max_tokens: 800
    });

    const aiResponse = response.choices[0].message.content;

    // Determine which meeting info to return
    const latestMeeting = meetings[0];
    
    res.json({
      success: true,
      response: aiResponse,
      meetingTitle: latestMeeting?.title,
      meetingDate: latestMeeting ? new Date(latestMeeting.createdAt).toLocaleDateString() : null,
      searchInfo: {
        type: contextInfo.searchType,
        resultCount: meetings.length,
        ...(contextInfo.keywords && { keywords: contextInfo.keywords }),
        ...(contextInfo.participant && { participant: contextInfo.participant }),
        ...(contextInfo.dateRange && { 
          dateSearched: `${contextInfo.dateRange.start.toLocaleDateString()} - ${contextInfo.dateRange.end.toLocaleDateString()}`
        })
      }
    });

  } catch (error) {
    console.error("Error in chat about meetings:", error);
    res.status(500).json({
      error: "Failed to process your question. Please try again.",
      details: error.message
    });
  }
};

export {
  chatAboutMeetings
};
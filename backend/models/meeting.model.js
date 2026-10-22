// // // import mongoose from "mongoose";

// // // const TranscriptSchema = new mongoose.Schema({
// // //   speaker: { type: String, required: true },
// // //   text: { type: String, required: true },
// // // });

// // // const MinutesSchema = new mongoose.Schema({
// // //   topic: { type: String, required: true },
// // //   details: { type: String, required: true },
// // // });

// // // const NextStepSchema = new mongoose.Schema({
// // //   task: { type: String, required: true },
// // //   assignee: { type: String, required: true },
// // //   due: { type: String, default: null }, // ISO date string or null
// // // });

// // // const MeetingSchema = new mongoose.Schema(
// // //   {
// // //     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
// // //     title: { type: String, required: true },
// // //     participants: [{ type: String }],
// // //     agenda: [{ type: String }],
// // //     summary: { type: String },
// // //     transcript: [TranscriptSchema],
// // //     minutes: [MinutesSchema], // updated shape here
// // //     nextSteps: [NextStepSchema],
// // //     recordingLength: { type: Number, required: true },
// // //     recordingAudioUrl: { type: String, required: true },
// // //     recordingVideoUrl: { type: String, required: true},
// // //     emailRecipients: [
// // //       {
// // //         type: String, // email addresses
// // //         required: false,
// // //       },
// // //     ],
// // //   },
// // //   { timestamps: true }
// // // );

// // // const meetingSchema = mongoose.model("Meeting", MeetingSchema);
// // // export default meetingSchema;

// // import mongoose from "mongoose";

// // const TranscriptSchema = new mongoose.Schema({
// //   speaker: { type: String, required: true },
// //   text: { type: String, required: true },
// // });

// // const MinutesSchema = new mongoose.Schema({
// //   topic: { type: String, required: true },
// //   details: { type: String, required: true },
// // });

// // const NextStepSchema = new mongoose.Schema({
// //   task: { type: String, required: true },
// //   assignee: { type: String, required: true },
// //   due: { type: String, default: null },
// //   parsedDueDate: { type: Date, default: null }, // Parsed date for querying
// //   reminderSent: { type: Boolean, default: false }, // Track if reminder was sent
// //   reminderSentAt: { type: Date, default: null } // ISO date string or null
// // });

// // const MeetingSchema = new mongoose.Schema(
// //   {
// //     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
// //     title: { type: String, required: true },
// //     participants: [{ type: String }],
// //     agenda: [{ type: String }],
// //     summary: { type: String },
// //     transcript: [TranscriptSchema],
// //     minutes: [MinutesSchema],
// //     nextSteps: [NextStepSchema],
// //     recordingLength: { type: Number, required: true },
// //     recordingAudioUrl: { type: String, required: true },
// //     recordingVideoUrl: { type: String, required: false }, // Made optional for live transcriptions
// //     emailRecipients: [
// //       {
// //         type: String, // email addresses
// //         required: false,
// //       },
// //     ],
// //     // NEW: Type field to distinguish between meeting types
// //     type: {
// //       type: String,
// //       enum: ['recording','live-transcription','audio-notes'],
// //       default: 'recording',
// //       required: true
// //     }
// //   },
// //   { timestamps: true }
// // );

// // const meetingSchema = mongoose.model("Meeting", MeetingSchema);
// // export default meetingSchema;



// import mongoose from "mongoose";

// const TranscriptSchema = new mongoose.Schema({
//   speaker: { type: String, required: true },
//   text: { type: String, required: true },
// });

// const MinutesSchema = new mongoose.Schema({
//   topic: { type: String, required: true },
//   details: { type: String, required: true },
// });

// const NextStepSchema = new mongoose.Schema({
//   task: { type: String, required: true },
//   assignee: { type: String, required: true },
//   assignedBy: { type: String, default: null },
//   due: { type: String, default: null },
//   priority: { 
//     type: String, 
//     enum: ['high', 'medium', 'low'], 
//     default: 'medium' 
//   },
//   category: { 
//     type: String, 
//     enum: ['task', 'activity', 'project', 'follow-up'], 
//     default: 'task' 
//   },
//   parsedDueDate: { type: Date, default: null }, // Parsed date for querying
//   reminderSent: { type: Boolean, default: false }, // Track if reminder was sent
//   reminderSentAt: { type: Date, default: null } // ISO date string or null
// });

// // NEW: Project Schema
// const ProjectSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   assignee: { type: String, required: true },
//   assignedBy: { type: String, default: null },
//   deadline: { type: String, default: null },
//   scope: [{ type: String }] // Array of scope items/deliverables
// });

// // NEW: Key Initiative Schema
// const KeyInitiativeSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   objective: { type: String, required: true },
//   ownership: { type: String, required: true } // Person or team leading it
// });

// // NEW: Implementation Plan Schema
// const ImplementationPlanSchema = new mongoose.Schema({
//   objectives: [{ type: String }],
//   timeline: [{ type: String }],
//   hasTimeline: { type: Boolean, default: false }
// });

// // NEW: Challenge/Risk Schema
// const ChallengeRiskSchema = new mongoose.Schema({
//   type: { type: String, enum: ['challenge', 'risk'], required: true },
//   description: { type: String, required: true },
//   impact: { type: String, enum: ['high', 'medium', 'low'], required: true },
//   mitigation: { type: String, default: null }
// });

// // NEW: Decision Schema
// const DecisionSchema = new mongoose.Schema({
//   decision: { type: String, required: true },
//   context: { type: String, default: null },
//   impact: { type: String, default: null },
//   decidedBy: { type: String, default: null }
// });

// const MeetingSchema = new mongoose.Schema(
//   {
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     title: { type: String, required: true },
//     participants: [{ type: String }],
//     agenda: [{ type: String }],
//     summary: { type: String },
//     transcript: [TranscriptSchema],
//     minutes: [MinutesSchema],
//     nextSteps: [NextStepSchema],
    
//     // NEW: Enhanced meeting data fields
//     projects: [ProjectSchema],
//     keyInitiatives: [KeyInitiativeSchema],
//     implementationPlan: ImplementationPlanSchema,
//     challengesAndRisks: [ChallengeRiskSchema],
//     decisionsMade: [DecisionSchema],
    
//     // NEW: Meeting classification
//     meetingType: {
//       type: String,
//       enum: ['planning', 'status-update', 'brainstorming', 'decision-making', 'project-review', 'general'],
//       default: 'general'
//     },
    
//     // NEW: Boolean flags for quick filtering
//     hasActionItems: { type: Boolean, default: false },
//     hasProjects: { type: Boolean, default: false },
//     hasDecisions: { type: Boolean, default: false },
//     hasImplementationPlan: { type: Boolean, default: false },
//     hasChallengesRisks: { type: Boolean, default: false },
//     hasKeyInitiatives: { type: Boolean, default: false },
    
//     // Existing fields
//     recordingLength: { type: Number, required: true },
//     recordingAudioUrl: { type: String, required: true },
//     recordingVideoUrl: { type: String, required: false },
//     emailRecipients: [
//       {
//         type: String,
//         required: false,
//       },
//     ],
//     type: {
//       type: String,
//       enum: ['recording','live-transcription','audio-notes'],
//       default: 'recording',
//       required: true
//     },
    
//     // NEW: Processing metadata
//     processingMethod: {
//       type: String,
//       enum: ['deepgram-live', 'whisper-chunks', 'whisper-single'],
//       default: 'whisper-chunks'
//     },
//     processingErrors: [{
//       type: { type: String },
//       message: { type: String },
//       details: { type: mongoose.Schema.Types.Mixed }
//     }]
//   },
//   { timestamps: true }
// );

// // Add indexes for better query performance
// MeetingSchema.index({ user: 1, createdAt: -1 });
// MeetingSchema.index({ user: 1, meetingType: 1 });
// MeetingSchema.index({ user: 1, hasActionItems: 1 });
// MeetingSchema.index({ user: 1, hasProjects: 1 });
// MeetingSchema.index({ user: 1, hasDecisions: 1 });
// MeetingSchema.index({ 'nextSteps.parsedDueDate': 1, user: 1 });

// const meetingSchema = mongoose.model("Meeting", MeetingSchema);
// export default meetingSchema;


import mongoose from "mongoose";

const TranscriptSchema = new mongoose.Schema({
  speaker: { type: String, required: true },
  text: { type: String, required: true },
});

const MinutesSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  details: { type: String, required: true },
});

const NextStepSchema = new mongoose.Schema({
  task: { type: String, required: true },
  assignee: { type: String, required: true },
  assignedBy: { type: String, default: null },
  due: { type: String, default: null },
  priority: { 
    type: String, 
    enum: ['high', 'medium', 'low'], 
    default: 'medium' 
  },
  category: { 
    type: String, 
    enum: ['task', 'activity', 'project', 'follow-up'], 
    default: 'task' 
  },
  parsedDueDate: { type: Date, default: null },
  reminderSent: { type: Boolean, default: false },
  reminderSentAt: { type: Date, default: null }
});

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  assignee: { type: String, required: true },
  assignedBy: { type: String, default: null },
  deadline: { type: String, default: null },
  scope: [{ type: String }]
});

const KeyInitiativeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  objective: { type: String, required: true },
  ownership: { type: String, required: true }
});

const ImplementationPlanSchema = new mongoose.Schema({
  objectives: [{ type: String }],
  timeline: [{ type: String }],
  hasTimeline: { type: Boolean, default: false }
});

const ChallengeRiskSchema = new mongoose.Schema({
  type: { type: String, enum: ['challenge', 'risk'], required: true },
  description: { type: String, required: true },
  impact: { type: String, enum: ['high', 'medium', 'low'], required: true },
  mitigation: { type: String, default: null }
});

const DecisionSchema = new mongoose.Schema({
  decision: { type: String, required: true },
  context: { type: String, default: null },
  impact: { type: String, default: null },
  decidedBy: { type: String, default: null }
});

// NEW: Schema for discussion topic analysis
const DiscussionTopicAnalysisSchema = new mongoose.Schema({
  scheduledTopic: { type: String, required: true },
  wasDiscussed: { type: Boolean, required: true },
  discussionLevel: { 
    type: String, 
    enum: ['comprehensive', 'partial', 'minimal', 'not-discussed'], 
    required: true 
  },
  transcriptEvidence: [{ type: String }], // Quotes from transcript that match
  summary: { type: String }, // Brief summary of how this topic was discussed
  timeSpentPercentage: { type: Number, min: 0, max: 100 } // Estimated % of meeting time
});

const MeetingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    participants: [{ type: String }],
    agenda: [{ type: String }],
    summary: { type: String },
    transcript: [TranscriptSchema],
    minutes: [MinutesSchema],
    nextSteps: [NextStepSchema],
    
    // Enhanced meeting data fields
    projects: [ProjectSchema],
    keyInitiatives: [KeyInitiativeSchema],
    implementationPlan: ImplementationPlanSchema,
    challengesAndRisks: [ChallengeRiskSchema],
    decisionsMade: [DecisionSchema],
    
    // Meeting classification
    meetingType: {
      type: String,
      enum: ['planning', 'status-update', 'brainstorming', 'decision-making', 'project-review', 'general'],
      default: 'general'
    },
    
    // Boolean flags for quick filtering
    hasActionItems: { type: Boolean, default: false },
    hasProjects: { type: Boolean, default: false },
    hasDecisions: { type: Boolean, default: false },
    hasImplementationPlan: { type: Boolean, default: false },
    hasChallengesRisks: { type: Boolean, default: false },
    hasKeyInitiatives: { type: Boolean, default: false },
    
    // Existing fields
    recordingLength: { type: Number, default: 0 },
    recordingAudioUrl: { type: String, required: false },
    recordingVideoUrl: { type: String, required: false },
    emailRecipients: [
      {
        type: String,
        required: false,
      },
    ],
    type: {
      type: String,
      enum: ['recording','live-transcription','audio-notes','scheduled'],
      default: 'recording',
      required: true
    },
    
    // NEW: Scheduled meeting fields
    scheduledDateTime: { type: Date, required: false },
    discussionTopics: [{ type: String }], // What to be discussed (agenda items)
    meetingStatus: {
      type: String,
      enum: ['scheduled', 'in-progress', 'completed', 'cancelled', 'missed'],
      default: 'scheduled'
    },
    isAttended: { type: Boolean, default: false },
    scheduledDuration: { type: Number, default: 60 }, // in minutes
    meetingLink: { type: String, required: false }, // for online meetings
    location: { type: String, required: false }, // for physical meetings
    reminderSent: { type: Boolean, default: false },
    reminderSentAt: { type: Date, default: null },

    // NEW: Discussion Topics Analysis
    discussionTopicsAnalysis: [DiscussionTopicAnalysisSchema],
    hasDiscussionAnalysis: { type: Boolean, default: false },
    discussionMatchScore: { type: Number, min: 0, max: 100 }, // Overall match percentage
    discussionSummary: { type: String }, // Overall summary of topic adherence
    
    // Processing metadata
    processingMethod: {
      type: String,
      enum: ['deepgram-live', 'whisper-chunks', 'whisper-single', 'extension-captions'],
      default: 'whisper-chunks'
    },
    processingErrors: [{
      type: { type: String },
      message: { type: String },
      details: { type: mongoose.Schema.Types.Mixed }
    }]
  },
  { timestamps: true }
);

// Add indexes for better query performance
MeetingSchema.index({ user: 1, createdAt: -1 });
MeetingSchema.index({ user: 1, meetingType: 1 });
MeetingSchema.index({ user: 1, hasActionItems: 1 });
MeetingSchema.index({ user: 1, hasProjects: 1 });
MeetingSchema.index({ user: 1, hasDecisions: 1 });
MeetingSchema.index({ 'nextSteps.parsedDueDate': 1, user: 1 });
MeetingSchema.index({ user: 1, scheduledDateTime: 1 });
MeetingSchema.index({ user: 1, meetingStatus: 1 });
MeetingSchema.index({ user: 1, type: 1, scheduledDateTime: 1 });
MeetingSchema.index({ user: 1, hasDiscussionAnalysis: 1 });

const meetingSchema = mongoose.model("Meeting", MeetingSchema);
export default meetingSchema;

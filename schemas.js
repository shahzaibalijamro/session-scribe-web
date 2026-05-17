import { z } from 'zod';

// Define schemas for validation (same as before)
const TranscriptItemSchema = z.object({
  speaker: z.string().min(1, "Speaker name is required"),
  text: z.string().min(1, "Text content is required")
});

const TranscriptSchema = z.object({
  transcript: z.array(TranscriptItemSchema)
});

const MeetingDataSchema = z.object({
  title: z.string().min(1, "Title is required"),
  participants: z.array(z.string()).default([]),
  summary: z.string().default("No summary available."),
  agenda: z.array(z.string()).default([])
});

// New Key Initiative Schema
const KeyInitiativeSchema = z.object({
  title: z.string(),
  description: z.string(),
  objective: z.string(),
  ownership: z.string().default("Not specified")
});

const MinutesSchema = z.object({
  topic: z.string(),
  details: z.string()
});

// Enhanced Next Step Schema with more detailed structure
const NextStepSchema = z.object({
  task: z.string(),
  assignee: z.string(),
  assignedBy: z.string().nullable().default(null),
  due: z.string().nullable().default(null),
  priority: z.enum(['high', 'medium', 'low']).default('medium'),
  category: z.enum(['task', 'activity', 'project', 'follow-up']).default('task')
});

// New Project Schema for larger initiatives
const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  assignee: z.string(),
  assignedBy: z.string().nullable().default(null),
  deadline: z.string().nullable().default(null),
  scope: z.array(z.string()).default([])
});

// New Challenges and Risks Schema
const ChallengeRiskSchema = z.object({
  type: z.enum(['challenge', 'risk']),
  description: z.string(),
  impact: z.enum(['high', 'medium', 'low']).default('medium'),
  mitigation: z.string().nullable().default(null)
});

const ImplementationPlanSchema = z.object({
  implementationPlan: z.object({
    objectives: z.array(z.string()).default([]),
    timeline: z.object({
      startDate: z.string().nullable().default(null),
      endDate: z.string().nullable().default(null),
      keyMilestones: z.array(z.string()).default([])
    }).default({}),
    hasTimeline: z.boolean().default(false)
  }).optional()
});

// New Decision Schema
const DecisionSchema = z.object({
  decision: z.string(),
  context: z.string().nullable().default(null),
  impact: z.string().nullable().default(null),
  decidedBy: z.string().nullable().default(null)
});

// Comprehensive Meeting Analysis Schema
const ComprehensiveMeetingSchema = z.object({
  // Basic meeting info
  basicInfo: MeetingDataSchema,
  
  // Meeting notes and discussion
  minutes: z.array(MinutesSchema).default([]),
  
  // Implementation planning
  implementationPlan: ImplementationPlanSchema.optional(),
  
  // Key initiatives identified
  keyInitiatives: z.array(KeyInitiativeSchema).default([]),
  
  // Action items and tasks
  nextSteps: z.array(NextStepSchema).default([]),
  
  // Larger projects identified
  projects: z.array(ProjectSchema).default([]),
  
  // Risks and challenges
  challengesAndRisks: z.array(ChallengeRiskSchema).default([]),
  
  // Decisions made
  decisionsMade: z.array(DecisionSchema).default([]),
  
  // Meeting metadata
  meetingType: z.enum(['planning', 'status-update', 'brainstorming', 'decision-making', 'project-review', 'general']).default('general'),
  hasActionItems: z.boolean().default(false),
  hasProjects: z.boolean().default(false),
  hasDecisions: z.boolean().default(false),
  hasImplementationPlan: z.boolean().default(false)
});

const MinutesAndStepsSchema = z.object({
  minutes: z.array(MinutesSchema).default([]),
  nextSteps: z.array(NextStepSchema).default([])
});

// Schema for translated meeting data
const TranslatedMeetingSchema = z.object({
  title: z.string(),
  summary: z.string(),
  participants: z.array(z.string()),
  agenda: z.array(z.string()),
  minutes: z.array(z.object({
    topic: z.string(),
    details: z.string()
  })),
  nextSteps: z.array(z.object({
    task: z.string(),
    assignee: z.string(),
    due: z.string().nullable()
  })),
  transcript: z.array(z.object({
    speaker: z.string(),
    text: z.string()
  }))
});

// Enhanced schema for comprehensive translation
const EnhancedTranslatedMeetingSchema = z.object({
  // Basic fields
  title: z.string(),
  summary: z.string(),
  participants: z.array(z.string()),
  agenda: z.array(z.string()),
  
  // Meeting content
  minutes: z.array(z.object({
    topic: z.string(),
    details: z.string()
  })),
  
  nextSteps: z.array(z.object({
    task: z.string(),
    assignee: z.string(),
    assignedBy: z.string().nullable(),
    due: z.string().nullable(),
    priority: z.enum(['high', 'medium', 'low']).optional(),
    category: z.enum(['task', 'activity', 'project', 'follow-up']).optional()
  })),
  
  transcript: z.array(z.object({
    speaker: z.string(),
    text: z.string()
  })),
  
  // NEW: Enhanced fields
  projects: z.array(z.object({
    title: z.string(),
    description: z.string(),
    assignee: z.string(),
    assignedBy: z.string().nullable(),
    deadline: z.string().nullable(),
    scope: z.array(z.string()).optional()
  })),
  
  keyInitiatives: z.array(z.object({
    title: z.string(),
    description: z.string(),
    objective: z.string(),
    ownership: z.string()
  })),
  
  implementationPlan: z.object({
    objectives: z.array(z.string()),
    timeline: z.array(z.string()),
    hasTimeline: z.boolean()
  }).nullable(),
  
  challengesAndRisks: z.array(z.object({
    type: z.enum(['challenge', 'risk']),
    description: z.string(),
    impact: z.enum(['high', 'medium', 'low']),
    mitigation: z.string().nullable()
  })),
  
  decisionsMade: z.array(z.object({
    decision: z.string(),
    context: z.string().nullable(),
    impact: z.string().nullable(),
    decidedBy: z.string().nullable()
  }))
});

// Individual specialized schemas for each extraction
const BasicMeetingInfoSchema = z.object({
  title: z.string().min(1, "Title is required"),
  participants: z.array(z.string()).default([]),
  summary: z.string().default("No summary available."),
  agenda: z.array(z.string()).default([]),
  meetingType: z.enum(['planning', 'status-update', 'brainstorming', 'decision-making', 'project-review', 'general']).default('general')
});

const MeetingMinutesSchema = z.object({
  minutes: z.array(z.object({
    topic: z.string(),
    details: z.string()
  })).default([])
});

const ActionItemsSchema = z.object({
  nextSteps: z.array(z.object({
    task: z.string(),
    assignee: z.string(),
    assignedBy: z.string().nullable().default(null),
    due: z.string().nullable().default(null),
    priority: z.enum(['high', 'medium', 'low']).default('medium'),
    category: z.enum(['task', 'activity', 'project', 'follow-up']).default('task')
  })).default([])
});

const ProjectsSchema = z.object({
  projects: z.array(z.object({
    title: z.string(),
    description: z.string(),
    assignee: z.string(),
    assignedBy: z.string().nullable().default(null),
    deadline: z.string().nullable().default(null),
    scope: z.array(z.string()).default([])
  })).default([])
});

const KeyInitiativesSchema = z.object({
  keyInitiatives: z.array(z.object({
    title: z.string(),
    description: z.string(),
    objective: z.string(),
    ownership: z.string().default("Not specified")
  })).default([])
});

// NEW: Schema for discussion topic analysis
const DiscussionTopicAnalysisSchema = z.object({
  scheduledTopic: z.string().describe("The original scheduled discussion topic"),
  wasDiscussed: z.boolean().describe("Whether this topic was actually discussed in the meeting"),
  discussionLevel: z.enum(['comprehensive', 'partial', 'minimal', 'not-discussed']).describe("Level of discussion depth"),
  transcriptEvidence: z.array(z.string()).describe("Direct quotes or evidence from transcript showing this topic was discussed"),
  summary: z.string().describe("Brief summary of how this topic was covered in the meeting"),
  timeSpentPercentage: z.number().min(0).max(100).describe("Estimated percentage of meeting time spent on this topic")
});

const DiscussionAnalysisSchema = z.object({
  topicAnalysis: z.array(DiscussionTopicAnalysisSchema).describe("Analysis of each scheduled discussion topic"),
  overallMatchScore: z.number().min(0).max(100).describe("Overall percentage of scheduled topics that were actually discussed"),
  discussionSummary: z.string().describe("Summary of how well the meeting followed the planned discussion topics"),
  additionalTopicsDiscussed: z.array(z.string()).describe("Important topics discussed that weren't in the original schedule")
});


const ChallengesRisksSchema = z.object({
  challengesAndRisks: z.array(z.object({
    type: z.enum(['challenge', 'risk']),
    description: z.string(),
    impact: z.enum(['high', 'medium', 'low']).default('medium'),
    mitigation: z.string().nullable().default(null)
  })).default([])
});

const DecisionsSchema = z.object({
  decisionsMade: z.array(z.object({
    decision: z.string(),
    context: z.string().nullable().default(null),
    impact: z.string().nullable().default(null),
    decidedBy: z.string().nullable().default(null)
  })).default([])
});

export {
  TranscriptItemSchema,
  BasicMeetingInfoSchema,
  MeetingMinutesSchema,
  ActionItemsSchema,
  ProjectsSchema,
  KeyInitiativesSchema,
  ChallengesRisksSchema,
  DecisionsSchema,
    TranscriptSchema,
    MeetingDataSchema,
    ImplementationPlanSchema,
    KeyInitiativeSchema,
    DiscussionTopicAnalysisSchema,
    DiscussionAnalysisSchema,
    MinutesSchema,
    NextStepSchema,
    ProjectSchema,
    ChallengeRiskSchema,
    DecisionSchema,
    ComprehensiveMeetingSchema,
    MinutesAndStepsSchema,
    TranslatedMeetingSchema,
    EnhancedTranslatedMeetingSchema
};

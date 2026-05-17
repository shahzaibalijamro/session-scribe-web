import { planModel } from "../models/plan.model.js";

// Create a new plan
export const createPlan = async (req, res) => {
  try {
    const {
      planId,
      name,
      price,
      minutes,
      features,
      description,
      sortOrder,
      isActive,
      billingCycle,
      isPopular
    } = req.body;

    // Check if plan already exists
    const existingPlan = await planModel.findOne({ planId });
    if (existingPlan) {
      return res.status(400).json({
        success: false,
        message: 'Plan with this ID already exists'
      });
    }

    // Create new plan
    const newPlan = new planModel({
      planId,
      name,
      price,
      minutes,
      features: features || {}, // Use provided features or empty object
      description,
      sortOrder,
      isActive,
      billingCycle,
      isPopular
    });

    const savedPlan = await newPlan.save();

    res.status(201).json({
      success: true,
      message: 'Plan created successfully',
      data: savedPlan
    });

  } catch (error) {
    console.error('Error creating plan:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create plan',
      error: error.message
    });
  }
};

// Get all plans
export const getAllPlans = async (req, res) => {
  try {
    const { active } = req.query;
    
    // Filter by active status if specified
    const filter = active !== undefined ? { isActive: active === 'true' } : {};
    
    const plans = await planModel.find(filter).sort({ sortOrder: 1 });

    res.status(200).json({
      success: true,
      message: 'Plans retrieved successfully',
      data: plans,
      count: plans.length
    });

  } catch (error) {
    console.error('Error fetching plans:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch plans',
      error: error.message
    });
  }
};

// Get a single plan by ID
export const getPlanById = async (req, res) => {
  try {
    const { planId } = req.params;

    const plan = await planModel.findOne({ planId });
    
    if (!plan) {
      return res.status(404).json({
        success: false,
        message: 'Plan not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Plan retrieved successfully',
      data: plan
    });

  } catch (error) {
    console.error('Error fetching plan:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch plan',
      error: error.message
    });
  }
};

// Update a plan
export const updatePlan = async (req, res) => {
  try {
    const { planId } = req.params;
    const updateData = req.body;

    // Don't allow updating the planId itself
    delete updateData.planId;

    const updatedPlan = await planModel.findOneAndUpdate(
      { planId },
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedPlan) {
      return res.status(404).json({
        success: false,
        message: 'Plan not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Plan updated successfully',
      data: updatedPlan
    });

  } catch (error) {
    console.error('Error updating plan:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update plan',
      error: error.message
    });
  }
};

// Delete a plan (soft delete - set isActive to false)
export const deletePlan = async (req, res) => {
  try {
    const { planId } = req.params;

    const plan = await planModel.findOneAndUpdate(
      { planId },
      { isActive: false },
      { new: true }
    );

    if (!plan) {
      return res.status(404).json({
        success: false,
        message: 'Plan not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Plan deleted successfully (deactivated)',
      data: plan
    });

  } catch (error) {
    console.error('Error deleting plan:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete plan',
      error: error.message
    });
  }
};

// Seed plans with your pricing table data
export const seedPlans = async (req, res) => {
  try {
    const samplePlans = [
      {
        planId: 'free_trial',
        name: 'Free Trial',
        price: 0,
        minutes: 30,
        features: {
          transcription: true,
          summary: true,
          actionSuggestions: false,
          insights: false,
          toneAnalysis: false,
          multipleUsers: false,
          customAnalytics: false
        },
        description: '30 mins of transcription + summary',
        sortOrder: 1,
        isActive: true,
        isPopular: false
      },
      {
        planId: 'starter',
        name: 'Starter',
        price: 7.00,
        minutes: 100,
        features: {
          transcription: true,
          summary: false,
          actionSuggestions: false,
          insights: false,
          toneAnalysis: false,
          multipleUsers: false,
          customAnalytics: false
        },
        description: '100 minutes of transcription only',
        sortOrder: 2,
        isActive: true,
        isPopular: false
      },
      {
        planId: 'pro',
        name: 'Pro',
        price: 12.50,
        minutes: 100,
        features: {
          transcription: true,
          summary: true,
          actionSuggestions: true,
          insights: false,
          toneAnalysis: false,
          multipleUsers: false,
          customAnalytics: false
        },
        description: '100 minutes transcription + summary + action suggestions',
        sortOrder: 3,
        isActive: true,
        isPopular: true
      },
      {
        planId: 'insights',
        name: 'Insights',
        price: 21.50,
        minutes: 100,
        features: {
          transcription: true,
          summary: true,
          actionSuggestions: true,
          insights: true,
          toneAnalysis: true,
          multipleUsers: false,
          customAnalytics: false
        },
        description: '100 minutes + summary + action + meeting insights + tone/emotion flags',
        sortOrder: 4,
        isActive: true,
        isPopular: false
      },
      {
        planId: 'enterprise',
        name: 'Enterprise',
        price: 180,
        minutes: 1000,
        features: {
          transcription: true,
          summary: true,
          actionSuggestions: true,
          insights: true,
          toneAnalysis: true,
          multipleUsers: true,
          customAnalytics: true
        },
        description: '1000+ minutes, custom analytics, unlimited users',
        sortOrder: 5,
        isActive: true,
        isPopular: false
      }
    ];

    // Clear existing plans and insert new ones
    await planModel.deleteMany({});
    const insertedPlans = await planModel.insertMany(samplePlans);

    res.status(201).json({
      success: true,
      message: 'Plans seeded successfully',
      data: insertedPlans,
      count: insertedPlans.length
    });

  } catch (error) {
    console.error('Error seeding plans:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to seed plans',
      error: error.message
    });
  }
};
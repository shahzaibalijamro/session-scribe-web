import express from 'express';
import {
  createPlan,
  getAllPlans,
  getPlanById,
  updatePlan,
  deletePlan,
  seedPlans
} from '../controllers/plan.controllers.js'; // Adjust path as needed

const router = express.Router();

// Routes
router.post('/plans', createPlan);                    // POST /api/plans - Create new plan
router.get('/plans', getAllPlans);                   // GET /api/plans - Get all plans
router.get('/plans/:planId', getPlanById);           // GET /api/plans/pro - Get specific plan
router.put('/plans/:planId', updatePlan);            // PUT /api/plans/pro - Update plan
router.delete('/plans/:planId', deletePlan);         // DELETE /api/plans/pro - Soft delete plan
router.post('/plans/seed', seedPlans);               // POST /api/plans/seed - Seed with sample data

export default router;
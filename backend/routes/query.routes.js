import express from "express";
import { verifyToken, adminOnly } from "../middlewares/auth.middleware.js";
import { 
  saveQuery, 
  fetchQueries, 
  getQueryById, 
  deleteQuery 
} from "../controllers/queries.controllers.js";

const queryRouter = express.Router();

// Public route - save query (contact form)
queryRouter.post('/', saveQuery);

// Admin routes - require authentication and admin privileges
queryRouter.get('/', verifyToken, adminOnly, fetchQueries);
queryRouter.get('/:id', verifyToken, adminOnly, getQueryById);
queryRouter.delete('/:id', verifyToken, adminOnly, deleteQuery);

export { queryRouter };
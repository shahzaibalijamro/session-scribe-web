import express from 'express';
import { getAdminHistory, getAdminHistoryItem, getAllHistory, getUserHistory } from '../controllers/history.controllers.js';
import { adminOnly, verifyToken } from '../middlewares/auth.middleware.js';

const historyRouter = express.Router();

historyRouter.use(verifyToken)

historyRouter.get('/', getAllHistory);
historyRouter.get('/user', getUserHistory);
historyRouter.get('/admin',adminOnly, getAdminHistory);
historyRouter.get("/admin/history/:id", adminOnly, getAdminHistoryItem);

export { historyRouter };
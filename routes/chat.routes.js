import express from "express"
import { verifyToken } from "../middlewares/auth.middleware.js";
import { chatAboutMeetings } from "../controllers/chat.controllers.js";


const chatRouter = express.Router();

chatRouter.post('/', verifyToken
    , chatAboutMeetings);

export {chatRouter}
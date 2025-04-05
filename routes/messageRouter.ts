import express from "express";
import { deleteMessageController } from "../controllers/messageController";

export const messageRouter = express.Router();

messageRouter.delete("/:messageId", deleteMessageController);

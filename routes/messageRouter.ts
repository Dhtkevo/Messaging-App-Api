import express from "express";
import { deleteMessageController } from "../controllers/messageController";
import verifyToken from "../authorization/verifyToken";

export const messageRouter = express.Router();

messageRouter.delete("/:messageId", verifyToken, deleteMessageController);

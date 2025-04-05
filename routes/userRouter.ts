import express from "express";
import {
  getUserIdController,
  registerUserController,
  updateUsernameController,
} from "../controllers/userController";
import { inboxRouter } from "./inboxRouter";
import verifyToken from "../authorization/verifyToken";

export const userRouter = express.Router();

userRouter.use("/:userId/inbox", inboxRouter);

userRouter.post("/register", registerUserController);

userRouter.get("/:userId", verifyToken, getUserIdController);

userRouter.put("/:userId", verifyToken, updateUsernameController);

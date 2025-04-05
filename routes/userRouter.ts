import express from "express";
import {
  getUserIdController,
  registerUserController,
  updateUsernameController,
} from "../controllers/userController";
import { inboxRouter } from "./inboxRouter";

export const userRouter = express.Router();

userRouter.use("/:userId/inbox", inboxRouter);

userRouter.post("/register", registerUserController);

userRouter.get("/:userId", getUserIdController);

userRouter.put("/:userId", updateUsernameController);

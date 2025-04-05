import express from "express";
import { registerUserController } from "../controllers/userController";
import { inboxRouter } from "./inboxRouter";

export const userRouter = express.Router();

userRouter.use("/:userId/inbox", inboxRouter);

userRouter.post("/register", registerUserController);
//userRouter.put("/:userId");

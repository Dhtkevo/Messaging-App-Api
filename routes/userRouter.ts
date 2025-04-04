import express from "express";
import { registerUserController } from "../controllers/userController";

export const userRouter = express.Router();

userRouter.post("/register", registerUserController);
//userRouter.put("/:userId");

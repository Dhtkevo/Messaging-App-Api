import express from "express";
import { authUserLoginController } from "../controllers/authController";

export const authRouter = express.Router();

authRouter.post("/login", authUserLoginController);

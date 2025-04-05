import express from "express";
import { getInboxController } from "../controllers/inboxController";

export const inboxRouter = express.Router({ mergeParams: true });

inboxRouter.get("/", getInboxController);

//inboxRouter.post("/");

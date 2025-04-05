import express from "express";
import {
  getInboxController,
  postMessagetoInboxController,
} from "../controllers/inboxController";
import verifyToken from "../authorization/verifyToken";

export const inboxRouter = express.Router({ mergeParams: true });

inboxRouter.get("/", verifyToken, getInboxController);

inboxRouter.post("/", verifyToken, postMessagetoInboxController);

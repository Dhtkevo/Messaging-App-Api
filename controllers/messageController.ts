import { deleteMessageDB } from "../db/queries";
import type { Response, Request } from "express";
import type { ExtendedRequest } from "./inboxController";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const deleteMessageController = async (
  req: ExtendedRequest,
  res: Response
) => {
  jwt.verify(req.token!, process.env.JWT_SECRET!, async (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const messageId = Number(req.params.messageId);

      await deleteMessageDB(messageId);

      res.status(200).json({ message: "Message Deleted" });
    }
  });
};

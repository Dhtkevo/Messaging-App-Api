import { createMessageInboxDB, getInboxDB } from "../db/queries";
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

export interface ExtendedRequest extends Request {
  token?: string;
}

export const getInboxController = async (
  req: ExtendedRequest,
  res: Response
) => {
  jwt.verify(req.token!, process.env.JWT_SECRET!, async (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const userId = Number(req.params.userId);

      const inbox = await getInboxDB(userId);

      res.json(inbox);
    }
  });
};

export const postMessagetoInboxController = async (
  req: Request,
  res: Response
) => {
  const targetUsername = req.body.targetUsername;
  const sendingUserId = Number(req.body.sendingUserId);
  const text = req.body.text;

  await createMessageInboxDB(targetUsername, sendingUserId, text);

  res.json({ message: "Message sent" });
};

import { createMessageInboxDB, getInboxDB } from "../db/queries";
import type { Request, Response } from "express";

export const getInboxController = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId);

  const inbox = await getInboxDB(userId);

  res.json(inbox);
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

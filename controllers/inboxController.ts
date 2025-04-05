import { getInboxDB } from "../db/queries";
import type { Request, Response } from "express";

export const getInboxController = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId);

  const inbox = await getInboxDB(userId);

  res.json(inbox);
};

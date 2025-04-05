import { deleteMessageDB } from "../db/queries";
import type { Response, Request } from "express";

export const deleteMessageController = async (req: Request, res: Response) => {
  const messageId = Number(req.params.messageId);

  await deleteMessageDB(messageId);

  res.status(200).json({ message: "Message Deleted" });
};

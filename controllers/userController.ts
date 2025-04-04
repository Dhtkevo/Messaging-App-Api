import type { Request, Response } from "express";

import bcrypt from "bcryptjs";
import { createUserDB } from "../db/queries";

export const registerUserController = async (req: Request, res: Response) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  await createUserDB(req.body.username, hashedPassword);

  res.status(200).json({ message: "User created" });
};

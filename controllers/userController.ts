import type { Request, Response } from "express";

import bcrypt from "bcryptjs";
import { createUserDB, getUsernameById } from "../db/queries";

export const registerUserController = async (req: Request, res: Response) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  await createUserDB(req.body.username, hashedPassword);

  res.status(200).json({ message: "User created" });
};

export const getUserIdController = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId);

  const username = await getUsernameById(userId);

  res.json(username);
};

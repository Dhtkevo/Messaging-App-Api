import type { Request, Response } from "express";

import bcrypt from "bcryptjs";
import { createUserDB, getUsernameById, updateUsernameDB } from "../db/queries";
import jwt from "jsonwebtoken";
import "dotenv/config";
import type { ExtendedRequest } from "./inboxController";

export const registerUserController = async (req: Request, res: Response) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  await createUserDB(req.body.username, hashedPassword);

  res.status(200).json({ message: "User created" });
};

export const getUserIdController = async (
  req: ExtendedRequest,
  res: Response
) => {
  jwt.verify(req.token!, process.env.JWT_SECRET!, async (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const userId = Number(req.params.userId);

      const username = await getUsernameById(userId);

      res.json(username);
    }
  });
};

export const updateUsernameController = async (
  req: ExtendedRequest,
  res: Response
) => {
  jwt.verify(req.token!, process.env.JWT_SECRET!, async (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const userId = Number(req.body.userId);
      const newUsername = req.body.newUsername;

      await updateUsernameDB(userId, newUsername);

      res.status(200).json({ message: "Username updated" });
    }
  });
};

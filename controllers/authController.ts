import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import "dotenv/config";
import { getUserByUsernameDB } from "../db/queries";

export const authUserLoginController = async (req: Request, res: Response) => {
  const user = await getUserByUsernameDB(req.body.username);

  if (!user) {
    res.sendStatus(400);
    return;
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user?.password
  );

  if (!isPasswordValid) {
    res.sendStatus(400);
    return;
  }

  jwt.sign(
    { user },
    process.env.JWT_SECRET!,
    { expiresIn: "30 minutes" },
    (err, token) => {
      res.status(200).json({ token });
      return;
    }
  );
};

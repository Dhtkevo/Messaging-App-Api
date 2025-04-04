import express from "express";
import "dotenv/config";
import cors from "cors";
import { userRouter } from "./routes/userRouter";
import { authRouter } from "./routes/authRouter";

import type { Request, Response, NextFunction } from "express";
import { messageRouter } from "./routes/messageRouter";

const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/messages", messageRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(500).json(err);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

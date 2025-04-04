import express from "express";
import "dotenv/config";
import cors from "cors";
import { userRouter } from "./routes/userRouter";

const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

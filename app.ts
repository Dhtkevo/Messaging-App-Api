import express from "express";
import "dotenv/config";

const port = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "app works" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

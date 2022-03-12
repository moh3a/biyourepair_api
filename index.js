import { config } from "dotenv";
import express from "express";

config();
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "Hello wolrd" });
});

app.listen(port, () => {
  console.log("biyou-repair API is listening on http://localhost:" + port);
});

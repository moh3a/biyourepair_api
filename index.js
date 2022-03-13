import { config } from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import emailRouter from "./routes/email.js";
import smartphonesRouter from "./routes/smartphones.js";

config();
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors({ origin: "https://biyou-repair.web.app" }));

app.get("/", (req, res) => {
  res.json({
    title: "biyou-repair API",
    description:
      "It can only be used by biyou-repair.web.app for admin functions.",
  });
});

app.use("/email", emailRouter);
app.use("/smartphones", smartphonesRouter);

app.listen(port, () => {
  console.log("biyou-repair API is listening on http://localhost:" + port);
});

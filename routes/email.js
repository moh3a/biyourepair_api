import express from "express";
import { GetEmail, PostSendEmail } from "../controllers/EmailController.js";

const router = express.Router();
router.get("/", GetEmail);
router.post("/", PostSendEmail);
export default router;

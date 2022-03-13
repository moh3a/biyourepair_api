import express from "express";
import {
  GetBrands,
  GetModelsFromBrand,
} from "../controllers/SmartphonesController.js";

const router = express.Router();
router.get("/", GetBrands);
router.post("/", GetModelsFromBrand);
export default router;

import express from "express";
import { homePage, getFootballData } from "../controllers/football.controller";

export const router = express.Router();

router.get("/", homePage);

router.get("/api/football", getFootballData);

import express from "express";
import { googleLogin, getUser } from "../controllers/auth.js";
import {
  getProblems,
  uploadProblem,
  markCompleted,
} from "../controllers/problems-controller.js";

const router = express.Router();

router.post("/google-login", googleLogin);
router.get("/get-user", getUser);
router.post("/upload-problem", uploadProblem);
router.get("/get-problems", getProblems);
router.put("/mark-completed", markCompleted);

export default router;

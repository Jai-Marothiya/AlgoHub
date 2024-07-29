import express from "express";
import { googleLogin, getUser } from "../controllers/auth.js";
import {
  getProblems,
  uploadProblem,
  markCompleted,
  updateProblem,
} from "../controllers/problems-controller.js";
import {
  saveNote,
  deleteNote,
  getUserProblems,
} from "../controllers/dashboard-controller.js";

const router = express.Router();

router.post("/google-login", googleLogin);
router.get("/get-user", getUser);
router.post("/upload-problem", uploadProblem);
router.put("/update-problem", updateProblem);
router.get("/get-problems", getProblems);
router.post("/get-user-problems", getUserProblems);
router.put("/mark-completed", markCompleted);
router.post("/save-note", saveNote);
router.put("/delete-note", deleteNote);

export default router;

// index.js
import express from "express";
import db from "./db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post("/login", async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await db("users").insert({ name, email }).returning("*");

    console.log("newUser: ", newUser);
    res.status(201).json(newUser[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.post("/problem", async (req, res) => {
  try {
    const {
      problem_desc,
      problem_url,
      problem_tags,
      platform,
      problem_level,
      upload_by,
    } = req.body;
    const newUser = await db("problems")
      .insert({
        problem_desc,
        problem_url,
        problem_tags,
        platform,
        problem_level,
        upload_by,
      })
      .returning("*");

    console.log("newUser: ", newUser);
    res.status(201).json(newUser[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

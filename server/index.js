// index.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/Router.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
// app.use("/", Router);

// app.post("/login", async (req, res) => {
//   try {
//     const { name, email } = req.body;
//     const newUser = await db("users").insert({ name, email }).returning("*");

//     console.log("newUser: ", newUser);
//     res.status(201).json(newUser[0]);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// });
// app.post("/google-login", async (req, res) => {
//   const { token_id, email, name } = req.body;
//   console.log("token: ", token_id);
//   console.log("email: ", email);
//   console.log("name: ", name);
// });
app.use("/", router);

// app.post("/problem", async (req, res) => {
//   try {
//     const {
//       problem_desc,
//       problem_url,
//       problem_tags,
//       platform,
//       problem_level,
//       upload_by,
//     } = req.body;
//     const newUser = await db("problems")
//       .insert({
//         problem_desc,
//         problem_url,
//         problem_tags,
//         platform,
//         problem_level,
//         upload_by,
//       })
//       .returning("*");

//     console.log("newUser: ", newUser);
//     res.status(201).json(newUser[0]);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

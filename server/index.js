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
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

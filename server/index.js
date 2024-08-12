// index.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/Router.js";
import cron from "node-cron";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/", router);

// Define the keep-alive function
const keepAlive = () => {
  fetch(`https://algohub.onrender.com/keep-alive`)
    .then((response) => response.json())
    .catch((error) => console.error("Error sending keep-alive ping:", error));
};

// Schedule the keep-alive function to run every 5 minutes
cron.schedule("*/5 * * * *", () => {
  keepAlive();
});

// Define the keep-alive endpoint
app.get("/keep-alive", (req, res) => {
  res.status(200).json({ message: "Server is alive" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

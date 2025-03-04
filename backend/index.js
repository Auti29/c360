import dotenv from "dotenv";
import express from "express";
import connectDB from "./db.js";
dotenv.config({
  path: "./env",
});

const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("sent response");
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

connectDB();

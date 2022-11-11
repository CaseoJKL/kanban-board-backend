// Initialize dotenv (process.env variables)
import dotenv from "dotenv";
dotenv.config();

// Imports
import express from "express";
import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
  res.send("root route");
});

app.listen(process.env.PORT, () =>
  console.log("Listening on port " + process.env.PORT + " =>")
);

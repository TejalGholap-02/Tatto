import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

const startServer = async () => {
  const dbConnected = await connectDB();

  if (!dbConnected) {
    console.warn("The server wi
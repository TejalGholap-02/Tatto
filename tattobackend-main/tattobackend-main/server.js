import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

const startServer = async () => {
  const dbConnected = await connectDB();

  if (!dbConnected) {
    console.warn("The server will continue running without a database connection. Configure MONGO_URI to enable database-backed features.");
  }

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
};

startServer();
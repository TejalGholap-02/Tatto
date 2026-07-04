import mongoose from "mongoose";

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;

  if (!mongoUri) {
    console.warn("No MongoDB URI provided. Continuing without database connection.");
    return false;
  }

  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 10000,
    });
    console.log("MongoDB connected successfully");
    return true;
  } catch (error) {
    console.error("Database connection error:", error.message);
    return false;
  }
};

export default connectDB;
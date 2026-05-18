import mongoose from "mongoose";
import dotenv from "dotenv";
import { promises } from "node:dns";

dotenv.config();

const DB_URL = process.env.MONG_URL as string;

const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Db connected...");
  } catch (error) {
    console.error("DB Connection Failed", error);
    process.exit(1);
  }
};

export default connectDb;

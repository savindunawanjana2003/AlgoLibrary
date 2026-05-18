import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cros from "cors";
import connectDb from "../src/config/db";
dotenv.config();
const DB_URL = process.env.MONG_URL as string;
const PORT_NUMBER = process.env.PORT;

const app = express();
app.use(cros());
app.use(express.json());

connectDb()
  .then(() => {
    console.log("Mongo-Db conected... ");
  })
  .catch((error) => {
    console.error(error);
  });

app.listen(PORT_NUMBER, () => {
  console.log("server runing port:7000");
});

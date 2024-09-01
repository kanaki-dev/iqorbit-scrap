import mongoose from "mongoose";
import { DB_NAME } from "../constant";
import { config } from "dotenv";

config({
  path: ".env",
});

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    mongoose.connection.close();
    process.exit(1);
  }
};

export default connectDB;

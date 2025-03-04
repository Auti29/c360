import mongoose from "mongoose";

const MONGO_URL = process.env.MONGODB_URL;
const DB_NAME = process.env.DB_NAME;

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${MONGO_URL}/${DB_NAME}`
    );
    console.log(`connected to host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("mongodb connection error: ", error);
    process.exit(1);
  }
};

export default connectDB;

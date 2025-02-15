import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URL}`
    );
    console.log(
      `Mongo DB connected ! DB host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB Connetion error ", error);
    process.exit(1);
  }
};

export default connectDB;
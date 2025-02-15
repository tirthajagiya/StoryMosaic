import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    image: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 16,
    },
    phone: {
      type: String,
      require: true,
      length: 10,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
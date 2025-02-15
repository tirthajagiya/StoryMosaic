import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    review: {
      type: String,
      maxlength: 100,
    },
  },
  { timestamps: true }
);

const storySchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      maxlength: 20,
    },
    discription: {
      type: String,
      maxlength: 50,
    },
    content:{
        type:String,
        trim:true,
    },
    contributor: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
              },
              userType: {
                type: String,
                require: true,
                enum: ["Author", "Editior", "Reviewer", "Reader"],
              },
        }
    ],
    review: [reviewSchema],
  },
  { timestamps: true }
);

export const Story = mongoose.model("Story", storySchema);
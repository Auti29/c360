import mongoose from "mongoose";

const AssessmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    companyName: { type: String, required: true },
    description: String,
    category: {
      type: String,
      enum: ["coding", "sales", "management", "soft-skills"],
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "medium",
    },
    questions: [
      {
        question: String,
        options: [String],
        correctAnswer: String,
        weightage: Number,
      },
    ],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const Assessment = mongoose.model("Assessment", AssessmentSchema);

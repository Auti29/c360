import mongoose from "mongoose";

const MicroInternshipSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    description: String,
    skillsRequired: [String],
    duration: String,
    stipend: String,
    employer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export const MicroInternship = mongoose.model(
  "MicroInternship",
  MicroInternshipSchema
);

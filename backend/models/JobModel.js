import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: String,
    location: String,
    salaryRange: String,
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "internship", "freelance"],
      required: true,
    },
    description: String,
    educationalRequirements: [String],
    technicalRequirements: [String],
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    appliedCandidates: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export const Job = mongoose.model("Job", JobSchema);

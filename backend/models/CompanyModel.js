import mongoose from "mongoose";

const CompanyModel = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    website: String,
    industry: String,
    size: Number,
    location: String,
    description: String,
    jobsPosted: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
    hrTeam: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export const Company = mongoose.model("Company", CompanyModel);

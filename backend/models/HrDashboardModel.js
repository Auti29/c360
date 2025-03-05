import mongoose from "mongoose";
const HRDashboardSchema = new mongoose.Schema({
  recruiter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  candidatesReviewed: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  assessmentsCreated: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Assessment" },
  ],
  hiringStats: {
    totalJobsPosted: Number,
    totalCandidatesHired: Number,
  },
  createdAt: { type: Date, default: Date.now },
});

export const HRDashboard = mongoose.model("HRDashboard", HRDashboardSchema);

import mongoose from "mongoose";

const CandidateResultSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    assessment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Assessment",
      required: true,
    },
    score: Number,
  },
  { timestamps: true }
);

export const CandidateResult = mongoose.model(
  "CandidateResult",
  CandidateResultSchema
);

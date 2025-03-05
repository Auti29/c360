import mongoose from "mongoose";

const CandidateSchema = new mongoose.Schema(
  {
    user: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    profile: {
      bio: String,
      skills: [String],
      experience: [
        {
          company: String,
          position: String,
          duration: String,
        },
      ],
      education: [
        {
          degree: String,
          institution: String,
          year: Number,
        },
      ],
    },
    resumeUrl: { type: String }, //multer
    assessmentsTaken: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Assessment",
        score: Number,
        dateTaken: { type: Date, default: Date.now },
      },
    ],
    roadmapProgress: [{ type: mongoose.Schema.Types.ObjectId, ref: "Roadmap" }],
    appliedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
    microInternships: [
      { type: mongoose.Schema.Types.ObjectId, ref: "MicroInternship" },
    ],
    careerRecommendations: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AIRecommendation",
    },
  },
  { timestamps: true }
);

export const Candidate = mongoose.model("Candidate", CandidateSchema);

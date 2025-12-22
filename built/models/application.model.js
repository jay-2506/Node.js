import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  company: String,
  role: String,
  status: {
    type: String,
    enum: ["APPLIED", "INTERVIEW", "OFFER", "REJECTED"],
  },
  appliedDate: Date,
  interviewDate: Date,
  salaryExpected: Number,
  notes: String,
});

export default mongoose.model("Application", applicationSchema);

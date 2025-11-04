import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  size: { type: String, required: true },
  paperType: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

const Photo = mongoose.model("Photo", photoSchema);
export default Photo;

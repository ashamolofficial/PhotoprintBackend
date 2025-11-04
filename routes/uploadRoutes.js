import express from "express";
import multer from "multer";
import Photo from "../models/Photo.js";

const router = express.Router();

// Set up storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// Upload photo and save details in DB
router.post("/", upload.single("photo"), async (req, res) => {
  try {
    const { size, paperType } = req.body;
    const newPhoto = new Photo({
      filename: req.file.filename,
      size,
      paperType,
    });
    await newPhoto.save();
    res.json({ message: "Photo uploaded", photo: newPhoto });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

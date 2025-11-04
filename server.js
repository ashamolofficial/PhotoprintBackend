import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";


dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: "http://localhost:3000", // temporary: '*' for testing
  credentials: true,
}));

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads")); // serve images

app.use("/api/upload", uploadRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payment", paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running ${PORT}`));

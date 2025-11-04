import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// Create new order
router.post("/", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all orders (for admin)
router.get("/", async (req, res) => {
  const orders = await Order.find().populate("photos");
  res.json(orders);
});

export default router;

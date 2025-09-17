const express = require("express");

const router = express.Router();

const Order = require("../models/orderSchema");

//post order
router.post("/", async (req, res) => {
    try {
        const data = req.body;
        const newOrder = new Order(data);
        const response = await newOrder.save();
        const populatedOrder = await Order.findById(response._id).populate(
            "orders.menuItem"
        );
        console.log("Order saved successfully");
        res.status(201).json(populatedOrder);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: err });
    }
});

//get order
router.get("/", async (req, res) => {
    try {
        const response = await Order.find().populate(
            "orders.menuItem"
        );
        console.log("Order fetched successfully");
        res.status(200).json(response);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Delete all orders
router.delete("/", async (req, res) => {
    try {
        const response = await Order.deleteMany(); // Delete all orders
        console.log("All orders deleted successfully");
        res.status(200).json({
            message: "All orders deleted successfully",
            deletedCount: response.deletedCount
        });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;

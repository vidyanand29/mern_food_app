const express = require("express");
const router = express.Router();

const Item = require("../models/itemSchema");

//post Item
router.post("/", async (req, res) => {
    try {
        const data = req.body;
        const newItem = new Item(data);
        const response = await newItem.save();
        console.log("Item saved successfully");
        res.status(200).json(response);
    } catch (err) {
        console.error("Error", err);
        res.status(500).json({ Error: "Internal server error" });
    }
});

//get Item
router.get("/", async (req, res) => {
    try {
        const response = await Item.find();
        console.log("Item fetched successfully");
        res.status(200).json(response);
    } catch (err) {
        console.error("Error", err);
        res.status(500).json({ Error: "Internal server error" });
    }
});

//put Update
router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const response = await Item.findByIdAndUpdate(id, data, {
            new: true, //save new response
            runValidators: true //validate through mongoose
        });
        if (!response) return res.status(404).json({ Error: "Item not found" });
        console.log("Item updated successfully");
        res.status(200).json(response);
    } catch (err) {
        console.error("Error", err);
        res.status(500).json({ Error: "Internal server error" });
    }
});

// Delete
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const response = await Item.findByIdAndDelete(id);
        if (!response) return res.status(404).json({ Error: "Item not found" });
        console.log("Item deleted successfully");
        res.status(200).json(response);
    } catch (err) {
        console.error("Error", err);
        res.status(500).json({ Error: "Internal server error" });
    }
});

module.exports = router;

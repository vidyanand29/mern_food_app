const mongoose = require("mongoose");
const Item = require("./itemSchema"); // Import Menu item model

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters"]
    },
    address: {
        type: String,
        required: [true, "Address is required"],
        minlength: [3, "Address must be at least 3 characters"]
    },
    contact: {
        type: String,
        minlength: [10, "Contact number must be at least 10 digits"],
        required: [true, "Contact number is required"]
    },
    orders: [
        {
            menuItem: {
                type: mongoose.Schema.Types.ObjectId, // Reference to the Menu item model
                ref: "Item",
                required: true
            },
            qty: {
                type: Number,
                required: [true, "Quantity is required"],
                min: [1, "Quantity must be at least 1"]
            }
        }
    ],
    totalAmount: {
        type: Number,
        required: true,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Pre-save hook to calculate total price before saving the order
orderSchema.pre("save", async function (next) {
    let total = 0;

    for (const item of this.orders) {
        const menuItem = await Item.findById(item.menuItem); // Find the menu item by ID
        total += menuItem.price * item.qty; // price * quantity
    }

    // Set the totalAmount field with the calculated total
    this.totalAmount = total;

    next();
});

module.exports = mongoose.model("Order", orderSchema);

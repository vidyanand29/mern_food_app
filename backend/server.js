const express = require("express");
const cors = require("cors");
const app = express();

const MenuItem = require("./routes/menuRoutes");
const Order = require("./routes/orderRoutes");
require("dotenv").config();

const corsOptions = {
    origin: process.env.FRONT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
};

app.use(cors(corsOptions));

app.use(express.json());
const db_connection = require("./db");
db_connection();

app.use("/menu", MenuItem);
app.use("/order", Order);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

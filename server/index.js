const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const postsRoutes = require("./routes/posts.js");

dotenv.config();
const PORT = process.env.PORT;
const MONGO_ATLAS_URI = process.env.MONGO_ATLAS_URI;

const app = express();

app.use("/posts", postsRoutes);
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


mongoose
    .connect(MONGO_ATLAS_URI, {  useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server is running at the PORT - " + PORT);
        })
    })
    .catch((e) => {
        console.log(e.message);
    });

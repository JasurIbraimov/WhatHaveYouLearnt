const express = require("express");
const { getAllPosts, createPost } = require("../controllers/posts.js");
const router = express.Router();

router.get("/", getAllPosts);
router.post("/", createPost);

module.exports = router;

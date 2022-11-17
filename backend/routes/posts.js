const express = require("express");
const { getAllPosts, createPost, updatePost, deletePost } = require("../controllers/posts.js");
const router = express.Router();

router.get("/", getAllPosts);
router.post("/", createPost);
router.patch("/:id", updatePost)
router.delete("/:id", deletePost)
module.exports = router;

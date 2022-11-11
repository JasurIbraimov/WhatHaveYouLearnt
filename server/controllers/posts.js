const PostModel = require("../models/post.js");
const getAllPosts = async (req, res) => {
    try {
        const posts = await PostModel.find()
        if (!posts.length) {
            return res.status(404).json({success: false, message: "Posts not found!"})
        }
        return res.status(200).json({success: true, posts})
    }
    catch(err) {
        return res.status(400).json({success: false, message: err.message})
    }
}
const createPost = (req, res) => {
    const body = req.body;
    if (!body) {
      return res.status(400).json({
        success: false,
        message: "You must provide a post!",
      });
    }
  
    const post = new PostModel(body);
    if (!post) {
      return res.status(400).json({
        success: false,
        message: "Error while creating a post!",
      });
    }
  
    post.save().then(() => {
      return res.status(201).json({
        success: true,
        message: "Todposto Created!",
        id: post._id,
      });
    }).catch(err => {
      return res.status(400).json({
          success: false,
          message: err.message 
      })
    });
  };

module.exports = {
    getAllPosts,
    createPost
}
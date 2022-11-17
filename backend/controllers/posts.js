const PostModel = require("../models/post.js");
const getAllPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        return res.status(200).json({ success: true, posts });
    } catch (err) {
        return res.status(400).json({ success: false, message: err.message });
    }
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            success: false,
            message: "You must provide an id of post!",
        });
    }
    try {
        await PostModel.findByIdAndDelete(id);
        return res
            .status(200)
            .json({ success: true, message: "Post deleted!" });
    } catch (e) {
        return res.status(400).json({ success: false, message: e });
    }
};

const updatePost = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await TodoModel.findById(id);
        if (todo) {
            const {
                description,
                links,
                creator,
                tags,
                selectedFile,
                likeCount,
            } = req.body;
            todo.description = description;
            todo.links = links;
            todo.creator = creator;
            todo.tags = tags;
            todo.selectedFile = selectedFile;
            todo.likeCount = likeCount;
            todo.save()
                .then(() =>
                    res
                        .status(200)
                        .json({ success: true, message: "Post updated" })
                )
                .catch((err) =>
                    res.status(400).json({ success: false, message: err })
                );
        } else {
            return res
                .status(404)
                .json({ success: false, message: "Todo not found!" });
        }
    } catch (e) {
        return res.status(400).json({ success: false, message: e });
    }
};

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

    post.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: "Post Created!",
                post,
            });
        })
        .catch((err) => {
            return res.status(400).json({
                success: false,
                message: err.message,
            });
        });
};

module.exports = {
    getAllPosts,
    createPost,
    deletePost,
    updatePost,
};

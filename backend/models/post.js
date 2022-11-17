const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
        },
        links: [String],
        creator: {
            type: String,
            required: true,
        },
        tags: [String],
        selectedFile: {
            type: String
        },
        likeCount: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const PostModel = mongoose.model("PostModel", postSchema);

module.exports = PostModel;

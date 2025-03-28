import mongoose, { model, trusted } from "mongoose";

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true  
    },
    author: {
        type: String,
        required: true,
        default: 'Anonymous'
    },
    attachment: String,
    likeCount: {
        type: Number,
        default: 0
    },
},
    {timestamps: true}
);

export const PostModel = mongoose.model('Post', Schema)
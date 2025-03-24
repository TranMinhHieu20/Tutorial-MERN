import { PostModel } from "../models/PostModel.js"
//GET
export const getPost = async (req, res) => {
    try {
        const posts = await PostModel.find();
        console.log('Posts', posts)
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({err: err})
    }
}
//POST
export const createPost =async (req, res) => {
    try {
        const newPost = req.body;

        const post = new PostModel(newPost)
        await post.save()

        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({err: err})
    }
}
//POST
export const updatePost = async (req, res) => {
    try {
        const updatePost = req.body;

        const post = await PostModel.findOneAndUpdate({_id: updatePost._id}, updatePost, {new: true})
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({err: err})
    }
}
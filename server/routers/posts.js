import express from 'express';
const router = express.Router();
import { getPost, createPost, updatePost } from '../controllers/posts.js';

router.get('/', getPost)

router.post('/', createPost)

router.post('/update', updatePost)

export default router
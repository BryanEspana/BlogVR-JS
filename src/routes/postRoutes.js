import express from 'express';
import { getAllPosts, getPostById, createPost, updatePost, deletePost } from '../controllers/postsController.js';

const router = express.Router();

router.get('/', getAllPosts);

router.get('/:postId', getPostById);

router.post('/', createPost);

router.put('/:postId', updatePost);

router.delete('/:postId', deletePost);

export default router;

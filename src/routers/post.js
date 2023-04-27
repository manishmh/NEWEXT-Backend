import express from 'express';
import {commentPost}  from '../controllers/posts.js';
const router = express.Router();
import auth from "../middleware/auth.js";
router.post('/:id/commentPost', commentPost);

export default router;
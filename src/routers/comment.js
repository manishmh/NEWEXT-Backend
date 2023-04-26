const express = require('express');
const Comment = require('../models/comment');

const router = express.Router();


router.post('/', async (req, res) => {
  try {
    const { text, parentId } = req.body;
    const comment = new Comment({ text });

    if (parentId) {
      const parentComment = await Comment.findById(parentId);
      if (!parentComment) {
        return res.status(404).json({ message: 'Parent comment not found' });
      }
      parentComment.children.push(comment);
      await parentComment.save();
    }

    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create comment' });
  }
});

router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find({});
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch comments' });
  }
});

module.exports = router;

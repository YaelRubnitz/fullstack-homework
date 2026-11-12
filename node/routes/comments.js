// routes/comments.js
import express from 'express';
import { posts } from './posts.js'; // מייבאים את הפוסטים כדי לוודא שהם קיימים

const router = express.Router({ mergeParams: true });

const comments = {
  1: [{ id: 101, text: 'Great post!' }],
  2: []
};

router.use((req, res, next) => {
  const postId = parseInt(req.params.postId);
  const post = posts.find(p => p.id === postId);
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  next(); // ממשיכים הלאה לראוט
});

router.get('/', (req, res) => {
  const postId = req.params.postId;
  res.json(comments[postId] || []);
});

router.post('/', (req, res) => {
  const postId = req.params.postId;
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  const newComment = { id: Date.now(), text };
  
  if (!comments[postId]) {
    comments[postId] = [];
  }
  
  comments[postId].push(newComment);
  res.status(201).json(newComment);
});

export default router;
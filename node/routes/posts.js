import express from 'express';
import commentsRouter from './comments.js';

const router = express.Router();

export const posts = [
  { id: 1, title: 'Hello Express' },
  { id: 2, title: 'Routing is Fun' }
];

router.get('/', (req, res) => {
  res.json(posts);
});


router.get('/:postId', (req, res) => {
  const postId = parseInt(req.params.postId);
  const post = posts.find(p => p.id === postId);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
});

router.use('/:postId/comments', commentsRouter);

export default router;

// routes/greet.js
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ msg: 'Hello from /greet!' });
});

// ייצוא ברירת מחדל (Default Export)
export default router;
import express from 'express';

const router = express.Router();

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

router.get('/', (req,res) => {
    res.json(users)
})

router.get('/:id', (req,res) => {
    const userId = parseInt(req.params.id);
    for(let i = 0 ; i < users.length; i++ ){
        if (users[i].id === userId ){
            res.json(users[i])
        }
    }
    res.status(404).json({msg :"No such user!"})
})

router.post('/',(req,res) => {
    const newUser = { id: Date.now(), name: req.body.name };
    users.push(newUser);
    res.status(201).json(newUser);
    })

router.put('/:id',(req,res) => {
const userId = parseInt(req.params.id);
  const { name } = req.body;
  const user = users.find(u => u.id === userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  if (name) user.name = name;
  res.json(user);
    })

router.delete('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === userId);
    if (index === -1) {
        return res.status(404).json({ error: 'User not found' });
    }
    users.splice(index,1)
    res.status(204).send();
})

export default router;
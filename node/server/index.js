import express from 'express';

const API_KEY = "live_QMn6i6MRN9xeXZ2V8tH1UdJO0vKcQ8XOsHOLdFmoaHOIfxRLJEn1ibnu5sgdeFRk"
const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/greet/:name', (req, res) => {
    const userName = req.params.name;
    console.log(`i got name: ${userName}`);
    res.json({ msg: `got name: ${userName}` });
});

app.get('/test', async (req, res) => {
    
    try{
        const response = await fetch('http://localhost:3000/greet/Bob');
        const data = await response.json();

        if (data.msg && data.msg.includes('Bob')){
            res.json({ result: 'ok' });
        } else {
            res.json({ result: 'fail' });
        }
        } catch (error) {
    res.status(500).json({ result: 'fail', error: error.message });
  }
});

app.post('/action', async (req, res) => {
    const { action } = req.body;
    if (!action || (action !== 'joke' && action !== 'cat fact')) {
    return res.status(400).json({ msg: 'body is malformed' });
    }
    try {
    if (action === 'joke') {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' }
      });
      const data = await response.json();
      
      const jokeUpper = data.joke.toUpperCase();
      res.json({ joke: jokeUpper });

    } else if (action === 'cat fact') {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=11', {
        headers: {
          'x-api-key': API_KEY
        }
      });
      const data = await response.json();
      
      res.json({ length: String(data.length || 11) });
    }
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
});
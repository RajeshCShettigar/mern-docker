const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

// Define a route that returns "Hello World"
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
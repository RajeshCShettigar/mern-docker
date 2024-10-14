const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors({
  origin: '*',
}
));
/*
const os = require('os');

function getLocalIPAddress() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      const { family, address, internal } = iface;
      if (family === 'IPv4' && !internal) {
        return address;
      }
    }
  }
  return 'localhost';
}

console.log(getLocalIPAddress())
*/
app.use(express.json())
// Define a route that returns "Hello World"
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hi World' });
});

app.listen(port,'0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${port}`);
});

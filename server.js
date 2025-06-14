const express = require('express');
const app = express();
const PORT = 3000;
const VERSION = "Version 2";

app.get('/', (req, res) => {
  res.send(`Hello from ${VERSION}`);
});

app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

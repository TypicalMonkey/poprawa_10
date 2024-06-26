const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Witaj w aplikacji serwerowej!');
});

app.listen(port, () => {
  console.log(`Serwer backendowy działa na http://localhost:${port}`);
});

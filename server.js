const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/detection', (req, res) => {
  const { object, probability, status } = req.body;
  console.log("Received detection: ${object}, Probability: ${probability}, Status: ${status}");
  res.status(200).send({ message: 'Data received successfully' });
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:${PORT}");
});
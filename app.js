const express = require('express');
const app = express();
app.use(express.json());

app.post('/notify', (req, res) => {
  const { bin_id, status } = req.body;
  console.log(`Received update: ${bin_id} is ${status}`);
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Server running on port 3000'));
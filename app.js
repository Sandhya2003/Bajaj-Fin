const express = require('express');
const app = express();
const port = 3000; // You can change this port number

app.use(express.json());

// POST request to /bfhl
app.post('/bfhl', (req, res) => {
  // Get the "data" array from the request body
  const data = req.body.data;

  // Extract numbers and alphabets from the "data" array
  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));

  // Find the highest alphabet (lexicographically)
  const highest_alphabet = alphabets.length > 0 ? [alphabets.sort()[alphabets.length - 1]] : [];

  // Prepare the response JSON
  const response = {
    is_success: true,
    user_id: 'john_doe_17091999',
    email: 'john@xyz.com',
    roll_number: 'ABCD123',
    numbers,
    alphabets,
    highest_alphabet
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
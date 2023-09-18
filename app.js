const express = require('express');
const app = express();
const port = 3000; // You can change the port number if needed

// Define a simple API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

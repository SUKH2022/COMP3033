const connect = require('connect');
const url = require('url');
const app = connect();

// Handle the /lab2 route
app.use('/lab2', (req, res) => {
  // Parse the query parameters from the URL
  const query = url.parse(req.url, true).query;

  // Retrieve values for method, x, and y
  const method = query.method;
  const x = parseFloat(query.x);
  const y = parseFloat(query.y);

  // Initialize result variable
  let result;

  // Check for the operation method and calculate the result
  if (method === 'add') {
    result = x + y;
  } else if (method === 'subtract') {
    result = x - y;
  } else if (method === 'multiply') {
    result = x * y;
  } else if (method === 'divide') {
    if (y === 0) {
      res.writeHead(400, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({ error: 'Cannot divide by zero' }));
      return;
    }
    result = x / y;
  } else {
    res.writeHead(400, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ error: 'Invalid method' }));
    return;
  }

  // Return the result as a JSON object
  const response = {
    x: query.x,
    y: query.y,
    operation: method,
    result: result
  };

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(response));
});

// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
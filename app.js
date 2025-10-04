const http = require('http');
const port = 80;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World from my automated CI/CD pipeline - Version 6!\n');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

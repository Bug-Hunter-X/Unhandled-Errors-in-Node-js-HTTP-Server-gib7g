const http = require('http');

const server = http.createServer((req, res) => {
  try {
    //Improved error handling
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (err) {
    console.error('Request handler error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.on('error', err => {
  console.error('Server error:', err);
  if (err.code === 'EADDRINUSE') {
    console.error('Address in use, try a different port.');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
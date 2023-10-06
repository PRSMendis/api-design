const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method ==='GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello World!');
  }
}
)

server.listen(3001, () => {
    console.log('server on local host 3001')
})
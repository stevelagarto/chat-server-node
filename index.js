const http = require('http');
const port = 3000;
const host = 'localhost';
const router = require('./router');
const bodyparser = require('./bodyParser');

const server = http.createServer((req, res) => {
  bodyparser(req, res, router);
});

server.listen(port, host, () => {
  console.log(`Server running at ${port}`); // eslint-disable-line no-console
});
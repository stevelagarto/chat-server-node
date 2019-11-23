const express = require('express');
const app = express();
const port = 3000;
const router = require('./router');
const bodyparser = require('./bodyParser');

// const server = http.createServer((req, res) => {
//   bodyparser(req, res, router);
// });

app.listen(port, () => {
  console.log(`Server running at ${port}`); // eslint-disable-line no-console
});
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const clientPath = path.join(__dirname, './client/chat-client-exercise-master/app/REMOVE/');
const router = require('./router');
const bodyparser = require('body-parser');


app.use(express.static(clientPath));
app.use(bodyparser.json());
app.use(router);



app.listen(port, () => {
  console.log(`Server running at ${port}`); // eslint-disable-line no-console
});

module.exports = app;
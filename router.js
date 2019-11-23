const path = require('path');
const fs = require('fs');
const db = require('./db');
const clientPath = path.join(__dirname, '/../../client');
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm'
};

const router = function (req, res) {
  if (req.url === '/messages' && req.method === 'POST') {
    db.msgs.push(req.body);
    res.writeHead(201);
    res.end();
  } else if (req.url === '/messages' && req.method === 'GET') {
    res.writeHead(200, { 'Content-type': mimeTypes['.json'] });
    res.end(JSON.stringify(db.msgs));
  } else {
    // Static files
    if (req.url === '/') req.url = '/index.html';
    const extName = path.extname(req.url);
    const contentType = mimeTypes[extName] || 'application/octet-stream';
    fs.readFile(clientPath + req.url, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end();
      } else {
        res.writeHead(200, { 'Content-type': contentType });
        res.end(data);
      }
    });
  }
};

module.exports = router;
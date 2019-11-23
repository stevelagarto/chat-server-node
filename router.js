const path = require('path');
const express = require('express');
const fs = require('fs');
const db = require('./db');
const router = require('express').Router();

router.get('/message', (req, res) => {
  res.status(200);
  res.send(JSON.stringify(db.msgs));
});

router.post('/message', (req, res) => {
  console.log(req.body);
  db.msgs.push(req.body);
  res.status(201);
  res.send(req.body)
});



module.exports = router;
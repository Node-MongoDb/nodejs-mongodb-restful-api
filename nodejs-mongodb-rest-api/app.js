// const express = require('express'),
import express from "express";

const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const User = require('./restapi/models/userModel');
const Device = require('./restapi/models/deviceModel');
const Rol = require('./restapi/models/rolModel');

mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/DOMControl', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// routes
// app.use(require('./restapi/routes/deviceRoutes'));
// app.use( require('./restapi/routes/userRoutes'));
// app.use(require('./restapi/routes/rolRoutes'));

// const routes = require('./restapi/routes/deviceRoutes');
const routes = require('./restapi/routes/userRoutes');
// const routes = require('./restapi/routes/rolRoutes');

routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);
console.log('DOMControl  RESTful web services with Nodejs started on: ' + port);

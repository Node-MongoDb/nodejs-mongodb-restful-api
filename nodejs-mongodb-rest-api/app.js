var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Device = require('./restapi/models/deviceModel'),
  User = require('./restapi/models/userModel'),
  Device = require('./restapi/models/deviceModel'),
  Rol = require('./restapi/models/rolModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/onlinestore', { 
  mongoose.connect('mongodb://localhost/DOMControl', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
// app.use(require('./restapi/routes/productRoutes'));
// app.use(require('./restapi/routes/deviceRoutes'));
// app.use( require('./restapi/routes/userRoutes'));
// app.use(require('./restapi/routes/rolRoutes'));

// const routes = require('./restapi/routes/productRoutes');
// const routes = require('./restapi/routes/deviceRoutes');
const routes = require('./restapi/routes/userRoutes');
// const routes = require('./restapi/routes/rolRoutes');


routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('DOMControl  RESTful web services with Nodejs started on: ' + port);

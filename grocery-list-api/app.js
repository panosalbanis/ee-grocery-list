'use strict';

const SwaggerExpress = require('swagger-express-mw');
const loki = require('lokijs');

const db = new loki('loki.json');
var groceryLists = db.addCollection('groceryLists');

const app = require('express')();

var config = {
  appRoot: __dirname
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) {
    throw err;
  }

  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);
});

app.use((req, res, next) => {
  req.groceryLists = groceryLists;
  next();
});

module.exports = app;

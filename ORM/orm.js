var Waterline = require('waterline');

// create new instance of waterline
var orm = new Waterline();

// get connection configs
var connectionConfig = require('../config/connection.js');

// load model definitions

var fs = require('fs');
var path = require("path");

fs
  .readdirSync('./api/models')
  .filter(function(file) {
    return (file.indexOf(".") !== 0);
  })
  .forEach(function(file) {
    var model = require(path.join('../api/models', file));
    orm.loadCollection(model);
  });

// export an orm object
module.exports = {};

// initialize function
module.exports.initialize = function(app, PORT, callback) {  
  // Initialize the whole database and store models and connections to app
  orm.initialize(connectionConfig, function(err, models) {
    if(err) throw err;

    // pass the collections (models) and connections created to app
    callback(models.collections, models.connections);

  });
}
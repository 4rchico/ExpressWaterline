var mysqlAdapter = require('sails-mysql');  
var myDiskAdapter = require('sails-disk');

module.exports = {

  // setup adapters for each type of database
  adapters: {
    'default': mysqlAdapter,
    disk: myDiskAdapter,
    mysql: mysqlAdapter
  },

  // setup all type of connections you could have
  connections: {
    // mysql connection configs
    mysqlLocalhost: {
      adapter: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'test', // change your database name here
      user: 'root',
      password: 'root'
    },
    //using sails-disk method
    diskLocal: {
        adapter: 'disk'
    }
  },

  // some config about migration or something
  defaults: {
    // migration mode
    migrate: 'safe'
  }
};
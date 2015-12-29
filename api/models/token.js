var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({  
  // tableName corresponds to database table name
  tableName: 'token',

  // connection name corresponds to the connection we define in configs/connection.js
  connection: 'mysqlLocalhost',

  attributes: {
    token: {
      type: 'string'
    },

    // instance methods can be put here
    temporaryFunction: function() {
      // doing some stuff here
    }
  }
});
var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({  
  // tableName corresponds to database table name
  tableName: 'user',

  // connection name corresponds to the connection we define in configs/connection.js
  connection: 'mysqlLocalhost',

  attributes: {
    userName: {
      type: 'string'
    }, 
    email: {
      type: 'email', // automatically got email validation
      required: true // required attribute
    },
    age: {
      type: 'integer',
      min: 18
    },

    // instance methods can be put here
    temporaryFunction: function() {
      // doing some stuff here
    }
  }
});
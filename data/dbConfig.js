  
const knex = require('knex');

const knexConfig = require('../knexfile.js');

module.exports = knex(knexConfig.development);


  
// const knex = require('knex');

// const knexConfig = require('../knexfile.js');

// module.exports = knex(knexConfig.development);
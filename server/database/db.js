const Pool = require('pg-promise')();
require('dotenv').config();

// const db = Pool({
//   user: 'andrewihn',
//   host: 'localhost',
//   database: 'test',
//   port: 5432,
// });

const db = Pool({
  user: 'ubuntu',
  host: '18.212.19.154',
  database: 'test',
  password: 'pw',
  port: 5432,
});

module.exports = db;

const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '8jq1gm5rn4r',
  database: 'qt-example'
});
module.exports = connection;
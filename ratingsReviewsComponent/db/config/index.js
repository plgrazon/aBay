const Sequelize = require('sequelize');

const connection = new Sequelize('ratings', 'hodempsey', '11', {
  host: 'db',
  dialect: 'postgres'
});

connection.authenticate()
.then(() => {
  console.log('success connecting to database')
}).catch(err => {
  console.log('error connecting to database', err)
});

module.exports = {
  connection
};
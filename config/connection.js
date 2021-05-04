const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('tech_post', 'root', 'root', {
      host: 'localhost',
      port: 3306,
      dialect: 'mysql'
    });

module.exports = sequelize;
const Sequelize = require('sequelize');

const sequelize = new Sequelize('testedb', 'root', '123465', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });

  module.exports = sequelize;

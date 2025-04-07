const { Sequelize } = require('sequelize')
const dotenv = require('dotenv').config()

const sequelize = new Sequelize(process.env.PRO_DB_NAME, process.env.PRO_DB_USER, process.env.PRO_DB_PASSWORD, {
    host: process.env.PRO_DB_HOST,
    port: process.env.PRO_DB_PORT || 3306,
    dialect: 'mysql',
    logging: false,
})

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.error('Connection error:', err));

module.exports = sequelize;
const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    brocess.env.DB_PASSWORD,
    {
        host:'localhost',
        dialect: 'mysql',
        port: 8080
    }
)


module.exports = sequelize;

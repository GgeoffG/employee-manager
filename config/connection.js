const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    'storemanager_db',
    'root',
    '1017003Gg!',
    {
        host:'127.0.0.1',
        dialect: 'mysql',
    }
)


module.exports = sequelize;

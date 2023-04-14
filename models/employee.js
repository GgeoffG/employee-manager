const {Model, DataTypes} = require('sequelize');
const sequelize =require ('../config/connection')

class Employee extends Model {}

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,

        }
    }
)
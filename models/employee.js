const {Model, DataTypes} = require('sequelize');
const sequelize =require ('../config/connection')

class Employee extends Model {}

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,

        },
        first_name: {
            type: DataTypes.STRING,
            validate: {
                max: 30
            }
        },
        last_name: {
            type: DataTypes.STRING,
            validate: {
                max:30
            }
        },
        role_id: {
            type: DataTypes.INTEGER
        },
        manager_id: {
            type: DataTypes.INTEGER
        }
    }
)

module.exports= Employee;
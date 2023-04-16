const {Model, DataTypes} = require('sequelize');
const sequelize =require ('../config/connection')

class Department extends Model {}

Department.init (
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type:DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'department',
        freezeTableName: true
    }
)

module.exports = Department
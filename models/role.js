const {Model, DataTypes} = require('sequelize');
const sequelize =require ('../config/connection')

class Role extends Model {}

Role.init(
    {
        id: {
          type:  DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            validate: {
                max:30,
            }
        },
        salary: {
            type: DataTypes.DECIMAL
        },
        department_id:{
            type:DataTypes.INTEGER

        },
 },
 {
    sequelize,
    timestamps:true,
    underscored:true,
    modelName: 'role'
 }

    
)

module.exports = Role
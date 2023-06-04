const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Employee extends Model {}

Employee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      validate: {
        max: 30,
      },
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        max: 30,
      },
    },
    manager: {
      type: DataTypes.BOOLEAN,
    },
    role_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "role",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "employee",
    freezeTableName: true,
  }
);

module.exports = Employee;

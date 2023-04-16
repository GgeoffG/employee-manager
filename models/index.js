const Department= require ('./department')
const Employee = require ('./employee')
const Role = require('./drole')

Role.belongsTo(Department, {
    foreignKey: 'department_id'
})
Role.hasMany(Employee, {
    foreignKey: 'role_id'
})


module.exports= {Role, Department, Employee}
const Department= require ('./department')
const Employee = require ('./employee')
const Role = require('./role')

Role.belongsTo(Department, {
    foreignKey: 'department_id'
})
Employee.belongsTo(Role, {
    foreignKey: 'role_id'
})


module.exports= {Role, Department, Employee}
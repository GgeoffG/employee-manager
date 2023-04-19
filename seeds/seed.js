const sequelize = require("../config/connection");
const {Department,Employee,Role} = require('../models');

const deparmentData= require ('./departmentSeedData.json');
const employeeData = require ('./employeeSeedData.json');
const roleData = require ('./rolesSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({force:true});

    const departments = await Department.bulkCreate(deparmentData);
    const roles= await Role.bulkCreate(roleData)
    
    for (const id of departments) {
        const newRole = await Role.update(roles, {
            department_id: id,
            
        });
    }
    for ( const employee of employeeData) {
        const newEmployee = await Employee.create({
            ...employee,
            role_id: roles[Math.floor(Math.random()* roles.length)].id
        })
    }

    process.exit(0);
};

seedDatabase()
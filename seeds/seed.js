const sequelize = require("../config/connection");
const {Department,Employee,Role} = require('../models');

const deparmentData= require ('./departmentSeedData.json');
const employeeData = require ('./employeeSeedData.json');
const roleData = require ('./rolesSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({force:true});

    const departments = await Department.bulkCreate(deparmentData)
    
    for (const id of departments) {
        const newRole = await Role.create({
            department_id: id,
            
        })
    }
    console.log("Roles Created")
}

seedDatabase()
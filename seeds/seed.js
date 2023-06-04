const sequelize = require("../config/connection");
const { Department, Employee, Role } = require("../models");

const deparmentData = require("./departmentSeedData.json");
const employeeData = require("./employeeSeedData.json");
const roleData = require("./rolesSeedData.json");
const seedDepartments = () => Department.bulkCreate(deparmentData);
const seedEmployees = () => Employee.bulkCreate(employeeData);
const seedRoles = () => Role.bulkCreate(roleData);
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedDepartments();
  console.log("\n----- DEPARTMENTS SEEDED -----\n");

  await seedRoles();
  console.log("\n----- ROLES SEEDED -----\n");

  await seedEmployees();
  console.log("\n----- EMPLOYEES SEEDED -----\n");

  process.exit(0);
};

seedDatabase();

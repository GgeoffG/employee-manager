const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Department, Role, Employee } = require("../../models");

//Get all Employees
router.get("/", async (req, res) => {
  try {
    const employeeData = await Employee.findAll({
      include: [{ model: Department, model: Role }],
    });
    res.status(200).json(employeeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get single Employee
router.get("/:id"),
  async (req, res) => {
    try {
      const employeeData = await Employee.findByPk(req.params.id, {
        include: [{ model: Department }, { model: Role }],
      });
      if (!employeeData) {
        res.status(404).json({ message: "No Employee matching this id" });
        return;
      }
      res.status(200).json(employeeData);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  //Create a new Employee
  router.post('/'),
  async (req, res) => {
    try{
        const employeeData = await Employee.create(req.body);
        console.log('role created')
        return res.json(employeeData)
    } catch (err) {
        res.status(500).json(err);
    }
  }
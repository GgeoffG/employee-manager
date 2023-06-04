const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Department, Role, Employee } = require("../../models");

//Get all departments
router.get("/", async (req, res) => {
  try {
    const departmentData = await Department.findAll({
      include: [{ model: Employee, model: Role }],
    });
    const formattedData = departmentData.map((department) => {
      const { dataValues, roles } = department;
      const formattedRoles = roles.map((role) => role.dataValues);
      return { ...dataValues, roles: JSON.stringify(formattedRoles) };
    });

    console.table(formattedData);
    res.status(200).json(departmentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get single department
router.get("/:id"),
  async (req, res) => {
    try {
      const departmentData = await Department.findByPk(req.params.id, {
        include: [{ model: Employee }, { model: Role }],
      });
      if (!departmentData) {
        res.status(404).json({ message: "No department matching this id" });
        return;
      }
      res.status(200).json(departmentData);
    } catch (err) {
      res.status(500).json(err);
    }
  };

//Create a new department
router.post("/"),
  async (req, res) => {
    try {
      const departmentData = await Department.create(req.body);
      console.log("role created");
      return res.json(departmentData);
    } catch (err) {
      res.status(500).json(err);
    }
  };

module.exports = router;

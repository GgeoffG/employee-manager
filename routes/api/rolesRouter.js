const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Department, Role, Employee } = require("../../models");

//Get all Roles
router.get("/", async (req, res) => {
  try {
    const roleData = await Role.findAll({
      include: [{ model: Department, model: Employee }],
    });
    res.status(200).json(roleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get single Role
router.get("/:id"),
  async (req, res) => {
    try {
      const roleData = await Role.findByPk(req.params.id, {
        include: [{ model: Department }, { model: Employee }],
      });
      if (!roleData) {
        res.status(404).json({ message: "No Role matching this id" });
        return;
      }
      res.status(200).json(roleData);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  //Create a new Role
  router.post('/'),
  async (req, res) => {
    try{
        const roleData = await Role.create(req.body);
        console.log('role created')
        return res.json(roleData)
    } catch (err) {
        res.status(500).json(err);
    }
  }
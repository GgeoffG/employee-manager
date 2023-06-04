const router = require("express").Router();
const deparmentRoutes = require("./api/deparmentRouter");
const employeeRoutes = require("./api/employeeRouter");
const rolesRoutes = require("./api/rolesRouter");

router.use("/departments", deparmentRoutes);
router.use("/employees", employeeRoutes);
router.use("/roles", rolesRoutes);

module.exports = router;

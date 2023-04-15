const router = require('express').Router();
const deparmentRoutes = require ('./api/deparmentRouter');
const employeeRoutes= require ('./api/employeeRouter')
const rolesRoutes = require ('./api/rolesRouter')

const app = express ();

app.use('/departments', deparmentRoutes)
app.use('/employees', employeeRoutes)
app.use('/roles', rolesRoutes)

module.exports = app;
const express = require ('express');
const routes = require ('./routesroutes');
const sequelize = require('./config/connection')
const inquirer = require('inquirer')

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes)

sequelize.sync({force: false}).the(() => {
    app.listen(PORT, ()=> console.log (`Listening on ${PORT}`))
})
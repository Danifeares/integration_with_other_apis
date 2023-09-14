const express = require('express')
const findData = require('./controllers.js/findData')
const routers = express()

routers.get('/empresas', findData)

module.exports = routers
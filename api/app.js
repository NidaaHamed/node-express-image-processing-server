const express = require('express')
const app = express()
const path = require('path')

const pathToIndex = path.resolve(__dirname, '../client/index.html')
app.use('/*', function(req, res){
  res.sendFile(pathToIndex)
})
module.exports = app
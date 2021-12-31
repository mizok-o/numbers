const express = require('express')
const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3000,
  user: 'root',
  password: 'mitarashi3201',
  database: 'filedata'
})

connection.connect()
connection.query('select * from files', (e, result, fields) => {
  console.log(result);
})

const app = express()
app.get('/', function(req, res) {
  res.send({
    message: 'jaoifhroie'
  })
})


app.listen(process.env.PORT || 3000)
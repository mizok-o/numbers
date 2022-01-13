const express = require('express')
const app = express()
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'filedata'
})

app.listen(3000, () => console.log('example fire'))
connection.connect()

app.get('/api/hello', (req, res) => {
  res.set({ 
    'Access-Control-Allow-Origin': 'http://localhost:8080'
  })

  connection.query("select * from files;",
    (error, results) => {
      res.send(results)
    }
  );
  
})
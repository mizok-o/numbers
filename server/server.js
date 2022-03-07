const express = require('express')
// const cors = require('cors')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const e = require('express')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'imgstore_data'
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.listen(3000, () => console.log('example fire'))
connection.connect()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "http://localhost:8080");
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, GET');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});


app.options('*', function (req, res, next) {
  res.sendStatus(200);
});

app.post('/api/hello', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  connection.query("select * from users;",
    (error, results) => {
      const checkUsername = username === results[0].name;
      const checkPassword = password === results[0].password;

      if (checkUsername && checkPassword) {
        res.send(true)
      } else {
        res.send(false)
      }
    }
  );
})

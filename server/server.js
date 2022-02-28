const express = require('express')
const cors = require('cors')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const e = require('express')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'filedata'
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

/**
 \* OPTIONSメソッドの実装
 \*/
app.options('*', function (req, res) {
  res.sendStatus(200);
});

app.get('/api/hello', (req, res) => {
  connection.query("select * from files;",
    (error, results) => {
      res.send(results)
    }
  );
})

app.post('/api/data', (req, res) => {
  const data = req.body
  const q = `insert into files values (${data.file_id}, "${data.file_url}", "${data.file_name}", "${data.file_format}", "${data.file_genre}");`
  connection.query(q , (error, results) => {
      if(error) throw error;
      console.log(results);
      res.send(results)
    }
  );
})

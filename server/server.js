const express = require('express')

const app = express()

app.get('/', function(req, res) {
  res.send({
    message: 'jaoifhroie'
  })
})


app.listen(process.env.PORT || 3000)
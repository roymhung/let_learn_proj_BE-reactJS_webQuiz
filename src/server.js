const express = require('express'); //commonjs
const path = require('path');
require('dotenv').config();
// import express from 'express'; // es modules


const app = express(); // app express
const port = process.env.PORT || 8888; // port => hardcode .uat .prod
const hostname = process.env.HOST_NAME;

//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//config static files
app.use(express.static(path.join(__dirname,'public')));

// khai bao route
app.get('/', (req, res) => {
  res.send('Hello World! vs nodemon hahah' )
})

app.get('/abc', (req, res) => {
  res.send('Check ABC')
})

app.get('/royhung', (req, res) => {
  res.render('sample.ejs')
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})

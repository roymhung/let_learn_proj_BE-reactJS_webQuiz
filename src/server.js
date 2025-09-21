const express = require('express'); //commonjs
const path = require('path');
// import express from 'express'; // es modules

const app = express(); // app express
const port = 8080; // port

//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')


// khai bao route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/abc', (req, res) => {
  res.send('Check ABC')
})

app.get('/royhung', (req, res) => {
  res.render('sample.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

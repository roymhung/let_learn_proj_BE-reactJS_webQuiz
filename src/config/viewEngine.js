const path = require("path");
const express = require('express'); //commonjs

const configViewEngine = (app) => {
  app.set("views", path.join('./src', "views"));
  app.set("view engine", "ejs");

  //config static files: img/css/js
  app.use(express.static(path.join('./src', "public")));
};

module.exports = configViewEngine;

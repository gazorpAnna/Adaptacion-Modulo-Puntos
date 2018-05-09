
/**
 * Express configuration
 */

"use strict";

var express = require("express");
//var morgan = require("morgan");
var compression = require("compression");
//var errorHandler = require("errorhandler");
var path = require("path");
var config = require("./index");

module.exports = function(app) {
  app.use(compression());
  app.use(express.static(path.join(config.root, "dist")));
  app.set("appPath", path.join(config.root, "dist"));
  //app.use(morgan("dev"));
  //app.use(errorHandler()); // Error handler - has to be last
};

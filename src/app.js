const express = require("express");
const routeConfig = require("./config/route-config.js");

const app = express();

routeConfig.init(app);

module.exports = app;
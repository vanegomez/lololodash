'use strict'
var _ = require("lodash");

var worker = function (item) {
  return _.where(item, {active: true})
};

module.exports = worker;

'use strict'
var _ = require("lodash");

//var users = [
//    { id: 22, username: "martin", active: true},
//    { id: 23, username: "max",    active: false},
//    { id: 24, username: "linda",  active: false}
//  ];

var worker = function (item) {
  return _.where(item, {active: true})
};

module.exports = worker;

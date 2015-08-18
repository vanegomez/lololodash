var _ = require("lodash");

var sorting = function(items) {
  return _.sortBy(items, 'quantity').reverse();
};

module.exports = sorting;


//var sorting = function (collection) {
//  return _.sortBy(collection, function (item) {
//    return -item.quantity;
//  });
//};

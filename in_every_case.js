var _ = require("lodash");

var collection = function(collection) {
  return _.forEach(collection, function(item) {
    if (item.population >= 1) {
      item.size = 'big';
    } else if (item.population < 0.5) {
      item.size = 'small';
    } else {
      item.size = 'med';
    }
  });
};

module.exports = collection;

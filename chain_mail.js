var _ = require("lodash");

var words = function (collection) {
  return _.chain(collection)
    .map(function (word) {
      return word + 'chained';
    })
  .map(function (word) {
    return word.toUpperCase();
  })
    .sortBy()
    .value();
};

module.exports = words;

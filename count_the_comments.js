var _ = require("lodash");

var comment = function(comments) {
  var totalCount = [];

  comments = _.groupBy(comments, "username");

  _.forEach(comments, function (item, name){
    totalCount.push({
      username: name,
      comment_count: _.size(item)
    });
  });

  return _.sortBy(totalCount, 'comment_count').reverse();
};

module.exports = comment;

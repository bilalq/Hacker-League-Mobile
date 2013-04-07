var hackerLeague = require('hackerleague');

var hackathons = $.hackathonsId;

hackerleague(function(err, response) {
  console.log(response);
});

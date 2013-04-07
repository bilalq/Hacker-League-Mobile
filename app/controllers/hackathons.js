var moment = require('alloy/moment');
var hackerleague = require('hackerleague');

hackerleague.getHackathons(function(err, response) {

  for (var i = 0; i < response.length; i++) {
    var hackathon = response[i];
    var row = Alloy.createController('hackathonRow', hackathon).getView();
    $.hackathons.add(row);
  }

});

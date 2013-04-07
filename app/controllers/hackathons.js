var moment = require('alloy/moment');
var hackerleague = require('hackerleague');

hackerleague.getHackathons(function(err, response) {

  for (var i = 0; i < response.length; i++) {
    var hackathon = response[i];

    var startDate = new Date(hackathon.start_time);
    var endDate = new Date(hackathon.end_time);
    var dateFormat = 'MMMM Do YYYY';
    var startDateStr = moment(startDate).format(dateFormat);
    var endDateStr = moment(endDate).format(dateFormat);

    hackathon.display_date = startDateStr + ' - ' + endDateStr;

    var row = Alloy.createController('hackathonRow', hackathon).getView();
    $.hackathons.add(row);
  }

});

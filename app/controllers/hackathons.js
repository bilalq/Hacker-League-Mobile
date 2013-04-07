var moment = require('alloy/moment');
var hackerleague = require('hackerleague');

hackerleague.getHackathons(function(err, response) {

  for (var i = 0; i < response.length; i++) {
    var hackathon = response[i];
    var row = Alloy.createController('hackathonRow', hackathon).getView();

    var startDate = new Date(hackathon.start_date);
    var endDate = new Date(hackathon.end_date);
    var dateFormat = 'MMMM Do YYYY';
    var startDateStr = moment(startDate).format(dateFormat);
    var endDateStr = moment(startDate).format(dateFormat);

    hackathon.display_date = startDateStr + ' - ' + endDateStr;
    $.hackathons.add(row);
  }

});

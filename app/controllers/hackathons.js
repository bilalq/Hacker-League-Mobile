var moment = require('alloy/moment');
var hackerleague = require('hackerleague');

hackerleague.getHackathons(function(err, response) {

  var tableData = [];
  for (var i = 0; i < response.length; i++) {
    var hackathon = response[i];
    var row = Ti.UI.createTableViewRow({
      width: Ti.UI.FILL,
      layout: 'vertical'
    });
    row.add(Ti.UI.createLabel({
      text: hackathon.name,
      top: '5dp',
      left: '5dp',
      color: 'black'
    }));
    row.add(Ti.UI.createLabel({
      text: hackathon.start_time,
      left: '5dp',
      top: '5dp',
      color: 'black'
    }));

    tableData.push(row);
  }
  $.hackathonsTable.data = tableData;

});


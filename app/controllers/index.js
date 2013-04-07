$.mainWindow.open();

var hl = require('hackerleague');

hl.getHackathons(function(response) {
  console.log(response[0]);
});

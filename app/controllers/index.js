var HL = require('hackerleague');

HL.getHackathons(function(){console.log("DONE");});
$.mainWindow.open();

var hl = require('hackerleague');

hl.getHackathons(function(response) {
  console.log(response[0]);
});

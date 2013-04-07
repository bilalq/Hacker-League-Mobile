$.mainWindow.open();

var hl = require('hackerleague');

hl.getHackathons(function(response) {
  console.log(response[0]);
});

setTimeout(function() {
  var hackthons = Alloy.createController('hackathons').getView();
  hackathons.open():
}, 1000);

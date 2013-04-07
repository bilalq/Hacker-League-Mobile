$.mainWindow.open();

var openHappeningWindow = function() {
   var happeningWindow = Alloy.createController('happening').getView();
   happeningWindow.open();
};

var openNearbyWindow = function() {
  var nearbyWindow = Alloy.createController('hackathons').getView();
   nearbyWindow.open();
};

var openPastWindow = function() {
  var pastWindow = Alloy.createController('past').getView();
  pastWindow.open();
};

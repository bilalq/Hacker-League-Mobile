$.mainWindow.open();

// var happeningWindow = Alloy.createController('happening').getView();
var nearbyWindow = Alloy.createController('hackathons').getView();
var pastWindow = Alloy.createController('past').getView();

var openHappeningWindow = function() {
  // happeningWindow.open();
};

var openNearbyWindow = function() {
   nearbyWindow.open();
};

var openPastWindow = function() {
  pastWindow.open();
};

$.mainWindow.open();

// var happeningWindow = Alloy.createController('happening').getView();

var openHappeningWindow = function() {
  // happeningWindow.open();
};

var openNearbyWindow = function() {
  var nearbyWindow = Alloy.createController('hackathons').getView();
   nearbyWindow.open();
};

var openPastWindow = function() {
  var pastWindow = Alloy.createController('past').getView();
  pastWindow.open();
};

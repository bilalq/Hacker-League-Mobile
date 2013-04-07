$.mainWindow.open();

// var happeningWindow = Alloy.createController('happening').getView();

var openHappeningWindow = function() {
  var nearbyWindow = Alloy.createController('hackathonDetail').getView();
   nearbyWindow.open();
};

var openNearbyWindow = function() {
  var nearbyWindow = Alloy.createController('hackathons').getView();
   nearbyWindow.open();
};

var openPastWindow = function() {
  var pastWindow = Alloy.createController('past').getView();
  pastWindow.open();
};

var closeWindow = function() {
  $.hackathonsWindow.close({
    animated: true,
  });
};

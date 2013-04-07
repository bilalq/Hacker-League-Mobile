var request = require('request');

exports.getHackathons = (function(callback) {
  request({
    method: 'GET',
    url: 'hackathons.json?limit=25',
    callback: function(err, response) {
      callback(err, JSON.parse(response.responseText));
    },
  });
});

exports.getHacks = (function(hackathonID, callback) {
  request({
    method: 'GET',
    url: 'hackathons/'+hackathonID+'/hacks.json',
    callback: function(err, response) {
      callback(err, JSON.parse(response.responseText));
    },
  });
});

exports.getNearbyHackathons = (function(state, callback) {
  request({
    method: 'GET',
    url: 'hackathons.json?limit=900',
    callback: function(err, response) {
      var hackathons = JSON.parse(response.responseData);
      var nearby = _.filter(hackathons, function(hackathon) {
        return (hackathon && hackathon.state && hackathon.location && hackathon.location.state) &&
          hackathon.state !== "complete" && (hackathon.location.state === state || hackathon.location.state === "Anywhere")
      });
      callback(null, nearby);
    },
  });
});

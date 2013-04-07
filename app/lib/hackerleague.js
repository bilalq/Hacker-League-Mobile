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

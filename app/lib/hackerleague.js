var request = require('request');

exports.getHackathons = (function(callback) {
  request({
    method: 'GET',
    url: 'hackathons.json?parameters=1000',
    callback: function(err, response) {
      callback(response.responseData);
    },
  });
});

exports.getHacks = (function(hackathonID, callback) {
  request({
    method: 'GET',
    url: 'hackathons/'+hackathonID+'/hacks.json',
    callback: function(err, response) {
      callback(response.responseData);
    },
  });
});

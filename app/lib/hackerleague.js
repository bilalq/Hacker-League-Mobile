var request = require('request');

exports.getHackathons = (function(callback) {
  request({
    method: 'GET',
    url: 'hackathons.json',
    parameters: {
      'limit' : 100000
    },
    callback: function(err, response) {
      console.log(response.responseText);
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

module.exports = (function(request) {

  var base_url = 'https://www.hackerleague.org/api/v1/';

  var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
      request.callback(null, this);
    },
    onerror: function(e) {
      request.callback(this);
    },
    timeout: 5000
  });

  xhr.open(request.method, base_url + request.url);
  xhr.send(request.parameters);
});

/*
 * EXAMPLE:
 *  request({
 *    method: 'POST',
 *    url: 'hackathons',
 *    parameters : { 'yolo': '420swag' },
 *    callback: function(err, response) {
 *      console.log(response);
 *    }
 *  });
 *
 */

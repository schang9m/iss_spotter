/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const needle = require('needle');

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  needle.get('https://api.ipify.org?format=json', function(error, response, body) {
    if (error) return callback(error, null);

    if (response.statusCode === 200) {
      return callback(null, body.ip);
    } else {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      return callback(msg, null);
    }
  });
};

const fetchCoordsByIP = function(ip, callback) {
  needle.get(`http://ipwho.is/${ip}`, function(error, response, body) {
    if (error) return callback(error, null);

    if (!body.success) {
      return callback(body, null);
    }
    return callback(null, {latitude: body.latitude, longitude: body.longitude});
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };
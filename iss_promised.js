const needle = require('needle');

const fetchMyIP = function() {
  return needle('get', 'https://api.ipify.org?format=json')
  .then((response)=> {
    const body = response.body;
    const ip = body.ip;
    return ip;
  })
}
const fetchCoordsByIP = function(ip) {
  return needle('get', `http://ipwho.is/${ip}`)
  .then((response) => {
    return {latitude: response.body.latitude, longitude: response.body.longitude}
  })
};

const fetchISSFlyOverTimes = function(coords) {
  return needle('get', `https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`)
  .then((respond) => {
    return respond.body.response
  })
}

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
  .then((ip) => fetchCoordsByIP(ip))
  .then((coords) => fetchISSFlyOverTimes(coords))
  .then(passTime => passTime)
}

module.exports = {nextISSTimesForMyLocation};
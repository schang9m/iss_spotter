const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('42', (error, cord) => {
//   if (error) {
//     return console.log("It didn't work!", error);
//   } else {
//     console.log('It worked! Returned Cord:', cord);
//   }
// });

fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, passTime) => {
  if (error) {
    return console.log("It didn't work!", error);
  } else {
    console.log('It worked! Returned flyover time:', passTime);
  }
});
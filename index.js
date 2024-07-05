const { fetchMyIP, fetchCoordsByIP } = require('./iss');
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
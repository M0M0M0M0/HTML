// setTimeout(() => {
// alert('This is a random delayed alert from demo2.js');
// }, Math.random() * 10000); // Random delay between 0 and 10 seconds

// setInterval(() => {
//     alert('This is  delayed alert from demo2.js');
// }, 3000); // Alert every 3 seconds

// var h = 1;
// var m = 10;
// var s = 15;
// const timer = setInterval(() => {
//     console.log(h+ ':'+(m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s));
//     s--;
//     if (s === 0 && m === 0 && h === 0) {
//         clearInterval(timer);
//         console.log('Time is up!');
//     }
//     if (s < 0) {
//         s = 59;
//         m--;
//     }else if (m < 0) {
//         m = 59;
//         h--;
//     }
// }, 1);
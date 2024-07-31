const { time } = require("console");
const fs = require("fs").promises;

var a = 0;

//  1  //

// setInterval(() => {
//   a++;
//   console.log(a);
// }, 1000);

//  2  //

// var increment = (num) => {};
// func = () => {
//   setTimeout(() => {
//     a++;
//     console.log(a);
//     func();
//   }, 1000);
// };
// func();

//  3  //

// async function read() {
//   let startTime = Date.now();
//   const data = await fs.readFile("./3-read-from-file.md", "utf-8");
//   for (let index = 0; index <= 0; index++) {
//     var i;
//   }
//   endTime = Date.now();
//   elapsedTime = endTime - startTime;
//   console.log(data, elapsedTime);
// }
// read();

//  4  //

// async function write() {
//   const data = await fs.readFile("./4-write-to-file.md", "utf-8");
//   fs.writeFile("./4-write-to-file.md", data + "\nutf-8");
// }
// write();
// console.log("done");

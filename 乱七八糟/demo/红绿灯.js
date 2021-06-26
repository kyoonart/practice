// 实现红灯1秒、黄灯2秒、绿灯3秒
// let red = new Promise((resolve) => {
//   const a = "red";
//   setTimeout(() => {
//     console.log(a);
//     resolve();
//   }, 1000);
// });

// let yellow = red.then((res) => {
//   return new Promise((resolve) => {
//     const a = "yellow";
//     setTimeout(() => {
//       console.log(a);
//       resolve();
//     }, 2000);
//   });
// });

// let green = yellow.then((res) => {
//   return new Promise((resolve) => {
//     const a = "green";
//     setTimeout(() => {
//       console.log(a);
//       resolve();
//     }, 3000);
//   });
// });
// green();

async function light() {
  let red = await new Promise((resolve) => {
    setTimeout(() => {
      console.log("red");
      resolve("red");
    }, 1000);
  });
  //   console.log("red", red);
  let yellow = await new Promise((resolve) => {
    setTimeout(() => {
      console.log("yellow");
      resolve("yellow");
    }, 2000);
  });
  //   console.log("yellow", yellow);
  let green = await new Promise((resolve) => {
    setTimeout(() => {
      console.log("green");
      resolve("green");
      light();
    }, 3000);
  });
  //   console.log("green", green);
}
light();

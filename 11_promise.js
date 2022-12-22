const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hello');
  }, 1000);
});

p.then(res => console.log(res));



// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error('ERROR!!'));
//     resolve('hello');
//   }, 1000);
// });
//
// p.then(res => console.log(res)).catch(e => console.log('에러가 났어요.', e));


// finally도 있긴 하다
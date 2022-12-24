function add(a, b, c=10) {
  return a + b + c;
}

const a = add(1, 2);
console.log(a); // 13

const b = add(1, 2, 3);
console.log(b); // 6


// const add2 = (a, b, c = 10) => {
//   return a + b + c
// };
//
// const a2 = add2(1, 2);
// console.log(a2); // 13
//
// const b2 = add2(1, 2, 3);
// console.log(b2); // 6
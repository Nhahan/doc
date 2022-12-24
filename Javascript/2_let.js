// console.log(a); // error! 호이스팅이 안되기 때문에 에러

let a = 1;

console.log(a); // 1

// let a = 2; // error! 재선언 불가능

a = 2;

console.log(a); // 2

// let은 재할당만 가능
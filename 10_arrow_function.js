const hello = () => {
  return 'hello';
}

console.log(hello());



function hello2() {
  return 'hello2';
}

console.log(hello2());


// 함수블럭 {} 안에 return만 있다면 생략 가능
const hello3 = () => 'hello3';

console.log(hello3());
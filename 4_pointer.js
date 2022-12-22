let a = [];

a.push(1);

console.log(a); // [1]

/** */

const b = [];

b.push(1);

console.log(b); // [1]


const c = b;

console.log(b); // [1]

b.push(2);

console.log(c); // [1, 2]

// c가 b의 값을 갖는게 아니라, b의 메모리 주소를 갖고 있으므로 b가 변경되면 c도 변경된다. c는 b를 바라보고 있다.

/**
const d = [];
for (const num of b) {
  d.push(num);
}
 */

const d = [...b];

b.push(3);

console.log(d); // [1, 2]

// 요약. reference type을 복사할 때 주의하자.

// Primitive Type: 데이터의 실제 값
// Reference Type: 데이터의 위치 값
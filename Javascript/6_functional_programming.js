const a = [1, 2, 3, 4];

// forEach
a.forEach(x => console.log(x));

// map
const m = a.map(x => x + 1);
console.log(m); // [2, 3, 4, 5]

// filter
const f = a.filter(x => x % 2 === 0);
console.log(f); // [2, 4]

// reduce
const r = a.reduce((prev, curr) => prev + curr, 3);
const r2 = a.reduce((prev, curr) => prev + curr);

console.log(r);
console.log(r2);
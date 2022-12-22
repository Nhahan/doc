const arr = [1, 2, 3];

const b = [...arr];
console.log(b);

const c = [...arr, 4];
console.log(c);

/** */


const obj = {name: 'hi', age: 44}

const d = {...obj};
console.log(d);

const e = {...obj, city: 'Seoul'}
console.log(e);

/** */


const company = 'Sparta';

const f = {...e, company}
console.log(f);
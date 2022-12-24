// noinspection JSUnresolvedVariable

const response = {
  data: {
    items: [
      {
        name: 'hello',
        age: 44,
        city: 'Seoul',
      },
      {
        name: 'hi',
        age: 33,
        city: 'California',
      }
    ],
  },
  status: {
    number: 200,
    code: 'SUCCESS',
  },
};

const a = response.data.items[0];
console.log(a);
// const b = response.data.items[3].age;
// console.log(b);
// const c = response.a.b;
// const c = response.a?.b;
// console.log(c);

import {api} from './mock.js';

let data;

api().then(res => data = res);

console.log('hello');
console.log(data);
console.log('oh no');
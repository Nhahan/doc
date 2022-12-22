// noinspection PointlessBooleanExpressionJS

let a, b, c;

a = true && 'a';
b = true || 'b';
c = true ?? 'c';
console.log(a, b, c);

a = false && 'a';
b = false || 'b';
c = false ?? 'c';
console.log(a, b, c);

a = '' && 'a';
b = '' || 'b';
c = '' ?? 'c';
console.log(a, b, c);

a = 0 && 'a';
b = 0 || 'b';
c = 0 ?? 'c';
console.log(a, b, c);

a = undefined && 'a';
b = undefined || 'b';
c = undefined ?? 'c';
console.log(a, b, c);

a = null && 'a';
b = null || 'b';
c = null ?? 'c';
console.log(a, b, c);


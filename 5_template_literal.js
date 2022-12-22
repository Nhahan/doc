const a = '안녕';
const b = '하세요';

const c = 'xxx님! ' + a + b + '.';

console.log(c); // xxx님! 안녕하세요.


const d = `xxx님! ${a}${b}.`;

console.log(d); // xxx님! 안녕하세요.



/** 실제 사용사례 */

const baseUrl = 'localhost:3000'
const getArticle = (articleId) => `${baseUrl}/members/${articleId}/contents`;

console.log(getArticle(1));
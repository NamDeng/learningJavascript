// function을 생략해도 된다.
// 함수에 매개변수가 단 하나 뿐이라면 괄호()를 생략할 수 있다.
// 함수 바디가 표현식 하나라면 중괄호와 return 문을 생략할 수 있다.
const f1 = function() { return "Hello JavaScript";}
console.log(f1()); // Hello JavaScript

const arrowF1 = () => "Hello JavaScript";
console.log(arrowF1()); // Hello JavaScript

const f2 = function(name) { return `Hello, ${name}`; }
console.log(f2('won hyung'));

const arrowF2 = (name) => `Hello, ${name}`;
console.log(arrowF2('won hyung'));
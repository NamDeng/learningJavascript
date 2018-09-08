// 어떤 함수를 호출하든 그 함수에서 정해진 매개변수 숫자와 관계없이 
// 몇개의 매개변수를 전달해도 된다.
// 정해진 매개변수에 값을 제공하지 않으면 암시적으로 undefined가 할당된다.
const sum = (a, b) => a + b;
console.log(sum()); // NaN

// defualt parameter 설정
// 파라미터를 받지 않았을때의 기본값을 설정한다.
const mul = (a = 1, b = 1) => a * b;
console.log(mul()); // 1
console.log(mul(2, 3)); // 6
console.log(mul(3)); // 3

// 파라미터 해체
const obj = {
    subject : 'I',
    verb : 'love',
    object : 'JavaScript'
}
const getSentence = ({subject, verb, object}) => `${subject} ${verb} ${object}`;
console.log(getSentence(obj)); // I love JavaScript

// 객체의 프로퍼티인 함수
const o = {
    name : 'won hyung',
    getName : function() { return name }
};
console.log(o);

// ES6 객체의 프로퍼티인 함수
const o1 = {
    name : 'won hyung',
    getName() { return name }
}
console.log(o1);
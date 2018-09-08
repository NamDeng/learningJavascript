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

// 화살표 함수는 일반적인 함수와 다른점이 있다.
// this가 다른 변수와 마찬가지로 정적으로(lexically) 묶인다.
// 이전 this 예제를 arrow function을 사용하여 해결할 수 있다.
const o = {
    name : 'won hyung',
    greetBackwards : function() {
        console.log(this); // this object
        const getReverseName = () => {
            console.log(this); // this object
            let nameBackwards = '';
            for(let i=this.name.length-1; i>=0; i--) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym, olleH`;
    }
};
console.log(o.greetBackwards());
// 화살표 함수는 객체 생성자로 사용할 수 없다,
// arguments 변수도 사용할 수 없다. 다만 확장 연산자로 대신할 수 있음.
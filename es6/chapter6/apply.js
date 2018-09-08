// apply 메서드도 모든 "함수"에서 사용할 수 있다.
// apply는 매개변수를 처리하는 방법을 제외하면 call과 완전히 같다.
// call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만 apply는 매개변수를 배열로 받는다.
const arr = [2, 3, -5, 15, 7];
console.log(Math.min.apply(null, arr));
console.log(Math.max.apply(null, arr));
const bruce = { name: 'Bruce' };
const madeline = { name: 'Madeline' };

function greet() {
    return `Hello, I'm ${this.name}!`;
}
console.log(greet()); // Hello, I'm undefined!
console.log(greet.call(bruce)); // Hello, I'm Bruce!
console.log(greet.call(madeline)); // Hello, I'm Madeline!

// call 메서드는 모든 함수에서 사용할 수 있으며, this를 특정 값으로 지정할 수 있다.
// 첫번째 매개변수는 this로 사용할 값이고, 매개변수가 더 있으면 그 매개변수는 호출하는 함수로 전달된다.
function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(bruce, 1949, 'singer');
update.call(madeline, 1942, 'actress');

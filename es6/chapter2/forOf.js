// ES6에서 새로 생긴 반복문이며 컬렉션의 요소에 루프를 실행하는 방법.
// iterable 객체에 모두 사용할 수 있는 범용적인 루프.

// 1. loop array
const randFace = () => "randFace";
const face = [
    randFace(),
    randFace(),
    randFace()
];
for(let prop of face) {
    console.log(`You rolled...${prop}`);
}

// 2. loop map
const map = new Map();
map.set(face, "array");
map.set(randFace, "function");
map.set("wonhyung", "string");
 for(let [key, value] of map) {
    console.log(`map key : ${key} / value :  ${value}`);
}

// 3. loop set
const set = new Set();
set.add(face);
set.add(randFace);
set.add("string");
for(let val of set) {
    console.log(`set value : ${val}`);
}

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

function greet(name) {
    return `안녕, ${name}~!`;
}
console.log(greet("찐친 개발자"));
console.log(greet("코드 마에스트로"));
console.log(greet("프로그래밍 천재"));
console.log(greet("AI 연구원"));
// number 타입
const userName = "코드 마에스트로";
const userAge = 20;
const isStudent = true;
console.log(`이름: ${userName}, 나이: ${userAge}, 학생 여부: ${isStudent}`);
// 배열타입
const numbers = [1, 2, 3, 4, 5];
const fruits = ["사과", "바나나", "체리"];
const mixedArray = [1, "사과", 2, "바나나"];
console.log(numbers);
console.log(fruits);
console.log(mixedArray);
// 튜플타입
const userInfo = ["코드 마에스트로", 20];
console.log(userInfo);
// 유니온타입
const unionType = "loading";
console.log(unionType);
const user = {
    name: "코드 마에스트로",
    age: 20,
};
console.log(user);

/******/ })()
;
//# sourceMappingURL=bundle.js.map
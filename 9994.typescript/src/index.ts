function greet(name: string): string {
  return `안녕, ${name}~!`;
}

console.log(greet("찐친 개발자"));
console.log(greet("코드 마에스트로"));
console.log(greet("프로그래밍 천재"));
console.log(greet("AI 연구원"));

// number 타입
const userName: string = "코드 마에스트로";
const userAge: number = 20;
const isStudent: boolean = true;
console.log(`이름: ${userName}, 나이: ${userAge}, 학생 여부: ${isStudent}`);

// 배열타입
const numbers: number[] = [1, 2, 3, 4, 5];
const fruits: string[] = ["사과", "바나나", "체리"];
const mixedArray: (number | string)[] = [1, "사과", 2, "바나나"];
console.log(numbers);
console.log(fruits);
console.log(mixedArray);

// 튜플타입
const userInfo: [string, number] = ["코드 마에스트로", 20];
console.log(userInfo);

// 유니온타입
const unionType: "loading" | "success" | "error" = "loading";
console.log(unionType);

// 객체타입
type User = {
  name: string;
  age: number;
  isActiove?: boolean; // 선택적 속성
};
const user: User = {
  name: "코드 마에스트로",
  age: 20,
};
console.log(user);

// JS3-4.for문연습1 JS

/*********************************************** 
    [프로그램 요구사항]

    [1] 미니언즈 넣기
    1. 미니언즈 버튼을 클릭하면
    파란박스에 미니언즈 이미지가 추가되어 들어간다
    2. 이때 미니언즈 버튼마다 한번에 들어가는
    개수가 정해져있다.(1개, 5개, 10개)

    ((대상선정))
    (1) 이벤트대상 : .mini (click이벤트)
    (2) 변경대상 : .mini-space
    ______________________________________

    [2] 미니언즈 개수 표시하기
    1. 미니언즈를 넣을때 실시간 반영 개수를 표시한다.
    2. 이때 미니언즈 이미지가 3개씩 있으므로
    3의 배수로 표시해 준다!

    ((대상선정))
    (1) 이벤트대상 : .mini (click이벤트)
    (2) 변경대상 : .stxt span
    ______________________________________

    [3] 파란박스 리셋하기
    1. 리셋버튼을 클릭하면 파란박스의 미니언즈 이미지
    모두가 삭제 된다.
    2. 이때 미니언즈 개수도 0으로 초기화한다.

    ((대상선정))
    (1) 이벤트대상 : .rbtn (click이벤트)
    (2) 변경대상 : .mini-space


***********************************************/

// 1. 대상선정
// 1-1. 이벤트 대상: .mini
let mini =
  document.querySelectorAll(".mini");
// 1-2. 변경대상 : .mini-space
let miniSpace = document.querySelector(
  ".mini-space"
);
// 1-3. 개수 출력요소
let stxt = document.querySelector(
  ".stxt span"
);
// 1-4. 리셋버튼
let rbtn =
  document.querySelector(".rbtn");

// console.log("선택대상 : ",mini, mini.length+"개",stxt,rBtn);

// 2. 이벤트 속성 셋팅하기 ///////////////
// 이벤트 대상에서 click이벤트와 함수를 연결한다.

// mini.item(0).onclick = insertMini;

// mini에 담긴 html컬렉션의 개수는? 변수.length
// 개수만큼 for문을 돌아서 클릭 이벤트 셋팅을 한다.
// for(시작값;한계값;증가or감소값){코드}

// 전체 mini개수
const miniCnt = mini.length;

for (let i = 0; i < miniCnt; i++) {
  mini[i].onclick = insertMini;
}
// mini[0].onclick = insertMini;

// 3. 함수 만들기 ///////////////
// 미니언즈 이미지 개수를 저장할 변수를
// 함수구역 바깥에 만들고 전역변수로 설정하여
// 함수에서 변경시 그 값이 유지되도록 설정한다.
let miniCount = 0;

// 선언적함수 이름있는 함수에는 ; 붙이면 에러남
function insertMini() {
  //  this -> 호출한 요소 자신
  // 1. 호출한 요소의 개수 속성 읽어오기 : data-num
  let num =
    this.getAttribute("data-num");
  // 속성값 읽어오기 2가지
  // 1) 선택요소.속성명
  // 2) 선택요소.getAttribute('속성명')

  // 속성값 셋팅법 2가지
  // 1) 선택요소.속성명 = 값
  // 예) docment.querySelector('img').src = 경로
  // 2) 선택요소.setAttribute('속성명', '값')
  // 예) .setAttribute('src',경로)

  // 2. 함수호출확인
  console.log(
    "미니언즈 넣어봐봐 : ",
    num
  );

  // 3. 변경대상요소(miniSpace)에 이미지 넣기
  // +=은 대입연산자 : 기존값에 새로운 값을 더한다.
  for (let i = 0; i < num; i++) {
    miniSpace.innerHTML += `
    <img src="./images/Minions.png"/>`;
    // 미니언즈 개수 증가하기
    miniCount++;
  } ///for////

  // 4. 미니언즈 개수 표시하기
  // 대상 : .stxt span ->stxt변수
  stxt.innerText = miniCount * 3;
  // 미니언즈 이미지에 3개씩 있으므로 곱하기 3
} /////////////insertMini함수


// 리셋버튼
// 4. 리셋버튼 클릭시 초기화 기능 ///////////////
// 이벤트 대상: .rbtn ->rbtn 변수
rbtn.onclick = function(){
    // 1. 호출하기
    console.log("리셋이야~");

    // 2. 변경대상 : .mini-space
    miniSpace.innerHTML = "";

    // 3. 개수 초기화
    miniCount = 0;
    stxt.innerText = 0;
}; //////click이벤트함수 (클릭 이벤트에 직접 함수를 줘서 ;가 필수)//////////

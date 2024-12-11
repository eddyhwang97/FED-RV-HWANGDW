// JS실험실 : 02.스크롤액션 JS

// 나의 함수 불러오기불러오기
import myFn from "./my_function.js";

// 글자등장 함수 불러오기
import callLetter from "./call_letter.js";

// console.log(myFn,callLetter);

// 글자등장함수 호출하기
callLetter(
  ".stage",
  "신카이마코토",
  1500
);
/**************************************************** 
    [ 스크롤 이벤트를 활용한 요소 등장액션 기능구현하기 ]

  1. 사용 이벤트 : scroll
  -> 스크롤 바가 있는 페이지에서 또는 부분박스에서
  스크롤 바가 이동할때 발생하는 이벤트
  -> 주의: wheel 이벤트와는 다르다! 무엇이?
  스크롤바가 이동하지 않아도 마우스 휠이 작동될때 발생한다!
  (휠이벤트는 모바일에서 사용불가!)

  2. 스크롤바 위치값 알아내기 : 세로방향(Y축)
    (1) window.scrollY (IE6~11지원안함)
    (2) document.scrollingElement.scrollTop
    (3) document.documentElement.scrollTop
    (4) document.querySelector('html').scrollTop
    -> 가로방향 스크롤바는 Y대신 X라는 문자를 사용함!

  3. 스크롤 등장 대상요소의 보이는 화면에서의 top값
    getBoundingClientRect().top
    -> 보이는 화면상단을 기준으로 이것보다 위로 갈경우
    마이너스값을 리턴한다!
    -> 기준: 보이는 화면크기를 기준하면 된다!
    -> 윈도우화면 전체: window.innerHeight
    예) 화면의 3/2는 window.innerHeight/3*2
    예) 화면의 4/3는 window.innerHeight/4*3

    ((메서드명 조어 분석))
    getBoundingClientRect()
    get 가져와라
    Bounding 경계선 (->바운딩박스 - 경계선을 가지는 직사각형박스)
    Client 보이는 화면
    Rect 사각형

    ->>> BouningClientRect 
    -> 보이는 화면 사각형 경계선으로 부터의 거리를
     리턴해주는 메서드
     -> 상단으로 부터의 거리는 top속성
     -> 왼쪽으로 부터의 거리는 left속성
     공통적으로 경계선 아래쪽은 양수, 윗쪽은 음수

****************************************************/

// 1. 대상선정 :
// (1) 이벤트 대상 : window
// (2) 변경대상 : .scroll-act
const scrollAct = myFn.qsa(
  ".scroll-act"
);
// (3) 변경대상 : .tit
const tit = myFn.qs(".tit");
tit.style.transition = '.4s ease-in-out';
// console.log("대상:", scrollAct);

// 스크롤 등장 요소의 위치값 담기
const posEl = [];
// offsetTop는 맨위에서 부터 요소의 위치값
// 배열변수에 순서대로 담는다.
scrollAct.forEach((el,idx)=>posEl[idx] = el.offsetTop)
console.log('위치값',posEl)



// 2. 이벤트 설정하기
myFn.addEvt(window, "scroll", showEl);
//
myFn.addEvt(window, "scroll", moveTit);

// 기준값 만들기 : 화면 높이값 사용(화면의 2/3)
const CRETERIA =
  (window.innerHeight / 3) * 2;
// console.log("기준값", CRETERIA);

// 3. 함수만들기
function showEl() {
  //(1) 함수 호출 확인
  // console.log("나야나", window.scrollY);

  scrollAct.forEach((el) => {
    let bcrVal = myFn.getBCR(el);
    // console.log(bcrVal);

    // 화면의 2/3 위치에서 클래서 넣기(등장)
    if (bcrVal < CRETERIA)
      el.classList.add("on");
    else el.classList.remove("on");
  });////forEach /////
} ////showEL 함수////////////

function moveTit() {
  let scY = window.scrollY;
  // console.log(scrollY)

  // 제일 큰 값부터 차례대로 범위를 만들면 간단해진다.
  if (scY >= posEl[2]) //세번째요소
    tit.style.left = "30%";
  else if (scY > posEl[1]) //두번째요소
    tit.style.left = "78%";
  else if (scY > posEl[0]) //첫번째요소
    tit.style.left = "28%";
  else tit.style.left = "50%";
}

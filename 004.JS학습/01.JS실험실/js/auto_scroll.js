// 자동스크롤 JS - auto_scroll.js

// 나의 함수 불러오기
import myFn from "./my_function.js";

/********************************************** 
    [ 자동스크롤 기능정의 ]
    1. 스크롤바가 없는 상태에서 또는 스크롤기능을 
    막아놓은 상태에서 마우스 휠 작동시
    아래와 같이 기능구현됨
    (1) 휠 내림 : 다음페이지로 이동
    (2) 휠 올림 : 이전페이지로 이동

    2. 스크롤바 첫페이지와 끝페이지에서 이동안함

    [ 자동스크롤 이벤트 ]
    -> wheel 이벤트
    -> 마우스 휠 작동시 발생!
    (이전 이벤트명: 
        mousewheel / DOMMouseScroll(파이어폭스))
    (주의: wheel이벤트는 scroll이벤트와는 다름!
        마우스의 바퀴를 돌릴때 발생함!)
**********************************************/

// 1. 자동스크롤 구현시 필요한 초기설정하기 ////
// (1-1) html에 부드러운 스크롤 적용하기
myFn.qs("html").style.scrollBehavior = "smooth";

// (1-2) body에 오버플로우 히든설정
// myFn.qs('body').style.overflow = 'hidden';

// 2. 전역변수 설정하기 ////////////
// (2-1) 페이지변수
let pgNum = 0;
// (2-2) 휠상태변수 (광휠 금지상태:true막기,false허용)
let stsWheel = false;
// (2-3) 각 페이지요소 수집 (.page인 요소들)
const pageEl = myFn.qsa(".page");
// (2-4) 전체 페이지수 상수
const TOTAL_PAGE = pageEl.length;

// console.log(pageEl,TOTAL_PAGE)

// 3. 이벤트 등록하기 //////////
// 대상 : window
// - 전체 페이지 휠 이벤트 대상은 window다!
// 이벤트 종류 : wheel
// myFn.addEvt(window,'wheel',wheelFn)
window.addEventListener("wheel", wheelFn, { passive: false });

// 4. 함수만들기
function wheelFn(e) {
  console.log("hi");

  // (4-1) 기본기능 막기
  e.preventDefault();

  // (4-2) 광휠 막기
  if (stsWheel) return;
  stsWheel = true;
  setTimeout(() => {
    stsWheel = false;
  }, 600);

  // (4-3) 휠방향 알아내기
  // -> 델타값으로 알아낸다
  // 방향 : 마이너스(아랫쪽), 플러스(왼쪽)
  // console.log(e.wheelDelta)
  let delta = e.wheelDelta;

  // (4-4) 방향 분기하여 전역 페이지 변수 증감하기
  if (delta < 0) pgNum++;
  else pgNum--;

  // (4-5) 한계값 체크 (0과 페이지 끝번호 기준)
  if (pgNum < 0) pgNum = 0;
  else if (pgNum > TOTAL_PAGE - 1) pgNum = TOTAL_PAGE - 1;
  console.log("페이지넘버", pgNum);

  // (4-6) 페이지 이동하기
  // 이동원리 : scrollTo(x축위치값, y축위치값) 사용이동
  // x축은 0(이동없음), y축은 해당 순번의 .page박스 위치값 넣음
  // pageEl[pgNum].offsetTop
  // ->페이지요소들[순번].위에서부터위치값
  window.scrollTo(0, pageEl[pgNum].offsetTop);
}

/******************************************************* 
    [ window / document / body 세가지는
    기본막기불가 설정되어있음! ]
    -> 이벤트 등록시 패지스모드가 true로 설정됨
    셋팅방법:
    요소.addEventListener(이벤트명,함수,{passive:true})
    -> 기존엔  passive:false 였는데 이것의
    기본값이 true로 변경됨. 의미는 기본기능막기
    못하게 설정됨!

    우리가 변경하여 사용해야함!
    요소.addEventListener(이벤트명,함수,{passive:false})
*******************************************************/

// 5. 메뉴클릭시 이동 추가기능 구현하기 /////
// (5-1) 대상선정 : .gnb a
const gnb = myFn.qsa(".gnb a");

// (5-2) 이벤트 설정
// forEach(값/요소,순번,리스트전체)
gnb.forEach((el, idx, list) => {
  //el-요소, idx-순번

  myFn.addEvt(el, "click", (evt) => movePage(evt, el, idx, list));
  //   myFn.addEvt(el, "click", movePage); -->직접연결
  //   myFn.addEvt(el, "click", (evt) => movePage(evt, idx)); -->호출되는 일반함수
}); ////forEach //////

// (5-3) 함수만들기
function movePage(evt, el, idx, list) {
  // evt - 직접전달변수
  // (함수와 직접연결된 경우 자동 전달됨)
  // (그러나 호출되는 일반함수일 경우 전달해야함)
  // el - 전달된 개별요소(this대신 사용함!)
  // idx - 요소의 순번 전달
  //   list - 전체컬렉션 객체
  console.log("evt:", evt, "el:", el, "/idx:", idx, "/nlist", list);
  // 1) 기본이동 막기
  evt.preventDefault();

  // 2) 클릭된 a요소의 href값 일어오기(이동할 아이디)
  // -> 요소 속성값 가져오기 : getAttribute(속성명)
  let tgId = el.getAttribute("href");
  //   this대신 전달된 요소자신인 el을 사용함!

  // 3) 이동할 페이지 위치값 구하기
  let pgPos = myFn.qs(tgId).offsetTop;

  // 4) 페이지 이동하기
  window.scrollTo(0, pgPos);

  // 5) 이동한 페이지 전역변수 업데이트하기
  pgNum = idx;
  // 메뉴 a요소의 순번을 전역페이지수에 넣어준다!
  // 결과로 휠이동시 순번이 일치하게됨
  console.log("ggg", this, tgId, pgPos);

  // 6) a요소 컬렉션을 순회하며 해당순번과 같으면
  // 클래스 on넣고 아니면 제거
  // 전달변수 list로 전체 컬렉션이 들어왔으므로
  // 이것을 활용!!
  list.forEach((el2, idx2) => {
    // 해당요소는 a이므로 부모인 li로 올라가서 클래서를 줘야함
    if (idx2 == idx) //해당순번과 같은경우 on넣기
        el2.parentElement.classList.add("on");
    else // 기타인경우 on제거하기
        el2.parentElement.classList.remove("on");
  });
}

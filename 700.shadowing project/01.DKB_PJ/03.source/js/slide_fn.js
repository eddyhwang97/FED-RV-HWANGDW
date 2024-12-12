// 메인배너 슬라이드 기능 함수 - slide_fn.js

import myFn from "./my_function.js";

// 슬라이드 기능함수 export 하기
export default function slideFn() {
  // 1. 대상선정 //////////////////
  // (1) 전체 슬라이드 박스 : .slide-box
  const slideBox = myFn.qs(
    ".slide-box"
  );
  // 전체 박스 하위의 요소로 상대적으로 잡아준다!
  // 이유는 다른 슬라이드 박스를 카피하여 만든경우
  // 동일한 기능이 될 수 있게 해준다!

  // (2) 이벤트대상: .abtn
  const abtn = myFn.qsaEl(
    slideBox,
    ".abtn"
  );

  // (3) 변경대상: .slide
  const slide = myFn.qsEl(
    slideBox,
    ".slide"
  );
  // (4) 최초슬라이드 li 수집
  const firstSlide = myFn.qsaEl(
    slide,
    "li"
  );

  // (5) 인디케이터 블릿대상
  const indic = myFn.qsaEl(
    slideBox,
    ".indic li"
  );
  console.log(
    "대상:",
    abtn,
    slide,
    indic
  );

  firstSlide.forEach((el, idx) => {
    // 속성셋팅은 setAttribute(속성명,값)
    el.setAttribute("data-seq", idx);
  }); ///forEach ////

  // 슬라이드 개수 변수할당!
  // 보통 변경없이 사용하는 변수는 상수라고 하고
  // 상수는 보통 대문자로 쓰고 스네이크 케이스 사용함!
  const SLIDE_CNT = myFn.qsaEl(
    slide,
    "li"
  ).length;
  console.log(
    "슬라이드개수:",
    SLIDE_CNT
  );

  // console.log("대상:",slideBox,abtn,slide);

  // 2. 이벤트 설정하기 ////////////////////
  abtn.forEach((el) => {
    // console.log('요소:',el);
    // 각 요소에 이벤트 설정하기
    // click이벤트를 addEventListener로 설정!
    myFn.addEvt(el, "click", goSlide);
  }); //////////// forEach ////////////////

  // 광클금지 상태변수
  let stsClick = false;

  // 슬라이드 애니시간 상수
  const TIME_ANI = 600;

  // 3. 함수만들기 /////////////////////
  function goSlide() {
    // 광클금지 설정 /////
    if (stsClick) return; //함수를 나가
    stsClick = true; //문잠금!
    setTimeout(() => {
      stsClick = false; //잠금해제
    }, TIME_ANI);
    ////////////////

    // 1. 함수호출확인
    // console.log('나함수!',this);

    // 2. 오른쪽버튼여부 확인
    // 2. 오른쪽버튼여부 확인(기본값 true할당)
  let isRight = true;

  // 만약 this.classList가 undefined가 아니면
  // 클래스 오른쪽 여부를 판단한다.
  if (this.classList)
    isRight =
      this.classList.contains("ab2");
  // 일반적으로 버튼을 클릭하지 않고 호출하면
  // 윈도우객체가 this로 잡히므로
  // classList객체가 없어서
  // undefined로 나오고
  // 하위클레스인 contains()가 없으므로
  // 에러메세지가 나온다
  // 따라서 이런 경우를 대비하여 기본값으로 isRight변수에 true를 주고
  // 직접호출시 오른쪽으로 이동하게 해준다.
  // 만약 버튼을 클릭하면 if문에서 걸러주므로
  // 실제버튼 클레스 존재여부를 판단하여 오른쪽/왼쪽 이동버튼 분기가 작동된다.


    // 3. 현재 변경된 li수집용 변수
    let list = myFn.qsaEl(slide, "li");
    // 3. 분기하여 슬라이드 이동하기
    // (1) 오른쪽버튼 클릭시
    if (isRight) {
      // [1] translate X축 방향 -100% 이동
      slide.style.translate = "-100%";
      slide.style.transition =
        TIME_ANI + "ms ease-in-out";

      // [슬라이드 이동 후 실행해야함]
      setTimeout(() => {
        // [2] 맨앞 li선택하여 맨뒤로 이동하기
        // 슬라이드.appandChild(맨앞li)
        slide.appendChild(
          myFn.qsaEl(slide, "li")[0]
        );
        // [3] 이때 translate값 0으로 초기화함!
        slide.style.translate = "0";
        // [4] 초기화할 경우 트랜지션 없애기
        slide.style.transition = "none";
      }, TIME_ANI);
    } /// if ///
    // (2) 왼쪽버튼 클릭시 : 오른쪽으로 이동
    else {
      // [1] 맨뒤 li 맨앞으로 이동하기
      slide.insertBefore(
        list[list.length - 1],
        list[0]
      );
      // 슬라이드.insertbefore(맨뒤li,맨앞li)
      // 맨뒤 li순번은 (개수-1)임

      // [2] 이때 슬라이드 translate값을 -100%로 설정
      slide.style.translate = "-100%";
      slide.style.transition = "none";
      // 코드 실행순서를 분리하여 비동기처리하면
      // 위의 변경사항과 같은 변경이 시카를 두고 실행됨!
      // 큐에서 대기하고 스택에서 실행됨!
      setTimeout(() => {
        // [3] translate 값을 0으로 변경하여 들어오기
        slide.style.translate = "0";
        // [4] 이때 트랜지션 애니메이션 설ㅈ어
        slide.style.transition =
          TIME_ANI + "ms ease-in-out";
      }, 0);
    } /// else ///

    //   명령어 코드는 콜스택(Call Stack)에서 실행된다
    //   console.log("1");
    //   타임아웃 메서든느 태스크 큐(Task Queue)에 대기하다가 콜스택의
    // 명령어가 모두 실행 후 큐에 쌓인 명령어를 스택으로 옮겨서 순서대로 확인한다.
    //   setTimeout(() => console.log("2"), 0);
    //   console.log("3");
    //   console.log("4");

    //   위에서 변경된 li를 다시 읽어들인다!
    list = myFn.qsaEl(slide, "li");

    // (1) 슬라이드 data-seq값과 일치하는
    // 순번li에 클래스 "on"넣기
    // 이때 오른쪽버튼은 1번, 왼쪽버튼은 0번째 li의
    // data-seq값을 읽어온다.
    let num =
      list[
        isRight ? 1 : 0
      ].getAttribute("data-seq");
    console.log(
      "num:",
      num,
      typeof num
    );
    // 속성값은 문자형이므로 비교시 === 형까지 비교할 경우
    // 반드시 숫자형으로 변환해야 한다.! Number(문자형숫자)

    // 4. 인디케이터 변경하기 : 대상 .indic li
    //   ->seqNum값 즉, 슬라이드 순번과
    //   인디케이터 li순번이 같으므로
    //   해당순번의 li에 클래스 on을 넣고
    //   나머지는 on을 제거한다.
    indic.forEach((el, idx) => {
      // console.log(el, idx, typeof idx);

      if (idx === Number(num)) {
        el.classList.add("on");
      }
      // (2) 나머지 li는 "on" 지우기
      else {
        el.classList.remove("on");
      } ///else ///
    }); ///forEach ///
    /******************************************
         인터벌 호출 설정하기
******************************************/
// 인터벌 및 타임아웃 지우기 위해 변수에 할당한다.
let autoI, autoT;
// 인터벌 함수 최초 호출
autoSlide();

// [1] 인터벌 설정함수////
function autoSlide() {
  autoI = setInterval(goSlide, 2000);
} ///////autoSlide 함수//////////

// [2] 인터벌 지우기 함수////
// ->버튼 직접 조작시 호출함!
function clearAuto() {
  // (1) 인터벌 지우기
  clearInterval(autoI);
  // (2) 타임아웃 지우기(실행 쓰나미 방지)
  clearTimeout(autoT);
  // (3) 일정시간 후 인터벌 재호출
  autoT = setTimeout(autoSlide,5000);
} ////clearAuto 함수 ////////

  } ////////// goSlide함수 /////////////
} ///////slideFn 함수 //////////


// 쇼핑몰 배너 JS - 01.가로방향 배너 슬라이드 //

// 나의함수 불러오기
import myFn from "./my_function.js";
/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(.slide)
    4. 기능 설계:

        (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 left값을
            -100%로 변경시킨다.
            

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 left값을
            -100%로 변경한다.
            
        
        (3) 이동 중 첫번째 슬라이드는 왼쪽이동버튼 숨기기
            마지막 슬라이드는 오른쪽 이동버튼 숨기기함

        (3) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/

// 전역변수 구역 //////////
// (1) 순번 변수
let seqNum = 0;

// 초기테스트
// 오른쪽버튼 클릭시 ul.slide의 css를 변경하여 왼쪽으로 이동

// 1. 대상선정 //////////////////
// 전체 슬라이드 박스 : .slide-box
const slideBox = myFn.qs('.slide-box');
// 전체박스 하위의 요소로 상대적으로 잡아준다
// 이유는 다른 슬라이드 박스를 카피하여 만든 경우
// 동일한 기능이 될 수 있게 해준다
// 이벤트대상: .abtn
const abtn = myFn.qsaEl(slideBox,'.abtn');
// 변경대상: .slide
const slide = myFn.qsEl(slideBox,'.slide');

// console.log("대상: ",slideBox,abtn,slide);

// 이벤트 설정하기
abtn.forEach(el=>{
    // console.log("요소: ",el)
    // 각 요소에 이벤트 설정하기
    // click 이벤트를 addEventListener로 설정
    myFn.addEvt(el,'click',goSlide);
});
function goSlide(){
    console.log("나함수",this);

    // 2. 오른쪽 버튼 여부 확인
    let isRight = this.classList.contains('ab2');
    // classList.contains(클래스명) -> 클래스 있으면 true

    // 3. 분기하여 슬라이드 순번 변수 증감하기
    // (1) 오른쪽일때 증가
    if(isRight){
        seqNum++;
    }
    else{
        seqNum--;
    }
};

myFn.qs(".ab2").onclick = () => {
  // console.log("hi");
  // 순번1증가
  seqNum++;
  // 슬라이드 css변경하기
  slide.style.translate =
    seqNum * -100 + "%";
  slide.style.transition =
    ".4s ease-in-out";
};

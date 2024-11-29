// 나의 함수 객체 ///////
const myFn = {
    // 요소 선택함수
    qs: x => document.querySelector(x),
    qs: (el,x) => el.querySelector(x),
    qsa: x => document.querySelectorAll(x),
    qsa: (el,e) => el.querySelectorAll(x),

    // 이벤트 셋팅 함수
    addEvt : (el,evt,fn) => el.addEventListener(evt, fn),

};///// mtFn 객체 /////

// import해서 사용할 파일 이므로 객체를 내보내야함!
export default myFn;
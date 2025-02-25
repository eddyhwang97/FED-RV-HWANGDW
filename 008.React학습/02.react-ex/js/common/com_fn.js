// 공통 처리 JS - com_fn.js

// [ 1. 세자리마다 콤마 함수 ] ///
const addCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}; /////addCommas //////////////////////////////////////////////////////////////////

// [ 2. 초이스 인트로 애니 함수 ] ///
const choiceIntroAni = () => {
  // 공유/효진 으로 선택 변경시에만 실행 : useEffect(함수,[selItem])
  // 아이템 변경은 selItem 상태변수에 연관되어 있음!
  // 이변수를  의존성에 등록해준다!!

  // (1) 타이틀 확대/축소 해니
  $(".tit span").css({ display: "inline-block" }).animate({ scale: "200%" }, 1000).animate({ scale: "100%" }, 1000);
  // (2) 타이틀 확대/축소 해니
  // (3) 타이틀 확대/축소 해니
}; /////choiceIntroAni //////////////////////////////////////////////////////////////////
// [ 3. 로고 애니 함수 ] ///
const logoAni = () => {
  // 로고 최초 한번만 애니하기 - useEffect(함수,[])
  $("#logo").animate({ scale: "200%", rotate: "360deg" }, 1000).animate({ scale: "100%", rotate: "0deg" }, 1000);
}; /////logoAni //////////////////////////////////////////////////////////////////
// [ 4. 셋팅초기화 함수 ] ///
const initFn = () => {
    // 초기화는 화면 랜더링 전에 해주는 것이 좋다
    // useLayoutEffect() 에서 호출해주자!
    // 의존성은 setItem으로 설정
    $('.img-box img, .stit').css({opasity: "0"})
}; /////initFn //////////////////////////////////////////////////////////////////

export { addCommas, logoAni, choiceIntroAni, initFn };

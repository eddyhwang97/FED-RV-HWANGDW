// MPA용 화면 전환효과


  // 가림막 요소 넣기
  // ->로딩시 화면이 늦게 나타나느 현장이 생기므로 
  // html과 css원본에 셋팅하는것이 해결책이 된다.
  // $("body").append(
  //   '<div class="pg-cover"></div>'
  // );

  // 1. 가림막요소 변수할당
  const $pgCover = $(".pg-cover");

  // 2. 최초화면 셋팅 및 애니설정
  // $pgCover.css({height:'100vh'}); -> css에서 미리해줌!
  $pgCover.animate(
    { height: "0", top: "100%" },
    800,
    "easeInOutExpo",
    function () {
      // 애니 후 css 초기화
      $(this).css({ top: "0" });
    }
  ); ///animate


  
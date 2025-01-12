// 도깨비PJ - 링크시스템 JS - linksys.js

export default function linksysFn() {
  $(".gnb a , .top-menu a, .spart-menu a").click(function () {
    // (1) 링크텍스트 읽어오기
    let txt = $(this).text().trim();
    // trim()앞뒤공백제거
    console.log(txt);

    // 전달변수
    let pm = "etc";

    // (2) 페이지분기하기
    switch (txt) {
      case "로그인":
        pm = "login";
        break;
      case "회원가입":
        pm = "join";
        break;
      case "인물 관계도":
        pm = "cat";
        break;
    }

    // (3) 페이지 이동 : 값이 'etc'가 아닌경우에만 이동
    if (pm !== "etc") {
      location.href = "./content.html?page=" + pm;
    } else {
      alert("로그인/회원가입/인물관계도 만 서버오픈!");
    }
  });

//   로고클릭스 홈으로!
$('.logo a').click(()=>location.href = "./index.html")
}

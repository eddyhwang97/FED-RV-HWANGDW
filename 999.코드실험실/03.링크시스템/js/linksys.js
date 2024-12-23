// 링크시스템 JS

// GNB메뉴 a링크 처리하기
// 대상:.gnb a
$('.gnb a').click(function(e){
    e.preventDefault();

    let txt = $(this).text();

    // 분기문
    let url;
    switch(txt){
        case 'HOME':url = 'index';break
        case 'WORK':url = 'sub1';break
        case 'CONTACT':url = 'sub2';break


    }
    // 페이지 이동하기
    // 같은 시스템은 같은 창에서 이동함
    // location.href = 이동할 주소
    // 전환효과 때문에 지연시간 셋팅함!
    setTimeout(() => {
        location.href = `./${url}.html`;
    }, 800);

})

// 링크시스템네서 0.8s 초 지연 후 이동셋팅 했으므로 
// 여기에서 0.8초간 화면가림막 요소 내려오게 애니함
// 즉, .gnb a 클릭시
$('.gnb a').click(()=>{
    // 이동클릭시 가림막 내려오기 애니
    $pgCover.animate({
        height: '100vh'
    },800,"easeInOutExpo")
}); ///click
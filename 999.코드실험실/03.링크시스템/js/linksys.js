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
    location.href = `./${url}.html`;

})
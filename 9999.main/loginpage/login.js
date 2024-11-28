
/* user strict */
'user strict';

const loginId = document.getElementById('LOGIN-ID');
const loginPw = document.getElementById('LOGIN-PW');
const loginBtn = document.getElementById('LOGIN-BTN');

loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const id = loginId.id.value;
    const password = loginPw.password.value;

    if (id === "hdw" && password === "1230"){
        alert("로그인 되었습니다.");
        location.reload(eddyarch.html);
    } else {
        alert("다시 시도하세요.");
    }
});
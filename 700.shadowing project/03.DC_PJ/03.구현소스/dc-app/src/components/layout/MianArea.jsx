/// 메인영역 컴포넌트 : MainArea.jsx

import { Outlet } from "react-router-dom";
// Outlet 컴포넌트는 리액트라이터에서 컴포넌트를 
// 변경하여 출력한느 자리를 잡아주느 역할을 함

export default function MainArea(){
    return(
       <main className="cont">
        <Outlet/>
       </main>
    );

} // MainArea 컴포넌트 //////////////////////////////////////////////////////////////////

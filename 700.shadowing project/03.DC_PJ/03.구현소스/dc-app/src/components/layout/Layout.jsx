/// 레이아웃 컴포넌트 : Layout.jsx

import FooterArea from "./FooterArea";
import MainArea from "./MianArea";
import TopArea from "./TopArea";


export default function Layout(){
    return(
        <>
            <TopArea/>
            <MainArea/>
            <FooterArea/>
        </>
    );

} // Layout 컴포넌트 //////////////////////////////////////////////////////////////////

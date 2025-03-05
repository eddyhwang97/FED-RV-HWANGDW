import React, { useEffect } from "react";
import Banner from "../modules/Banner";
import CatList from "../modules/CatList";

import "../../css/pages/cat_detail.scss";
import { useLocation } from "react-router-dom";

function CatDetail() {
  // 라우터 호출시 전달한 값을  useLocation으로 받는다!
  // 이름의 변수로 구조분해 할당 방식을 받는다!
  const { state } = useLocation();
  // state객체의 같은 이름의 속성명으로 구조분해 할당한다!
  const { cname, cdesc, facts } = state;
  // console.log(cname, cdesc, facts )
  // 전달된 변수

//   라우터 경로 변경 없어도 위로 이동하기
useEffect(()=>{
    window.scrollTo(0, 0); 
},[state])

  // 리턴 코드구역
  return (
    <>
      {/* 1. 배너모듈 */}
      <Banner catName={cname} />
      {/* 2. 상세정보박스 */}
      <div className="detail">
        {/* 2-1 캐릭터 설명박스 */}
        <div className="desc-box">
          <h2>{cname}</h2>
          <div className="cdesc">
            {
              // desc의 데이터의 '^'로 잘라서 p요소 할당
              cdesc.split("^").map((v, i) => (
                <p key={i}>{v}</p>
              ))
            }
          </div>
        </div>
        {/* 2-2 캐릭터명세 */}
        <div className="facts">
          <div>
            <h3>CHARACTER FACTS</h3>
            <table>
              <tbody>
                {facts.split("^").map((v, i) => (
                  <tr key={i}>
                    {/*  ':'으로 잘라서 타이틀 내용*/}
                    <td>{v.split(":")[0]} : </td>
                    <td>{v.split(":")[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* 3. 캐릭터 리스트 모듈 */}
      <CatList />
    </>
  );
}

export default CatDetail;

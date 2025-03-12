import React from "react";

function Read({ setMode,selRecord }) {
    // setMode - 모드 변경 상태변수 setter
    // selRecor - 선택데이터 참조변수
    
    // 선택된 참조변수 데이터 넣기
    const selData = selRecord.current;
  return (
    <main className="cont">
      <h1 className="tit">OPINION</h1>
      <table className="dtblview readone">
        <caption>OPINION : Read</caption>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input type="text" className="name" size="20"  value={selData.unm}/>
            </td>
          </tr>
          <tr>
            <td>Title</td>
            <td>
              <input type="text" className="subject" size="60" value={selData.tit}/>
            </td>
          </tr>
          <tr>
            <td>Content</td>
            <td>
              <textarea className="content" cols="60" rows="10" readOnly="" value={selData.cont}>
               
              </textarea>
            </td>
          </tr>
          <tr>
            <td>Attachment</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <br />
      <table className="dtbl btngrp">
        <tbody>
          <tr>
            <td>
              <button>List</button>
              <button>Modify</button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default Read;

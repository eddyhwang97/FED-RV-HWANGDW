import React from "react";

function Write({setMode}) {
  return (
    <main className="cont">
      <h1 className="tit">OPINION</h1>
      <table className="dtblview readone">
        <caption>OPINION : Read</caption>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input type="text" className="name" size="20" readonly="" value="Tom" />
            </td>
          </tr>
          <tr>
            <td>Title</td>
            <td>
              <input type="text" className="subject" size="60" readonly="" value="오늘나는 좋아~!" />
            </td>
          </tr>
          <tr>
            <td>Content</td>
            <td>
              <textarea className="content" cols="60" rows="10" readonly="">
                너는 누구니? 난 좋아~! ㅎㅎㅎㅎㅎ
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
      <table class="dtbl btngrp">
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

export default Write;

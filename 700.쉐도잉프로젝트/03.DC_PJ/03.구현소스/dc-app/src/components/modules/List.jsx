import React from "react";

function List({ selData, setMode, selRecord }) {
  return (
    // selData
    // setMode
    // selRecord
    <main className="cont">
      <h1 className="tit">OPINION</h1>
      <div className="selbx">
        <select name="cta" id="cta" className="cta">
          <option value="tit">Title</option>
          <option value="cont">Contents</option>
          <option value="unm">Writer</option>
        </select>
        <select name="sel" id="sel" className="sel">
          <option value="0">Descending</option>
          <option value="1">Ascending</option>
        </select>
        <input id="stxt" type="text" maxLength="50" />
        <button className="sbtn">Search</button>
        <select name="sort_cta" id="sort_cta" className="sort_cta">
          <option value="idx">Recent</option>
          <option value="tit">Title</option>
        </select>
      </div>
      <table className="dtbl" id="board">
        <thead>
          <tr>
            <th>Number</th>
            <th>Title</th>
            <th>Writer</th>
            <th>Date</th>
            <th>Hits</th>
          </tr>
        </thead>
        <tbody>
          {selData.map((v, i) => (
            <tr key={v.idx}>
              <td>{i + 1}</td>
              <td>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setMode('R');
                    selRecord.current = v;
                  }}
                >
                  {v.tit}
                </a>
              </td>
              <td>{v.unm}</td>
              <td>{v.date}</td>
              <td>{v.cnt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <table className="dtbl btngrp">
        <tbody>
          <tr>
            <td>
              <button>Write</button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default List;

import React from "react";
import "./Project.css";

function Project() {
  return (
    <div className="projct">
      <h3 className="projct_h3">Projects</h3>
      <div className="projct_flex">
      <a href="https://musicappbypanditutkarsh.netlify.app/"><div id="projct_1" className="projct_card"><img src="" alt="" /></div></a>
      <div id="projct_2" className="projct_card"><a href="https://random-quotes-generator-pandit-utkarsh.netlify.app/"><img src="" alt="" /></a></div>
      <div id="projct_3" className="projct_card"><a href="https://just-book-utkarsh.netlify.app/"><img src="" alt="" /></a></div>
      <div id="projct_4" className="projct_card"><a href=""><img src="" alt="" /></a></div>
      </div>
    </div>
  );
}

export default Project;

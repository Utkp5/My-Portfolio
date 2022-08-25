import React from "react";
import "./Project.css";

function Project() {
  return (
    <div className="projct">
      <h3 id="Projects" className="projct_h3">Projects</h3>
      <div className="projct_flex">
      <a target="_blank" className="projects_a" href="https://musicappbypanditutkarsh.netlify.app/"><div id="projct_1" className="projct_card"></div><p id="music_plyr_p">Music player</p></a>
      <a target="_blank" className="projects_a" href="https://random-quotes-generator-pandit-utkarsh.netlify.app/"><div id="projct_2" className="projct_card"></div><p id="music_plyr_p">Random Quotes </p></a>
      <a target="_blank" className="projects_a" href="https://just-book-utkarsh.netlify.app/"><div id="projct_3" className="projct_card"></div><p id="music_plyr_p">Movie Booking</p></a>
      </div>
    </div>
  );
}

export default Project;

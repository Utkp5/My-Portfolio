import React from "react";
import "./Project.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Project() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <div className="projct">
      <h3 id="Projects" className="projct_h3" data-aos="fade-down" data-aos-duration="400">Projects</h3>
      <div className="projct_flex">
      <a target="_blank" className="projects_a" href="https://musicappbypanditutkarsh.netlify.app/"><div id="projct_1" className="projct_card" data-aos="fade-right" data-aos-duration="600"></div><p id="music_plyr_p">Music player</p></a>
      <a target="_blank" className="projects_a" href="https://random-quotes-generator-pandit-utkarsh.netlify.app/"><div id="projct_2" className="projct_card" data-aos="zoom-in-down" data-aos-duration="600"></div><p id="music_plyr_p">Random Quotes </p></a>
      <a target="_blank" className="projects_a" href="https://just-book-utkarsh.netlify.app/"><div id="projct_3" className="projct_card" data-aos="fade-left" data-aos-duration="600"></div><p id="music_plyr_p">Movie Booking</p></a>
      </div>
    </div>
  );
}

export default Project;

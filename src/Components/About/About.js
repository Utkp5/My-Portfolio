import React from "react";
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import my_img from "../../images/my_img.jpg";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    AOS.init();
  })
  return (
      <div id="About" className="about_main" data-aos="fade-down" data-aos-duration="400">
        <h2 className="about_h2">About</h2>
        <div className="about_container">
          <img src={my_img} className="my_img" alt="my Image"  data-aos="fade-right" data-aos-duration="1500" />
          <div className="about_content" data-aos="fade-left" data-aos-duration="1500">
            Hey , I'm Utkarsh . I am Basically from Delhi, India and my HomeTown
            is in Patna Bihar I am in learning phase of my web development
            Carrer with a focus on MERN Stack and I love to play with codes and
            Create awesome websites. I started My journey in Web development
            almost in the starting of 2022 and now I fell in love with it. I
            have a deep passion for coding and to explore and learn new things
            until i find its end point. I'm adoptable according to situation and
            trust worthy person. I feel very lucky that now my work is my hobby
            which i can enjoy.
          </div>
        </div>
      </div>
  );
}

export default About;

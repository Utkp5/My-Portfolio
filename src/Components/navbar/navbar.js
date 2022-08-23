import React from "react";
import './navbar.css'
import logoo from '../../images/logo.png';

function Navbar() {
  return (
    <div>

      <div className="navbar">
        <div><img className="logo" src={logoo} alt="" /></div>
        <div className="navbar_elements">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Achievements</a>
          <a href="">Contact</a>
          <button className="navbar_button">Download CV</button>
        </div>
      </div>
      
    </div>
  );
}

export default Navbar;

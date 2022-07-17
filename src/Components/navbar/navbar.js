import React from "react";
import './navbar.css'

function Navbar() {
  return (
    <div>

      <div className="navbar">
        <div><img className="logo" src="https://o.remove.bg/downloads/adf59ab7-7cad-475c-980f-b86be2845d2a/images-removebg-preview.png" alt="" /></div>
        <div className="navbar_elements">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Achievemnet</a>
          <a href="">Contact</a>
          <button className="navbar_button">Download CV</button>
        </div>
      </div>

    </div>
  );
}

export default Navbar;

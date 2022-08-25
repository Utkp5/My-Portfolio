import { useState, React } from "react";
import "./navbar.css";
import logoo from "../../images/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";

function Navbar() {
  const [menu,setmenu] = useState(false);
  return (
    <div>
      <div className="navbar">
        <div><img className="logo" src={logoo} alt="" /></div>
          <ul className={menu ? "navbar_mobile_css" : "navbar_ul"}>
            <li className="navbar_li animation_li">
              <a href="#Home">Home</a>
            </li>
            <li className="navbar_li animation_li">
              <a href="#About">About</a>
            </li>
            <li className="navbar_li animation_li">
              <a href="#Achievements">Achievements</a>
            </li>
            <li className="navbar_li animation_li">
              <a href="#Skill">Skill</a>
            </li> 
            <li className="navbar_li animation_li">
              <a href="#Projects">Projects</a>
            </li>
            <li className="navbar_li animation_li">
              <a href="#Contact">Contact</a>
            </li>
            <li className="navbar_li"><a target="_blank" href="https://drive.google.com/file/d/1qyOZEaM_B9aSHjV-6zPvlCz7uCje5PCI/view?usp=sharing"><button className="navbar_button">Download CV</button></a></li>
            </ul>
            <div className="menu_icon" onClick={() => setmenu(!menu)}>
            {menu ? <HiOutlineX size={36}/>  : <HiMenuAlt3 size={36}/>}
            </div>
      </div>
    </div>
  );
}

export default Navbar;

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
              <a href="">Home</a>
            </li>
            <li className="navbar_li animation_li">
              <a href="">About</a>
            </li>
            <li className="navbar_li animation_li">
              <a href="">Achievements</a>
            </li>
            <li className="navbar_li animation_li">
              <a href="">Skill</a>
            </li>
            <li className="navbar_li animation_li">
              <a href="">Projects</a>
            </li>
            <li className="navbar_li animation_li">
              <a href="">Contact</a>
            </li>
            <li className="navbar_li"><button className="navbar_button">Download CV</button></li>
            </ul>
            <div className="menu_icon" onClick={() => setmenu(!menu)}>
            {menu ? <HiOutlineX size={36}/>  : <HiMenuAlt3 size={36}/>}
            </div>
      </div>
    </div>
  );
}

export default Navbar;

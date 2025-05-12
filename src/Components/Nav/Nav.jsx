import React, { useState } from "react";
import "./Nav.css";
import logo from "../../assets/logo.jpg"
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { PiFarm } from "react-icons/pi";
// import { MdOutLinePool } from "react-icons/md";
import { LuTentTree } from "react-icons/lu";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaTreeCity } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
import { MdOutlineLogin } from "react-icons/md";

const Nav = () => {
  let [visible, setVisible] = useState(false);
  return (
    <div className="nav">
      {/* <!------------------------------------ Nav-One -----------------------------------> */}
      <div className="nav-one">
       <Link to={""}> <div className="logo">
          <img src={logo} alt="" width="50px" height="30px" />
          <h1>
            <i>Laali Properties</i>
          </h1>
        </div>
       </Link>
        <div className="search">
          <input type="text" placeholder="Search Destination" />
          <button>
            <CiSearch />
            <span id="brbtn">Search</span>
          </button>
        </div>
        <div className="ham">
        <Link to={"/Listing"}><button id="btn1">List Your Home</button></Link>
          <button
            id="btn2"
            onClick={() => {
              setVisible((prev) => !prev);
            }}
          >
            <GiHamburgerMenu id="user"/> <FaCircleUser  />
          </button>
        </div>
        {visible ? (
          <div className="hamburger">
           <Link to={"/Login"}> <div className="ham1">Login<MdOutlineLogout /></div> </Link>
           <Link to={"/Signup"}> <div className="ham1">SignUp<MdOutlineLogin /></div> </Link>
           <Link to={"/Listing"}> <div className="ham1">List Your Home</div></Link>
           <Link to={"/Contact"}> <div className="ham1">Help Center</div></Link>
          </div>
        ) : (
          <></>
        )}
      </div>

      {/* <!------------------------------------ Nav-Two -----------------------------------> */}

      <div className="nav-two">
      <NavLink to={"/"} > <div className="categories"><MdOutlineWhatshot /><h3>Trending</h3></div></NavLink>
        <NavLink to={"/Houses"} > <div className="categories"><GiFamilyHouse /><h3>Houses</h3></div> </NavLink>
        <NavLink to={"/Rooms"} ><div className="categories"><MdBedroomParent /><h3>Rooms</h3></div></NavLink>
        <NavLink to={"/Farm"} ><div className="categories"><PiFarm /><h3>Farm Houses</h3></div></NavLink>
         <NavLink to={"/Pool"} > <div className="categories"><LuTentTree /><h3>Pool Houses</h3></div></NavLink>
         <NavLink to={"/Tent"} ><div className="categories"><LuTentTree /><h3>Tent Houses</h3></div></NavLink>
         <NavLink to={"/Cabin"} > <div className="categories"><GiWoodCabin /><h3>Cabins</h3></div></NavLink>
         <NavLink to={"/Shop"} > <div className="categories"><SiHomeassistantcommunitystore /><h3>Shops</h3></div></NavLink>
         <NavLink to={"/Forest"} > <div className="categories"><FaTreeCity /><h3>Forest Houses</h3></div></NavLink>
      </div>
    </div>
  );
};

export default Nav;

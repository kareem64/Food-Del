/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContextProvider";
const Navbar = ({ setshowLogin }) => {
  const { token, setToken, setCartItems, getTotalItems,username } = useContext(StoreContext);
  const [menu, setMenu] = useState("home");
const navigate = useNavigate()
  //function LOg Out
  const LogOut =()=>{
    localStorage.removeItem("token")
    setToken("")
    setCartItems({})
navigate('/')
  }
  return (
    <div className="nav-bar">
      <Link to={"/"}>
        <img className="logo" src={assets.logo} alt="logo" />
      </Link>
      <ul className="menu">
        <Link to={"/"}>
          <li
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}>
            Home
          </li>
        </Link>
        <a href="#explore-menu">
          <li
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}>
            Menu
          </li>
        </a>
        <a href="#app-download">
          <li
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}>
            Mobile-app
          </li>
        </a>
        <a href="#footer">
          <li
            onClick={() => setMenu("contact")}
            className={menu === "contact" ? "active" : ""}>
            contact
          </li>
        </a>
      </ul>

      <div className="left-icons">
        <img className="search" src={assets.search_icon} alt="search" />
        <div className="cart">
          <Link to={"/cart"}>
            <img src={assets.basket_icon} alt="" />
          </Link>
          <span>{getTotalItems()}</span>
        </div>
        {!token ? (
          <button onClick={() => setshowLogin(true)}>sign in</button>
        ) : (
          <div className="navbar-profile">
            <div className="profile-name">
              <img src={assets.profile_icon} alt="icon" />
              {`welcome|${username}`}
              <p>▼</p>
            </div>

            <ul className="nav-profile-down">
              <li>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr/>
              <li onClick={()=>LogOut()}>
                <img src={assets.logout_icon} alt="" />
                <p>Log Out</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

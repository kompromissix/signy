import { Link } from "react-router-dom";
import React from "react";
import './header.scss';
import logo from './Header_assets/Group7.png'; 

import svg from './Header_assets/Vector36.png'

function Header() {
  

  return (
    <nav className="navbar">
      <div className="container">
        <div className="left">
          <Link to="/Str7" className="logo">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="center">
          <div className="links">
            <a href="" >0 800 750 643 <span><img src={svg}/></span></a>
            <Link to="/Str1"><a href="" >ПРО НАС<span><img src={svg}/></span></a></Link>
            <Link to="/Str2"><a href="" >ЦЕНЫ</a></Link>
            <Link to="/Str3"><a href="" >КОНТАКТЫ</a></Link>
          </div>
        </div>
        <div className="right">
          <button className="login">ВХОД</button>
          <button className="register">РЕГИСТРАЦИЯ</button>
          <a href="">РУС<span><img src={svg}/></span></a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
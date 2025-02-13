import { Link } from "react-router-dom";
import React from 'react';
import './header.scss';
import logo from './Header_assets/Group7.png'; 

function Header() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="" className="logo">
          <img src={logo} alt="" />
        </a>

        <div className="menu">
          <div className="phone">
            <p>0 800 750 643</p>
          </div>
          <div className="links">
            <Link to="/Str1"><a href="" >ПРО НАС</a></Link>
            <Link to="/Str2"><a href="" >ЦЕНЫ</a></Link>
            <a href="" >КОНТАКТЫ</a>
          </div>
        </div>

        <div className="actions">
          <a href="" className="login">ВХОД</a>
          <a href="" className="register">РЕГИСТРАЦИЯ</a>
          <div className="language">РУС</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
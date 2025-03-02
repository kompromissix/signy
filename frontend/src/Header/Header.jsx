import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from './Header_assets/Group7.png';
import svg from './Header_assets/Vector36.png';
import Register from '../Modal/register/register'; 
import Login from '../Modal/login/login';

function Header() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="left">
          <Link to="/Str7" className="logo">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="center">
          <a href="">0 800 750 643 <span><img src={svg} alt="" /></span></a>
          <Link to="/Str1"><a href="">ПРО НАС<span><img src={svg} alt="" /></span></a></Link>
          <Link to="/Str2"><a href="">ЦЕНЫ</a></Link>
          <Link to="/Str3"><a href="">КОНТАКТЫ</a></Link>
          <button className="login" onClick={() => setShowLogin(true)}>ВХОД</button>
          <button className="register" onClick={() => setShowRegister(true)}>РЕГИСТРАЦИЯ</button>
          <a href="">РУС<span><img src={svg} alt="" /></span></a>
        </div>
      </div>

      {showRegister && <Register onClose={() => setShowRegister(false)} />}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </nav>
  );
}

export default Header;
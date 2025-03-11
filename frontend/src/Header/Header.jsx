import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from './Header_assets/Group7.png';
import svg from './Header_assets/Vector36.png';
import Register from '../Modal/register/register'; 
import Login from '../Modal/login/login';
import User from '../Modal/user/Str8';

function Header() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Проверка авторизации при загрузке компонента
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Функция для выхода
  const handleLogout = () => {
    localStorage.removeItem('token'); // Удаляем токен
    setIsAuthenticated(false); // Сбрасываем состояние авторизации
    setShowUser(false); // Закрываем модальное окно пользователя
  };

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

          {/* Скрываем кнопки "ВХОД" и "РЕГИСТРАЦИЯ", если пользователь авторизован */}
          {!isAuthenticated && (
            <>
              <button className="login" id='log' onClick={() => setShowLogin(true)}>ВХОД</button>
              <button className="register" id='reg' onClick={() => setShowRegister(true)}>РЕГИСТРАЦИЯ</button>
            </>
          )}

          {/* Показываем кнопку "USER", если пользователь авторизован */}
          {isAuthenticated && (
            <button className="user" onClick={() => setShowUser(true)}>USER</button>
          )}

          <a href="">РУС<span><img src={svg} alt="" /></span></a>
        </div>
      </div>

      {showUser && <User onClose={() => setShowUser(false)} onLogout={handleLogout} />}
      {showRegister && <Register onClose={() => setShowRegister(false)} />}
      {showLogin && <Login onClose={() => setShowLogin(false)} onLogin={() => setIsAuthenticated(true)} />}
    </nav>
  );
}

export default Header;
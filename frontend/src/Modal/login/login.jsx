import React, { useState } from 'react';
import axios from 'axios';

function Login({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });
      console.log(response.data);
      localStorage.setItem('token', response.data.token); // Сохраняем токен
      alert('Вход выполнен успешно!');
      onClose();
    } catch (err) {
      console.error(err);
      alert('Ошибка входа');
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Войти</button>
        <button type="button" onClick={onClose}>Закрыть</button>
      </form>
    </div>
  );
}

export default Login;
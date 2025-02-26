import React, { useState } from 'react';
import axios from 'axios';

function Register({ onClose }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        username,
        email,
        password,
      });
      console.log(response.data);
      alert('Регистрация успешна!');
      onClose();
    } catch (err) {
      console.error(err);
      alert('Ошибка регистрации');
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <button type="submit">Зарегистрироваться</button>
        <button type="button" onClick={onClose}>Закрыть</button>
      </form>
    </div>
  );
}

export default Register;
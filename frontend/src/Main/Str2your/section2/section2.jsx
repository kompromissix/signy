import './section2.scss';
import axios from 'axios';
import { useState } from 'react';

function Section2() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register/form', {
        username,
        email,
        phone,
        question,
      });
      console.log(response.data);
      alert('Регистрация успешна!');
    } catch (err) {
      console.error(err);
      alert('Ошибка регистрации');
    }
  };
  return (
    <section className="section2">
      <div className="container">
        <h3 className="title">Нет ответа на интересующий вопрос?</h3>
        <p className="subtitle">Заполни форму и наши менеджеры свяжутся с тобой</p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">Имя*:</label>
            <input type="text" className="input" placeholder="Иван" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div className="form-group">
            <label className="label">Электронная почта*:</label>
            <input type="email" id="email" className="input" placeholder="ivan@mail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="label">Телефон*:</label>
            <input type="number" id="phone" className="input" placeholder="+38 000 000 00 00" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>

          <div className="form-group">
            <label className="label">Твой вопрос:</label>
            <textarea className="textarea" placeholder="введите тут" value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
          </div>

          <button type="submit" className="button">ОТПРАВИТЬ</button>
        </form>
      </div>
    </section>
  );
};

export default Section2;
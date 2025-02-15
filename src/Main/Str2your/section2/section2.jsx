import './section2.scss';

const Section2 = () => {
  return (
    <section className="section2">
      <div className="container">
        <h3 className="title">Нет ответа на интересующий вопрос?</h3>
        <p className="subtitle">Заполни форму и наши менеджеры свяжутся с тобой</p>

        <form className="form">
          <div className="form-group">
            <label className="label">Имя*:</label>
            <input type="text" className="input" placeholder="Иван" />
          </div>

          <div className="form-group">
            <label className="label">Электронная почта*:</label>
            <input type="email" id="email" className="input" placeholder="ivan@mail.com" />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="label">Телефон*:</label>
            <input type="tel" id="phone" className="input" placeholder="+38 000 000 00 00" />
          </div>

          <div className="form-group">
            <label className="label">Твой вопрос:</label>
            <textarea className="textarea" placeholder="введите тут"></textarea>
          </div>

          <button type="submit" className="button">ОТПРАВИТЬ</button>
        </form>
      </div>
    </section>
  );
};

export default Section2;
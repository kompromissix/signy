import './section1.scss';

function Section1() {
  return (
    <section className="section">
      <div className="faq-container">
        <section className='StrName'>
            <div>
                <h5>Signy / Популярные вопросы</h5>
            </div>
        </section>
        <h1 className="faq-title">Популярные вопросы и ответы на них</h1>

        <div className="faq-section">
          <h2 className="section-title">Популярные вопросы -</h2>
          <ul>
            <li><span>+</span> Почему круглую пиццу ставят в квадратную коробку, а нарезают треугольниками?</li>
            <li><span>-</span> Почему после ремонта дорога опять проваливается? Потому что делают её без соблюдения технологических процессов.</li>
            <li><span>+</span> Почему вода мокрая?</li>
            <li><span>+</span> Видят ли микробы друг друга?</li>
            <li><span>+</span> Почему кровь красная а вены синие?</li>
            <li><span>+</span> Из чего сделана радуга?</li>
          </ul>
        </div>

        <div className="faq-section">
          <h2 className="section-title">Настройка работы в Signy <span>+</span></h2>
          <p className="question-count">Ответов на вопросы 25</p>
        </div>

        <div className="faq-section">
          <h2 className="section-title">Работа с документами <span>+</span></h2>
          <p className="question-count">Ответов на вопросы 15</p>
        </div>

        <div className="faq-section">
          <h2 className="section-title">Информация по безопасности <span>+</span></h2>
          <p className="question-count">Ответов на вопросы 17</p>
        </div>

        <div className="faq-section">
          <h2 className="section-title">Технические вопросы <span>+</span></h2>
          <p className="question-count">Ответов на вопросы 16</p>
        </div>

        <div className="faq-section">
          <h2 className="section-title">Интеграция <span>+</span></h2>
          <p className="question-count">Ответов на вопросы 15</p>
        </div>

        <div className="faq-section">
          <h2 className="section-title">Общие вопросы <span>+</span></h2>
          <p className="question-count">Ответов на вопросы 57</p>
        </div>
      </div>
    </section>
  );
}

export default Section1;
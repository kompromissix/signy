import './Str3.scss'
import map from './Str3_assets/map.png'
import mail from './Str3_assets/ic_round-mail.png'
import loc from './Str3_assets/ic_baseline-location-on.png'
import phone from './Str3_assets/ant-design_phone-filled.png'


export default function Str3(){
    return(
        <>
            <main className='str3'>
                <section className='StrName'>
                    <div>
                        <h5>Signy / Контакты</h5>
                    </div>
                </section>
                <section className='background1'>
                    <div>
                        <h1>Наши контакты</h1>
                        <div>
                            <div>
                                <p>Мы всегда рады ответить на ваши вопросы и развивать эффективное сотрудничество по всем вопросам, связанным с электронным документооборотом.</p>
                                <div>
                                    <img src={phone} alt="" />
                                    <div>
                                        <p>0 800 750 643</p>
                                        <p>+3 044 334 56 43</p>
                                        <p>+3 044 338 86 43</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={mail} alt="" />
                                    <p>infosmartsign@smarttender.biz</p>
                                </div>
                                <div>
                                    <img src={loc} alt="" />
                                    <p>пр-т Бажана, 14 А Киев, 02072</p>
                                </div>
                            </div>
                            <img src={map} alt="" />
                        </div>
                    </div>
                </section>
                <section className='background2'>

                    <form className="form">
                        <h2>...или напишите нам:</h2>
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
                </section>
            </main>
        </>
    )
}
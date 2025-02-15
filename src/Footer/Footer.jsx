import './Footer.scss'
import logo from './Footer_assets/Group7.png'
import { Link } from "react-router-dom";
export default function Footer(){
    return(
        <>
            <footer>
                <div>
                    <div>
                        <img src={logo} alt="" />
                        <h5>© 2020 Signy</h5>
                    </div>
                    <div>
                        <div>
                            <p>Про нас</p>
                            <p>Цены</p>
                            <p>Вход</p>
                            <p>Регистрация</p>
                        </div>
                        <h5>Договір оферти</h5>
                    </div>
                    <div>
                        <div>
                            <Link to="/Str4"><p>Блог</p></Link>
                            <p>Контакты</p>
                        </div>
                        <h5>Безпека сервісу</h5>
                    </div>
                    <div>
                        <div>
                            <p>infosmartsign@smarttender.biz</p>
                            <p>Facebook</p>
                        </div>
                    </div>
                    <div className='osobenny'>
                        <p>пр-т Миколи Бажана, 14 А Київ, 02072</p>
                        <p>0 800 750643</p>
                        <p>+380 44 334 56 43</p>
                        <p>+380 44 338 86 43</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
import './Str7.scss'
import Swiper_block from '../Swiper/Swiper'
import Subscribe from '../Subscribe/Subscribe'
import zagluska from './Str7_assets/Placeholder.png'
import { ways2 } from '../Str5my/photo'
import { useEffect, useState } from 'react';
import { ans } from './data'
import { b4 } from './b4'
import progr from './Str7_assets/Group1392.png'
import { prog } from './program'

import MySwiperComponent from './section1/swiper'
import axios from 'axios';


function Interesting(int){
    return(
        <>
            <div key={int.index}>
                <img src={zagluska} alt="" />
                <div>
                    <h4>{int.data}</h4>
                    <h3>{int.namebottom}</h3>
                </div>
            </div>
        </>
    )
}
function Question(answer){
    const [isExpanded, setIsExpanded] = useState(false);
    const handleClick = () => {
        setIsExpanded(!isExpanded); // Меняем состояние на противоположное
    };
    return(
        <>
            <div>
                <div>
                    <button onClick={handleClick}>
                        {isExpanded ? '-' : '+'}
                    </button>
                    <p>{answer.why}</p>
                </div>
                {isExpanded && <p>{answer.tway}</p>}
            </div>
        </>
    )
}

function Treediv(div){
    return(
        <>
            <div>
                <img src={div.img} alt="" />
                <div>
                    <h3>{div.h3}</h3>
                    <p>{div.p}</p>
                </div>
            </div>
        </>
    )
}
function Programm(link){

    return(
        <>
            <div>
                <h2>{link.h2}</h2>
                <ul>
                    <li>{link.li1}</li>
                    <li>{link.li2}</li>
                    <li>{link.li3}</li>
                    <li>{link.li4}</li>
                </ul>
                <button type="button">{link.b}</button>
            </div>
        </>
    )
}

function Podpiska(props){

    return(
        <>
            <div>
                <div  key={props.index}>
                    <h3>{props.name}</h3>
                    <div>
                        <p>{props.pass}</p>
                        <h3><span>{props.punkt}</span>{props.cena}</h3>
                    </div>
                    <button type="button">{props.button}</button>
                </div>
            </div>
        </>
    )
}

export default function Str7(){
    const [tovar, setTovar] = useState([]);
    const [images, setImages] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:5000/api/tovar')
        .then(response => setTovar(response.data))
        .catch(error => console.error(error));
    }, []);
    useEffect(() => {
      axios.get('http://localhost:5000/api/images')
        .then(response => setImages(response.data))
        .catch(error => console.error(error));
    }, []);
    return(
        <>
            <main className='str7'>
                <MySwiperComponent/>
                <section className='background4'>
                    <div>
                        {b4.map((way) =>(
                            <Treediv {...way}/>
                        ))}
                    </div>
                </section>
                <section className='background5'>
                    <div>
                        <div>
                            <Programm {...prog[0]}/>
                            <img src={progr} alt="" />
                        </div>
                        <div>
                            <img src={progr} alt="" />
                            <Programm {...prog[1]}/>
                        </div>
                    </div>
                </section>
                <section className='background6'>
                    <div>
                        <h2>Пакеты цифровых подписей </h2>
                        <div>
                            {tovar.map((way) =>(
                                <Podpiska {...way}/>
                            ))}
                        </div>
                    </div>
                </section>
                <section className='background7'>
                    <div>
                        <h2>5 820 125 114 </h2>
                        <h3>подписано документов</h3>
                        <p>Наша компания уже более 30 лет создает удобные решения для бизнеса любого размера. Мы гордимся Signy как безопасным и комфортным продуктом</p>
                    </div>
                </section>
                <Swiper_block/>
                <section className='background1'>
                    <div>
                        <h2>Интересно пишем про </h2>
                        <div>
                            {images.map((way) =>(
                                <Interesting {...way}/>
                            ))}
                        </div>
                    </div>
                </section>
                <section className='background2'>
                    <div>
                        <h2>Познакомимся в живую? </h2>
                        <iframe width="734" height="451" src="https://rutube.ru/play/embed/7814c00c182e36cd339981096b593a03/"></iframe>
                    </div>
                </section>
                <section className='background3'>
                    <div>
                        <h2>Популярные вопросы и ответы на них</h2>
                        <div>
                            {ans.map((way) =>(
                                <Question {...way}/>
                            ))}
                        </div>
                    </div>
                </section>
                <Subscribe/>
            </main>
        </>
    )
}
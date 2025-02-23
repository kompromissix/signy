import './section7.scss'
import Swiper_block from '../../Swiper/Swiper'
import Subscribe from '../../Subscribe/Subscribe'
import zagluska from './Str7_assets/Placeholder.png'
import { ways2 } from '../../Str5my/photo'
import { useState } from 'react';


function Interesting(write){
    return(
        <>
            <div>
                <img src={zagluska} alt="" />
                <div>
                    <h4>28.05.2020</h4>
                    <h3>Заголовок короткий в две строки</h3>
                </div>
            </div>
        </>
    )
}

export default function Section7(){
    const [isExpanded, setIsExpanded] = useState(false);
    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };
    return(
        <>
            <main className='str7'>
                <Swiper_block/>
                <section className='background1'>
                    <div>
                        <h2>Интересно пишем про </h2>
                        <div>
                            {ways2.map((way) =>(
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
                <section>
                    <div>
                        <h2>Популярные вопросы и ответы на них</h2>
                        <div>
                            <button onClick={handleClick}>
                                {isExpanded ? '-' : '+'}
                            </button>
                            {isExpanded && <p>Текст, который появляется при нажатии на "+"</p>}
                        </div>
                    </div>
                </section>
                <Subscribe/>
            </main>
        </>
    )
}
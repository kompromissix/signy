import './Str6.scss'
import ochki from './Str6_assets/Rectangle.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import { useState, useRef } from "react";
import { ways2 } from '../Str5my/photo';
import { Blog } from '../Str5my/Str5';
import { ways3 } from './photo';
import { Link } from 'react-router-dom';
import Subscribe from '../Subscribe/Subscribe';

export default function Str6(){
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    const handleTabClick = (index) => {
        setActiveIndex(index);
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    };
    function Swip(blog){
        return(
            <>
            <div className='blog_div'>
                <div>
                    {ways2.map((way) =>(
                        <Blog {...way}/>
                    ))}
                </div>
                <div>
                    {ways2.map((way) =>(
                        <Blog {...way}/>
                    ))}
                </div>
                <div> 
                    {ways2.map((way) =>(
                        <Blog {...way}/>
                    ))}
                </div>
                
            </div>

            </>
        )
    }
    return(
        <>
            <main className='Str6'>
                <section className='StrName'>
                    <div>
                        <h5>Signy  /  Блог</h5>
                    </div>
                </section>
                <section className='background1'>
                    <h1>Интересно пишем про</h1>
                    <div>
                        <img src={ochki} alt="" />
                        <div>
                            <h4>28.05.2020</h4>
                            <h2>Burn Calories Quicker in 30 Min.</h2>
                            <div>
                                <div>
                                    <a href="">про продукт</a>
                                </div>
                                <div>
                                    <a href="">теги</a>
                                </div>
                                <div>
                                    <a href="">много тегов</a>
                                </div>
                            </div>
                            <p>Идейные соображения высшего порядка, а также укрепление и развитие структуры играет важную роль в формировании существенных финансовых и административных условий.
                            Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития.</p>
                            <Link to="/Str4">Читать</Link>
                        </div>
                    </div>
                </section>
                <section className='background2'>
                    <div className="tabs">
                        {["ВСЕ", "НОВОСТИ", "ОБУЧЕНИЕ", "ЗАКОНЫ"].map((tab, index) => (
                            <div key={index} className={`tab ${activeIndex === index ? "active" : ""}`} onClick={() => handleTabClick(index)} >
                                <p>{tab}</p>
                            </div>
                        ))}
                    </div>
                    <div className='swiperss'>
                        <Swiper modules={[Navigation, A11y, Mousewheel, Autoplay]} onSwiper={(swiper) => (swiperRef.current = swiper)} onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} loop={true} spaceBetween={50} slidesPerView={1} mousewheel={{ clickable: true }} >
                            {ways3.map((ways2, index) => (
                                <SwiperSlide key={ways2.id}>
                                    <Swip/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className='tabss_div'>
                        <div className="tabss">
                            {["01", "02", "03", "04"].map((tab, index) => (
                                <div key={index} className={`tab ${activeIndex === index ? "active" : ""}`} onClick={() => handleTabClick(index)} >
                                    <p>{tab}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                </section>
                <Subscribe/>
            </main>
        </>
    )
}
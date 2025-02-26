import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.scss';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ways2 } from '../../Str5my/photo';

function Swiper_header(prop){
  return(
    <>
      <div className='sectionS'>
        <div className='div-center'>
          <div className='div-left' key={prop.index}>
            <h1>Цифровой документооборот в три этапа:</h1>
            <div><h2><span>{prop.span1}</span>{prop.p1} - <span>{prop.span2}</span>{prop.p2} - <span>{prop.span3}</span>{prop.p3}</h2></div>
            <h2>{prop.name}</h2>
            <p>{prop.namebottom}</p>
            <button>ПОПРОБОВАТЬ БЕСПЛАТНО</button>
          </div>
          <div className='div-right'>
            <img src={prop.img} alt="Box" /> {/* Добавьте атрибут alt для img */}
          </div>
        </div>
      </div>
    </>
  )
}

export default function MySwiperComponent() {
  const [header, setHeader] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/header')
      .then(response => setHeader(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
    <section className='Str7_swiper'>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
      >
        {header.map((way) =>(
          <SwiperSlide>
            <Swiper_header {...way}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    </>
  );
};
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './swiper.module.scss'; // Импорт локальных стилей

import Section1 from './swip1/section1';
import Section2 from './swip2/section2';
import Section3 from './swip3/section3';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const MySwiperComponent = () => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        className={styles.swiper} 
      >
        <SwiperSlide className={styles.swiperSlide}><Section1 /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><Section2 /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><Section3 /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default MySwiperComponent;
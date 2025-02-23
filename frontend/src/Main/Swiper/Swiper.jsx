import './Swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import logo1 from './Swiper_assets/image1.png'
import logo2 from './Swiper_assets/image2.png'
import logo3 from './Swiper_assets/image3.png'
import logo4 from './Swiper_assets/image4.png'

export default function Swiper_block(){
    return(
        <>
            <section className='swipers'>
                <h2>Друзья Signy</h2>
                <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]} spaceBetween={50} slidesPerView={1} loop={true} mousewheel={{ clickable: true }}  pagination={true} >
                    <SwiperSlide>
                        <img src={logo1} alt="" />
                        <img src={logo2} alt="" />
                        <img src={logo3} alt="" />
                        <img src={logo4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={logo1} alt="" />
                        <img src={logo2} alt="" />
                        <img src={logo3} alt="" />
                        <img src={logo4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={logo1} alt="" />
                        <img src={logo2} alt="" />
                        <img src={logo3} alt="" />
                        <img src={logo4} alt="" />
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}
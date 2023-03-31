import { Autoplay, Navigation, Pagination, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
// import cover1 from "../images/cover-1.avif";
import cover2 from "../images/cover-2.jpg";
import cover3 from "../images/cover-3.jpg";
import "./Slider.css"


export default function Slider()  {
    return (
      <div className='swipper'>
        <Swiper
        modules={[Autoplay, Navigation, Pagination,]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation 
        pagination={{clickable: true}}
        autoplay={{delay: 5000}}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      className='cover-slides'
      >
      {/* <SwiperSlide><img src={cover1} alt="cover1" className='slideImg'/></SwiperSlide> */}
      <SwiperSlide ><img src={cover2} alt='cover2' className='slideImg'/></SwiperSlide>
      <SwiperSlide ><img src={cover3} alt='cover3' className='slideImg'/></SwiperSlide>

    </Swiper>
    </div>
    );
};
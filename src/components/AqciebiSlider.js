import React from 'react';
import aqciebiSliderItem from './aqciebiSliderItem';
import "../components/AqciebiSlider.css"
import { Autoplay, Navigation, Pagination, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const AqciebiSlider = () => {
    return (
        <div className='ad-cards'>
            <Swiper
                    modules={[Autoplay, Navigation, Pagination,]}
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation
                    // pagination={{clickable: true}}
                    autoplay={{delay: 3000}} >

                    {aqciebiSliderItem.map(item => {
                        return (
                            <SwiperSlide  key={item.id}> 
                            <div className='ad-card'>
                                <img src={item.img} alt='adimg' className='adImg'/>
                                <p className='data-title'>{item.data}</p>
                                <p className='ad-title'>{item.title}</p>
                            </div>
                            </SwiperSlide>
                
                        )
        })}
                </Swiper>
        </div>
    );
}

export default AqciebiSlider;

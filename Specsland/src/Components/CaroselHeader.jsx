import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import DUM from "../Images/DUM.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <div className="min-h-[0vh]">

    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="min-h-[20vh] lg:min-h-[60vh] " style={{ backgroundImage: `url(${DUM})`, repeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',width: '100%', height: '10%',objectFit: 'cover' }}></div>
      </SwiperSlide>
      <SwiperSlide> <div className="min-h-[20vh] lg:min-h-[60vh]" style={{ backgroundImage: `url(${DUM})`, repeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',width: '100%', height: '10%',objectFit: 'cover' }}></div></SwiperSlide>
      <SwiperSlide> <div className="min-h-[20vh] lg:min-h-[60vh]" style={{ backgroundImage: `url(${DUM})`, repeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',width: '100%', height: '10%',objectFit: 'cover' }}></div></SwiperSlide>
      <SwiperSlide> <div className="min-h-[20vh] lg:min-h-[60vh]" style={{ backgroundImage: `url(${DUM})`, repeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',width: '100%', height: '10%',objectFit: 'cover' }}></div></SwiperSlide>
    </Swiper>
    </div>
  );
};
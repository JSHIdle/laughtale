import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';

import '../../../node_modules/swiper/swiper.min.css'

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

import slide_image_1 from "/src/assets/samples/e2-1.jpg";
import slide_image_2 from "/src/assets/samples/e3-1.jpg";
import slide_image_3 from "/src/assets/samples/e4-1.jpg";
import slide_image_4 from "/src/assets/samples/e4-2.jpg";
import slide_image_5 from "/src/assets/samples/e2-2.jpg";
import slide_image_6 from "/src/assets/samples/e2-4.jpg";

function RecentSlider(){
    // 슬라이드 정보를 저장하는 상태
  const [slideInfo, setSlideInfo] = useState({ title: '', episode: '' });

  // 각 슬라이드에 대한 정보를 담고 있는 배열
  const slidesData = [
    {
        id: 1,
        title: "마아아아아아아아아아안화아ㅏㅏ아아아아아아아아아아아가나다라마바사",
        episode: "3화",
        imageUrl: "/src/assets/samples/e2-1.jpg",
      },
      {
        id: 2,
        title: "만화2",
        episode: "3화",
        imageUrl: "/src/assets/samples/e3-1.jpg",
      },
      {
        id: 3,
        title: "만화3",
        episode: "3화",
        imageUrl: "/src/assets/samples/e4-2.jpg",
      },
      {
        id: 4,
        title: "만화4",
        episode: "3화",
        imageUrl: "/src/assets/samples/e3-4.jpg",
      },
      {
        id: 5,
        title: "만화5",
        episode: "3화",
        imageUrl: "/src/assets/samples/e1-3.jpg",
      },
      {
        id: 5,
        title: "만화6",
        episode: "7화",
        imageUrl: "/src/assets/samples/e3-3.jpg",
      },
  ];

    return (
        <div className="container" style={{maxWidth:'700px'}} >
        <h1 className="heading">최근 본 만화목록</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 190,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          onSlideChange={(swiper) => {
            // 현재 중앙 슬라이드의 정보를 업데이트합니다.
            const currentSlideData = slidesData[swiper.realIndex];
            setSlideInfo(currentSlideData);
          }}
          onInit={(swiper) => {
            // Swiper 초기화 시, 첫 번째 슬라이드 정보를 설정합니다.
            const currentSlideData = slidesData[swiper.realIndex];
            setSlideInfo(currentSlideData);
          }}
          className="swiper_container"
        >
            
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_2} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_3} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_4} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_5} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_6} alt="slide_image"/>
                </SwiperSlide>
      

                {/* <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div> */}

            </Swiper>
            <div className="slide-info">
                <div className='truncate '>{slideInfo.title}</div>
                <div>{slideInfo.episode}</div>
            </div>
           
        </div>
    );
}

export default RecentSlider;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState } from 'react';

import Slider from 'react-slick';


// 예시 만화 데이터 배열
const comics = [
  { id: 1, title: '만화1',episode: '3화', imageUrl: 'src/assets/samples/e1.jpg' },
  { id: 2, title: '만화2',episode: '3화', imageUrl: 'src/assets/samples/e2.jpg' },
  { id: 3, title: '만화3',episode: '3화', imageUrl: 'src/assets/samples/e3.jpg' },
  { id: 4, title: '만화4',episode: '3화', imageUrl: 'src/assets/samples/e4.jpg' },
  { id: 5, title: '만화5',episode: '3화', imageUrl: 'src/assets/samples/e5.jpg' },
];

function Recent() {
    const [selected, setSelected] = useState(0);

    const scaledSize = (size, scale) => `${(parseInt(size, 10) * scale).toString()}px`;

  // react-slick의 설정
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true, // 중앙에 위치한 아이템을 강조
    centerPadding: scaledSize('30', 0.5), // 중앙 아이템의 좌우 패딩
    slidesToShow: 4.4,
    speed: 500,
    focusOnSelect: true, // 아이템 선택 시 중앙으로 오도록 설정
    beforeChange: (current, next) => setSelected(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '80px', // 중앙 아이템의 패딩을 늘려 크기를 강조
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-20 py-50 mt-10 pt-10 myslickclass">
        
      <Slider  {...settings}>
        
        {comics.map((comic, index) => (
          <div
          key={comic.id}
          className={`relative p-4 transition-all duration-300 ease-in-out transform  ${
            selected === index
              ? 'scale-150 z-30' // 선택된 슬라이드: 크기를 키우고 z-index를 높여서 위에 표시합니다.
              : 'scale-100 z-10' // 선택되지 않은 슬라이드: 기본 크기와 z-index를 낮춥니다.
          }`}
          style={{
            marginRight: index === comics.length - 1 ? '0px' : '-50px', // 오른쪽 슬라이드를 겹치도록 조정합니다.
          }}
        >
        
          <img
            src={comic.imageUrl}
            alt={comic.title}
            className={`w-full h-full object-cover rounded-lg transition-all duration-300 ease-in-out ${
              selected === index ? 'opacity-100' : 'opacity-50'
            }`}
          />
            {selected === index && (
              <div className="text-center mt-2 text-white">
                <h3 className="text-lg font-bold">{comic.title}</h3>
                <p>{comic.episode}</p>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Recent;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const settings = {
    dots: true, // 점으로 페이지 위치 표시
    infinite: false, // 무한 슬라이딩 비활성화
    speed: 500,
    slidesToShow: 1, // 한 번에 보여질 슬라이드 페이지 수
    slidesToScroll: 1 // 스크롤할 때마다 넘어갈 슬라이드 페이지 수
};

const CustomSlider = ({ slides }) => {
    return (
        <div>
            <Slider {...settings}>
                {slides.map(slide => (
                    <div className="bg-gradient-to-b from-[#46AEB8] to-[#688AC1] rounded-xl overflow-hidden w-[700px] h-[720px]">
                        <div className="p-6 flex flex-wrap justify-center items-center">
                            {slide.map(slideone => (
                                <div key={slideone.id} >
                                    <div className="p-3">
                                        <div className="bg-gradient-to-r from-[#aad6de] to-[#78becd] font-semibold rounded-xl overflow-hidden w-[300px] h-[140px] flex justify-center items-center">
                                          <pre>
                                            {slideone.content}
                                          </pre>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};
export default CustomSlider;

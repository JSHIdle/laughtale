import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const settings = {
    dots: false, // 점으로 페이지 위치 표시
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
                    <div className="flex items-center rounded-xl overflow-hidden w-[500px] h-[720px]">
                        <div className="flex flex-wrap justify-center items-center">
                            {slide.map(slideone => (
                                <div key={slideone.id} >
                                    <div className="p-3">
                                        <div className="hover-effect bg-gradient-to-r from-[#64BEE2] to-[#8395E8] font-semibold rounded-xl overflow-hidden w-[300px] h-[140px] flex justify-center items-center">
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

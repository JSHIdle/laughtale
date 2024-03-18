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

const QuizSlider = ({slides}) => {
    return(
        <div>
            <Slider {...settings}>
                {slides.map(slide => (
                    <div className="w-[1000px] h-[720px]">
                        <div className="text-white p-6 flex justify-center items-center">
                            <div key={slide.id}>
                                  <pre className="font-semibold p-3" >
                                    {slide.text}
                                  </pre>
                                <img className="rounded-xl" src="../../../src/assets/cartoon.PNG"/>
                            </div>
                        </div>

                        <div className="font-semibold text-white p-6 flex justify-center items-center">
                            Q. 크기가 9척이나 되는 붉은 옥으로 만든 곡옥은??
                        </div>

                        <div className="flex justify-center items-center">
                        <div className="w-[700px] h-[100px]">
                        <div className="flex flex-wrap justify-center items-center">
                            <div className="p-6">
                                <button
                                    className="bg-gradient-to-b from-[#46AEB8] to-[#688AC1] rounded-xl w-[200px] h-[50px]">버튼1
                                </button>
                            </div>
                            <div className="p-6">
                                <button
                                    className="bg-gradient-to-b from-[#46AEB8] to-[#688AC1] rounded-xl w-[200px] h-[50px]">버튼2
                                </button>
                            </div>
                            <div className="p-6">
                                <button
                                    className="bg-gradient-to-b from-[#46AEB8] to-[#688AC1] rounded-xl w-[200px] h-[50px]">버튼3
                                </button>
                            </div>
                            <div className="p-6">
                                <button
                                    className="bg-gradient-to-b from-[#46AEB8] to-[#688AC1] rounded-xl w-[200px] h-[50px]">버튼4
                                </button>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default QuizSlider;
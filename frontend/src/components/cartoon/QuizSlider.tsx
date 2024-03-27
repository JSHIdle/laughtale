import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import './QuizSlider.css';

const QuizSlider = ({slides, updateCurrentSlide, sliderRef }) => {
    let navigate = useNavigate();
    function handleClick() {
        navigate('result');
    }
    const settings = {
        dots: false, // 점으로 페이지 위치 표시
        infinite: false, // 무한 슬라이딩 비활성화
        speed: 500,
        slidesToShow: 1, // 한 번에 보여질 슬라이드 페이지 수
        slidesToScroll: 1, // 스크롤할 때마다 넘어갈 슬라이드 페이지 수
        afterChange: current => updateCurrentSlide(current)
    };

    return(
        <div>
            <Slider ref={sliderRef} {...settings}>
                {slides.map((slide,index) => (

                    <div key={index} className="w-[1300px]"
                    >
                        <div className="text-white p-6 flex justify-center items-center">
                            <div key={slide.id}>
                                  <pre className="font-semibold p-3">
                                    {slide.text}
                                  </pre>
                                <img className="rounded-xl" src="../../../src/assets/cartoon.png"/>
                            </div>
                        </div>

                        <div className="font-semibold text-white p-6 flex justify-center items-center">
                            Q. 크기가 9척이나 되는 붉은 옥으로 만든 곡옥은??
                        </div>


                        <div className="flex justify-center items-center">
                            <div className="w-[450px]">
                                <div className="grid grid-cols-2 gap-6 justify-items-center items-center">
                                    <button
                                        className="text-black font-bold bg-gradient-to-b from-[#59CDE0] to-[#8F89EB] rounded-xl w-[200px] h-[50px]">버튼1
                                    </button>
                                    <button
                                        className="text-black font-bold bg-gradient-to-b from-[#59CDE0] to-[#8F89EB] rounded-xl w-[200px] h-[50px]">버튼2
                                    </button>
                                    <button
                                        className="text-black font-bold bg-gradient-to-b from-[#59CDE0] to-[#8F89EB] rounded-xl w-[200px] h-[50px]">버튼3
                                    </button>
                                    <button
                                        className="text-black font-bold bg-gradient-to-b from-[#59CDE0] to-[#8F89EB] rounded-xl w-[200px] h-[50px]">버튼4
                                    </button>
                                </div>

                                {index === slides.length - 1 && (
                                    <div className="flex justify-center items-center mt-4">
                                        <button onClick={handleClick}
                                                className="text-black font-bold px-4 py-2 bg-gradient-to-b from-[#5ACDE1] to-[#8F89EB] rounded-3xl w-[200px]">제출하기
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                ))}
            </Slider>
        </div>
    );
};
export default QuizSlider;
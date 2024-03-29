import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import './QuizSlider.css';
import ImageWithWhiteBox from './ImageWithWhiteBox';
import {useState} from "react";

function Modal({ isOpen, onClose ,  modalData}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-[#1D1D21] p-4 rounded-lg w-[600px] ">

                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="text-white rounded-full bg-grey-500 hover:bg-grey-700"
                    >
                        X
                    </button>
                </div>

                    <div className="flex flex-col justify-between ">
                        <div className="flex flex-col justify-center items-center h-full text-white p-6">
                            <div className="rounded-xl  mb-12 w-[100px]">
                                <div>
                                    <h2 className="flex justify-center text-xl text-white font-bold">단어 힌트</h2>
                                </div>
                            </div>
                            <div className="rounded-xl bg-[#2D2D32] mb-6 p-12">
                                <div>
                                    <h2 className="text-xl text-white font-bold"
                                        dangerouslySetInnerHTML={{__html: modalData}}></h2>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
    );
};

const QuizSlider = ({slides, updateCurrentSlide, sliderRef}) => {
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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return(
        <div>
            <Slider ref={sliderRef} {...settings}>
                {slides.map((slide,index) => (

                    <div key={index} className="w-[1300px]"
                    >
                        <div className="text-white p-3 flex justify-center items-center ">
                            <div key={slide.id}>
                                  <pre className="font-semibold p-3">
                                    {slide.text}
                                  </pre>
                                <ImageWithWhiteBox key={index} src={slide.imageUrl}  boxCoordinates={{
                                    x: slide.leftBottomX,
                                    y: slide.leftBottomY,
                                    width: slide.rightTopX - slide.leftBottomX,
                                    height: slide.rightTopY - slide.leftBottomY
                                }}
                                sentence = {slide.sentence}/>
                            </div>
                        </div>

                        <div className="font-semibold text-white p-6 flex justify-center items-center">
                            Q{index+1} 다음 말풍선에 들어갈 단어를 고르세요.
                            <button className="ml-6 font-bold text-base text-white bg-[#2D2D32] brightness-75 hover:brightness-100 rounded-xl w-[50px] h-[25px]" onClick={() => {
                                openModal();
                                setModalData(slide.definition);
                            }} >힌트</button>
                        </div>


                        <div className="flex justify-center items-center p-3">
                            <div className="w-[450px]">
                                <div className="grid grid-cols-2 gap-6 justify-items-center items-center">
                                    <button
                                        className="text-black font-bold bg-gradient-to-b from-[#59CDE0] to-[#8F89EB] rounded-xl w-[200px] h-[50px]">{slide.option[0]}
                                    </button>
                                    <button
                                        className="text-black font-bold bg-gradient-to-b from-[#59CDE0] to-[#8F89EB] rounded-xl w-[200px] h-[50px]">{slide.option[1]}
                                    </button>
                                    <button
                                        className="text-black font-bold bg-gradient-to-b from-[#59CDE0] to-[#8F89EB] rounded-xl w-[200px] h-[50px]">{slide.option[2]}
                                    </button>
                                    <button
                                        className="text-black font-bold bg-gradient-to-b from-[#59CDE0] to-[#8F89EB] rounded-xl w-[200px] h-[50px]">{slide.option[3]}
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
            <Modal isOpen={isModalOpen} onClose={closeModal} modalData={modalData}/>
        </div>
    );
};

export default QuizSlider;
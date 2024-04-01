import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import './QuizSlider.css';
import ImageWithWhiteBox from './ImageWithWhiteBox';
import {useState} from "react";
import {useQueryClient} from '@tanstack/react-query';
import axios from 'axios';
import client from "../../apis";

function Modal({ isOpen, onClose ,  modalData}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-[#ffffff] p-4 rounded-lg w-[600px] ">

                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="text-black rounded-full bg-grey-500 hover:bg-grey-700"
                    >
                        X
                    </button>
                </div>

                    <div className="flex flex-col justify-between ">
                        <div className="flex flex-col justify-center items-center h-full text-black p-6">
                            <div className="rounded-xl  mb-6 w-[100px]">
                                <div>
                                    <h2 className="flex justify-center text-3xl text-black font-bold">단어 힌트</h2>
                                </div>
                            </div>
                            <div className="rounded-xl bg-[#2D2D32] mb-6 p-12">
                                <div>
                                    <h2 className="text-2xl text-black font-bold"
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
        const correctAnswersCount = calculateCorrectAnswers();
        navigate('result', { state: { slides, correctAnswersCount }});
        console.log(selectedAnswers);

        const updatedIds = Object.values(selectedAnswers).map(obj => obj.id + 1);
        console.log(updatedIds);

        client.post('/quiz/solve', { answer: updatedIds })
            .then(response => {
                console.log('Request successful', response.data);
            })
            .catch(error => {
                console.error('Request failed', error);
            });
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

    // 정답넣기
    const [selectedAnswers, setSelectedAnswers] = useState({});

    // 답안 버튼 클릭 이벤트 핸들러
    const handleAnswerClick = (slideIndex, checkwordId, answerwordId , answerword) => {
        // 선택된 답안 정보 업데이트
        setSelectedAnswers(prev => ({
            ...prev,
            [slideIndex]: { id: checkwordId, answerId: answerwordId, answerword: answerword}
        }));
        console.log(selectedAnswers);
    };

    const calculateCorrectAnswers = () => {
        let correctCount = 0; // 정답 개수를 저장할 변수

        Object.values(selectedAnswers).forEach(answer => {
            if (answer.id + 1 === answer.answerId) { // 여기를 수정함
                correctCount += 1; // 조건이 맞을 경우 정답 개수 증가
            }
        });

        console.log(`정답 개수: ${correctCount}`); // 콘솔에 정답 개수 출력
        return correctCount; // 정답 개수 반환
    };

    return (
        <div>
            <Slider ref={sliderRef} {...settings}>
                {slides.map((slide, index) => {
                    const replaceWord = slide.option[slide.answerNo - 1];
                    const modifiedSentence = slide.sentence.replace(new RegExp(replaceWord, 'gi'), '  __?__  ');

                    return (
                        <div key={index} className="w-[1300px] ">
                            <div className="text-black p-12 flex justify-center items-center grid grid-cols-2">
                                <div className="flex justify-end items-center">
                                    <pre className="font-semibold p-3"></pre>
                                    <ImageWithWhiteBox src={slide.imageUrl} boxCoordinates={{
                                        x: slide.leftBottomX,
                                        y: slide.leftBottomY,
                                        width: slide.rightTopX - slide.leftBottomX,
                                        height: slide.rightTopY - slide.leftBottomY
                                    }}/>
                                </div>
                                <div>
                                    <div className="font-semibold text-black p-6 flex justify-center items-center">
                                        Q{index + 1} 다음 말풍선에 들어갈 단어를 고르세요.
                                        <button
                                            className="ml-6 font-bold text-base text-black bg-[#2D2D32] brightness-75 hover:brightness-100 rounded-xl w-[50px] h-[25px]"
                                            onClick={() => {
                                                openModal();
                                                setModalData(slide.definition);
                                            }}>힌트</button>
                                    </div>

                                    <div className="flex justify-center items-center p-3 mb-3">
                                        <div
                                            className="flex justify-center items-center bg-[#2D2D32] rounded-3xl p-3 max-w-[450px]">
                                            <div
                                                className="flex justify-center items-center font-bold p-6 mr-12 ml-12 text-wrap overflow-wrap"
                                                style={{whiteSpace: 'normal', wordWrap: 'break-word'}}>
                                                {modifiedSentence}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center items-center p-3">
                                        <div className="w-[450px]">
                                            <div className="grid grid-cols-2 gap-6 justify-items-center items-center">
                                                {slide.option.map((option, idx) => (
                                                    <button
                                                        key={idx}
                                                        className={`text-black font-bold border-2 border-[#59CDE0] hover:bg-gradient-to-b from-[#59CDE0] to-[#8F89EB] rounded-xl w-[200px] h-[50px] ${
                                                            selectedAnswers[index]?.id === idx ? "bg-gradient-to-b from-[#59CDE0] to-[#8F89EB]" : ""
                                                        }`} // 조건부 클래스 추가
                                                        onClick={() => handleAnswerClick(index, idx, slide.answerNo, slide.option[slide.answerNo-1])} // 클릭 이벤트 핸들러 연결
                                                    >
                                                        {option}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    {index === slides.length - 1 && (
                                        <div className="flex justify-center items-center mt-4 p-12">
                                            <button onClick={handleClick}
                                                    className="text-black font-bold px-4 py-2 bg-gradient-to-b from-[#5ACDE1] to-[#8F89EB] rounded-3xl w-[150px]">제출하기
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
            <Modal isOpen={isModalOpen} onClose={closeModal} modalData={modalData}/>
        </div>
    );
};

export default QuizSlider;
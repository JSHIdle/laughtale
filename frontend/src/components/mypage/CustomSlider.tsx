import Slider from "react-slick";
import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiVolumeHigh } from '@mdi/js';
import ModalCarousel from "./ModalCarousel.tsx";

const dummyData = {
    text: 'こんにちは、世界！私の名前はAIです。', // 예시 일본어 텍스트
    translate : '안녕?' +
        '\n' +
        '단어 뜻이 들어간다 ',
};

const settings = {
    dots: false, // 점으로 페이지 위치 표시
    infinite: false, // 무한 슬라이딩 비활성화
    speed: 500,
    slidesToShow: 1, // 한 번에 보여질 슬라이드 페이지 수
    slidesToScroll: 1 // 스크롤할 때마다 넘어갈 슬라이드 페이지 수
};

const handleIconClick = () => {
    playTTS(dummyData.text);
};
function Modal({ isOpen, onClose, handleIconClick  }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-[#1D1D21] p-4 rounded-lg w-[1200px] h-[600px]">
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 flex justify-center items-center">
                    <ModalCarousel/>
                    </div>
                    <div className="col-span-1 flex flex-col justify-between ">
                        <div className="flex justify-end">
                            <button
                                onClick={onClose}
                                className="text-white rounded-full p-2 bg-grey-500 hover:bg-grey-700"
                            >
                                X
                            </button>
                        </div>
                        <div className="flex flex-col justify-center  h-full">
                            <div className="mb-4">
                                <h2 className="text-xl text-white font-bold">{dummyData.text}</h2>
                                <h2 className="text-xl text-white font-bold">{dummyData.translate}</h2>
                            </div>
                            <div className="flex items-center justify-start">
                                <span onClick={handleIconClick}>
                                  <Icon className="brightness-75 hover:brightness-100" path={mdiVolumeHigh} size={1} color="white"/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

//tts
import axios from 'axios';

async function playTTS(text) {
    const clientId = 'slivj7sa6g'; // 클라이언트 ID
    const clientSecret = 'tJF92nSeETcCmlFMeMwXRJ0HKote1gKECwGVjGX2'; // 클라이언트 시크릿

    try {
        const response = await axios.post('https://naveropenapi.apigw.ntruss.com/tts-premium/v1/tts', `speaker=shinji&volume=0&speed=0&pitch=0&format=mp3&text=${text}`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-NCP-APIGW-API-KEY-ID': clientId,
                'X-NCP-APIGW-API-KEY': clientSecret,
            },
            responseType: 'arraybuffer' // 바이너리 데이터를 위한 설정
        });

        const audioUrl = URL.createObjectURL(new Blob([response.data], {type: 'audio/mp3'}));
        const audio = new Audio(audioUrl);
        audio.play();
    } catch (error) {
        console.error('TTS play error:', error);
    }
}

const CustomSlider = ({slides}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <Slider {...settings}>
                {slides.map(slide => (
                    <div className="flex items-center rounded-xl overflow-hidden w-[500px] h-[480px]">
                        <div className="flex flex-wrap justify-center items-center">
                            {slide.map(slideone => (
                                <div key={slideone.id}>

                                        <div className="p-3">
                                            <div className="bg-gradient-to-r from-[#64BEE2] to-[#8395E8] font-semibold rounded-xl overflow-hidden w-[300px] h-[140px] flex justify-center items-center shadow-sm
                                                brightness-75 hover:brightness-100" onClick={openModal}>
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
            <Modal isOpen={isModalOpen} onClose={closeModal} handleIconClick={handleIconClick} />
        </div>
    );
};

export default CustomSlider;

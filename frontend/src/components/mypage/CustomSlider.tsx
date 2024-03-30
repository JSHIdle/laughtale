import Slider from "react-slick";
import {useEffect, useState} from 'react';
import Icon from '@mdi/react';
import { mdiVolumeHigh } from '@mdi/js';
import ModalCarousel from "./ModalCarousel.tsx";
import client from "../../apis";

const settings = {
    dots: false, // 점으로 페이지 위치 표시
    infinite: false, // 무한 슬라이딩 비활성화
    speed: 500,
    slidesToShow: 1, // 한 번에 보여질 슬라이드 페이지 수
    slidesToScroll: 1 // 스크롤할 때마다 넘어갈 슬라이드 페이지 수
};

function DefinitionModal({ isOpen, onClose, definition  }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-[#1D1D21] p-4 rounded-lg">
                <div className="flex justify-between items-center w-full p-3">
                    <div className="text-white flex-1 text-center">
                        단어 해석
                    </div>
                    <button
                        onClick={onClose}
                        className="text-white rounded-full bg-grey-500 hover:bg-grey-700">
                        X
                    </button>
                </div>
                <div className="flex justify-items-center">
                    {/*단어의 뜻이 클 수 있으므로 오른쪽 영역을 차지하도록 한다*/}
                    <div className="flex justify-center text-white p-12">
                        <div className="rounded-xl bg-[#2D2D32] p-12">
                            <div>
                                <h2 className="text-2xl text-white font-bold"
                                    dangerouslySetInnerHTML={{__html: definition}}></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function ExampleModal({isOpen, onClose, Example}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-[#1D1D21] p-4 rounded-lg w-[1000px]">
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="text-white rounded-full bg-grey-500 hover:bg-grey-700"
                    >
                        X
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-4 p-3 mb-[15px]">
                    {/*만화의 장면과 예문이 함께 넘어간다*/}
                    <div className="flex col-span-1 justify-end">
                        <ModalCarousel/>
                    </div>

                    {/*예문 나열*/}
                    <div className="flex flex-col col-span-2 justify-between ">
                        <div className="flex flex-col justify-center  h-full text-white p-12">
                            <div className="overflow-y-scroll h-[350px] scrollbar-hide">
                                <div
                                    className="rounded-xl bg-[#2D2D32] mb-6 p-6 hover:text-black hover:bg-gradient-to-r from-[#4EDBDE] from-5% to-[#8675DA]">
                                    <div className="flex items-center justify-start">
                                        <div className="mr-3">
                                            <h2>여기에 예문이 온다. (1) </h2>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-xl bg-[#2D2D32] mb-6 p-6 hover:text-black hover:bg-gradient-to-r from-[#4EDBDE] from-5% to-[#8675DA] ">
                                    <div className="flex items-center justify-start ">
                                        <div className="mr-3 ">
                                            <h2>여기에 예문이 온다. (2) </h2>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-xl bg-[#2D2D32] mb-6 p-6 hover:text-black hover:bg-gradient-to-r from-[#4EDBDE] from-5% to-[#8675DA]">
                                    <div className="flex items-center justify-start">
                                        <div className="mr-3">
                                            <h2>여기에 예문이 온다. (1) </h2>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-xl bg-[#2D2D32] mb-6 p-6 hover:text-black hover:bg-gradient-to-r from-[#4EDBDE] from-5% to-[#8675DA] ">
                                    <div className="flex items-center justify-start ">
                                        <div className="mr-3 ">
                                            <h2>여기에 예문이 온다. (2) </h2>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-xl bg-[#2D2D32] mb-6 p-6 hover:text-black hover:bg-gradient-to-r from-[#4EDBDE] from-5% to-[#8675DA]">
                                    <div className="flex items-center justify-start">
                                        <div className="mr-3">
                                            <h2>여기에 예문이 온다. (1) </h2>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-xl bg-[#2D2D32] mb-6 p-6 hover:text-black hover:bg-gradient-to-r from-[#4EDBDE] from-5% to-[#8675DA] ">
                                    <div className="flex items-center justify-start ">
                                        <div className="mr-3 ">
                                            <h2>여기에 예문이 온다. (2) </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

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
    const [isModalOpenW, setIsModalOpenW] = useState(false);
    const closeModalW = () => setIsModalOpenW(false);
    // 단어 해석 보기
    const [definition, setDefinition] = useState('');
    const openModalWithDefinition = (slideone) => {
        setDefinition(slideone.definition);
        setIsModalOpenW(true);
    };


    const [Example, setExample] = useState('');
    const [isModalOpenE, setIsModalOpenE] = useState(false);
    const closeModalE = () => setIsModalOpenE(false);
    const openModalWithExample = (slideone) => {
        setExample(slideone.definition);
        setIsModalOpenE(true);
    };

    async function handleRemoveClick (id){
        await client.delete(`/word-book/${id}`
        ).then(()=>{
            console.log("단어 삭제완료");
        })
        .catch((error) => {
            console.error("There was an error!", error);
        });
    };

    // tts 실행함수
    const handleIconClick = (word) => {
        playTTS(word);
    };

    return (
                <div className="w-[1120px] text-white font-bold flex flex-wrap text-4xl">
                    {/*<Slider {...settings}>*/}
                    {/*    {slides.map(slide => (*/}
                    {/*        <div className="flex items-center rounded-xl overflow-hidden w-[500px] h-[480px]">*/}
                    {/*            <div className="flex flex-wrap justify-center items-center">*/}
                    {slides.content.map(slideone => (
                        <div key={slideone.id}>
                            <div
                                className="group p-6 flex justify-center items-center transform hover:scale-110 transition duration-300 relative">
                                <div
                                    className="absolute top-0 right-0 transform translate-y-10 -translate-x-12 text-red-600 w-6 h-6 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
                                    onClick={()=>handleRemoveClick(slideone.id)}>
                                    &ndash;
                                </div>
                                <div
                                    className="text-white rounded-xl overflow-hidden w-[250px] h-[120px] flex justify-center items-center shadow-sm border-2 border-[#90F880] group-hover:bg-gradient-to-b from-[#83E893] to-[#059C54] hover:border-transparent hover:text-black transition-all duration-300"
                                >
                                    <div>
                                        <div className="flex justify-items-center space-x-2 p-3">
                                            <div className="text-white font-semibold hover:text-black">
                                                {slideone.word}
                                            </div>
                                            <div onClick={() => handleIconClick(slideone.word)}>
                                                <Icon className="hoverIcon" path={mdiVolumeHigh} size={1.5}/>
                                            </div>
                                        </div>
                                        <div className="flex justify-items-center">
                                            <button
                                                className="text-emerald-300 p-3 text-2xl hover:text-black"
                                                onClick={() => openModalWithDefinition(slideone)}>
                                                단어해석
                                            </button>
                                            <button
                                                className="text-amber-200 p-3 text-2xl hover:text-black"
                                                onClick={() => openModalWithExample(slideone)}>
                                                예문보기
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*))}*/}
                    {/*</Slider>*/}
                    {/*<Modal isOpen={isModalOpen} onClose={closeModal} handleIconClick={handleIconClick}/>*/}
                    <DefinitionModal
                        isOpen={isModalOpenW}
                        onClose={closeModalW}
                        definition={definition}
                    />
                    <ExampleModal
                        isOpen={isModalOpenE}
                        onClose={closeModalE}
                        Example={Example}
                    />
                </div>
    );
};

export default CustomSlider;

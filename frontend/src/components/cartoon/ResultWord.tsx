import Icon from "@mdi/react";
import {mdiVolumeHigh} from "@mdi/js";
import axios from "axios";
import {useState} from "react";

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

const handleIconClick = (word) => {
    playTTS(word);
};

const ResultWord=({slides})=>{
    const [isModalOpenW, setIsModalOpenW] = useState(false);
    const closeModalW = () => setIsModalOpenW(false);
    const [definition, setDefinition] = useState('');
    const openModalWithDefinition = (slideone) => {
        setDefinition(slideone.definition);
        setIsModalOpenW(true);
    };

    console.log("데이터 출력" ,slides);
    return(
        <div className="w-[1050px] text-white font-bold flex flex-wrap text-4xl"    >
        {slides.map((slide, index) => (
            <div
                className="group p-6 flex justify-center items-center transform hover:scale-110 transition duration-300 relative">
                <div
                    key={index}
                    className="text-white rounded-xl overflow-hidden w-[180px] h-[100px] flex justify-center items-center shadow-sm border-2 border-[#90F880] group-hover:bg-gradient-to-b from-[#83E893] to-[#059C54] hover:border-transparent hover:text-black transition-all duration-300"
                >
                    <div className="flex flex-col items-center space-y-2"> {/* 부모 div에 flex와 flex-col 클래스 적용 */}
                    <div className="flex justify-center space-x-2 p-3">
                        <div className="text-white font-semibold hover:text-black">
                            {slide.option[slide.answerNo - 1]}
                        </div>
                        <div onClick={() => handleIconClick(slide.option[slide.answerNo - 1])}>
                            <Icon className="hoverIcon" path={mdiVolumeHigh} size={1.5}/>
                        </div>
                    </div>
                    <div className="flex justify-items-center">
                        <button
                            className="text-emerald-300 p-3 text-2xl hover:text-black"
                            onClick={() => openModalWithDefinition(slide)}>
                            단어해석
                        </button>
                    </div>
                </div>
            </div>
            </div>
            ))}
<DefinitionModal
    isOpen={isModalOpenW}
    onClose={closeModalW}
    definition={definition}
/>
</div>
)
;
}
export default ResultWord;
import Header from "../../components/common/Header.tsx";
import Logo from '../../assets/logo.png';
import '../../styles/fontstyle.css';
import '../../styles/mainpagestyle.css';

import AuthButton from "../../components/common/AuthButton.tsx";
import MainBG from '../../assets/mainpageimage/mainbg.png';
import SpeechDef from '../../assets/mainpageimage/speech_def.jpg'
import Manga1 from '../../assets/mainpageimage/mangas/manga_1.webp'
import Manga2 from '../../assets/mainpageimage/mangas/manga_2.jpg'
import Manga3 from '../../assets/mainpageimage/mangas/manga_3.jpg'
import Manga4 from '../../assets/mainpageimage/mangas/manga_4.jpg'
import Manga5 from '../../assets/mainpageimage/mangas/manga_5.png'
import Manga6 from '../../assets/mainpageimage/mangas/manga_6.webp'
import Manga7 from '../../assets/mainpageimage/mangas/manga_7.jfif'
import Manga8 from '../../assets/mainpageimage/mangas/manga_8.jpg'
import Manga9 from '../../assets/mainpageimage/mangas/manga_9.jpg'
import Manga10 from '../../assets/mainpageimage/mangas/manga_10.jpeg'
import Manga11 from '../../assets/mainpageimage/mangas/manga_11.jpg'
import Manga12 from '../../assets/mainpageimage/mangas/manga_12.jpg'
import Manga13 from '../../assets/mainpageimage/mangas/manga_13.jfif'
import Manga14 from '../../assets/mainpageimage/mangas/manga_14.webp'
import Manga15 from '../../assets/mainpageimage/mangas/manga_15.jpg'
import Manga16 from '../../assets/mainpageimage/mangas/manga_16.jpg'
import Manga17 from '../../assets/mainpageimage/mangas/manga_17.jpg'
import Manga18 from '../../assets/mainpageimage/mangas/manga_18.webp'
import Manga19 from '../../assets/mainpageimage/mangas/manga_19.webp'
import Manga20 from '../../assets/mainpageimage/mangas/manga_20.jfif'
import Manga21 from '../../assets/mainpageimage/mangas/manga_21.png'

import ReadingManga from '../../assets/mainpageimage/readingmanga.jpg';

import OnePieceSet from '../../assets/mainpageimage/onepieceset.png';
import JapaneseWordCloud from '../../assets/mainpageimage/japwrcl3.jpg';
import ReactWordcloud from "react-wordcloud";
import {useEffect, useState} from "react";
import client from "../../apis";

export default function NewMain() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Function to fetch data from API

        const fetchData = async () => {
            const res = await client.get("/word-data/word-cloud?page=0&size=1000");
            const updatedData = res.data.map(word => ({
                text: word.text,
                value: word.value > 1000 ? Math.round(word.value / 10) : word.value
            }));
            const reupdatedData = updatedData.map(word => ({
                text: word.text,
                value: word.value > 1000 ? Math.round(word.value / 10) : word.value
            }));
            setData(reupdatedData);

            const intervalId = setInterval(() => {
                const shuffledData = shuffleArray([...reupdatedData]); // Shuffle the data
                setData(shuffledData);
            }, 5000);

            return () => clearInterval(intervalId);
        };


        fetchData();


    }, []);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const customFont = {
        fontFamily: 'GmarketSansMedium',
    };
    return (
        <div className="bg-[#FFFFFF] min-h-screen" style={customFont}>
            <Header/>

            <div className="flex justify-end min-h-screen min-w-full items-center">
                {/*<div className="gradient-overlay"></div>*/}
                <img src={ReadingManga}
                     className=" w-[100%] h-[740px] object-cover opacity-80 relative"/>
                {/*<div className="w-[100%] h-[600px] absolute bg-[#000000] z-10 opacity-20 "></div>*/}
                <div className="w-[100%] h-[670px] absolute z-10">
                    <div
                        className="h-full w-full bg-gradient-to-r from-[#121212]  to-transparent"></div>
                </div>
                <img src={Logo} className="absolute mt-[250px] left-0 z-20"/>
                <div className="absolute mt-[510px] left-20 z-20 text-white text-5xl ">楽しく簡単に日本語を学んでみましょう！
                    : 일본어를 쉽고 재밌게 배워보세요!
                </div>
            </div>

            <div className=" flex flex-col bg-[#FFFFFF]">
                <div className="items-center text-7xl ml-[50px] mt-[100px]">
                    나에게 맞는 책 고르기<br/>
                    책을 선택하는 고민의 시간을 덜어드려요
                </div>
                <hr className="gradient-hr"/>
            </div>
            <div className=" text-[25px] my-10  px-[50px]">

                당신을 위한 무한한 만화의 세계로 초대합니다. 다양한 장르와 스토리, 다채로운 캐릭터들이 당신을 기다리고 있습니다. 환상적인 세계를 탐험하고 감동과 재미를 함께 느껴보세요. 우리의 풍부한
                만화 컬렉션은 당신의 호기심과 상상력을 자극할 것입니다. 지금 바로 시작해보세요!
            </div>
            {/*1번 슬라이드*/}
            <div className=" overflow-hidden mb-10">
                <div className="flex flex-row pb-10  animate-sliderC">
                    {[Manga15, Manga16, Manga17, Manga18, Manga19, Manga20, Manga21].map((image, index) => (
                        <img src={image} key={index}
                             className="w-[210px] h-[280px] mx-7  object-cover rounded-[15px] shadow-lg"/>
                    ))}
                    {[Manga15, Manga16, Manga17, Manga18, Manga19, Manga20, Manga21].map((image, index) => (
                        <img src={image} key={index}
                             className="w-[210px] h-[280px] mx-7 object-cover rounded-[15px] shadow-lg"/>
                    ))}
                </div>
            </div>
            {/*2번 슬라이드*/}
            <div className=" overflow-hidden mb-10">
                <div className="flex flex-row pb-10  animate-sliderB bg-[#FFFFFF]">
                    {[Manga8, Manga9, Manga10, Manga11, Manga12, Manga13, Manga14].map((image, index) => (
                        <img src={image} key={index}
                             className="w-[210px] h-[280px] mx-7  object-cover rounded-[15px] shadow-lg "/>
                    ))}
                    {[Manga8, Manga9, Manga10, Manga11, Manga12, Manga13, Manga14].map((image, index) => (
                        <img src={image} key={index}
                             className="w-[210px] h-[280px] mx-7 object-cover  rounded-[15px] shadow-lg"/>
                    ))}
                </div>
            </div>

            <div className="flex h-[100px] items-end text-7xl ml-[50px] mt-[200px]">
                맞춤형 퀴즈 서비스
            </div>
            <hr className="gradient-hr"/>
            {/*<div className="h-[200px]"></div>*/}
            <div className=" text-[25px] my-10  px-[50px]">
                <div className=" text-[25px] my-10 ">
                    만화 속에서 사용되는 단어들을 분석하여 사용자에게 맞춤형 학습 경험을 제공합니다. 각 페이지에 등장하는 말풍선을 추출하고, 해당 단어들의 빈도수를 카운트하여 단어 난이도를
                    측정합니다. 이를 토대로 사용자에게 최적화된 퀴즈를 제공하여 언어 능력을 향상시키는데 도움을 드립니다.
                </div>

                <div className="flex justify-evenly items-center">
                    <div className="flex flex-col justify-center items-center">
                        <img src={OnePieceSet}
                             className=" h-[300px] w-[300px] object-fill rounded-[15px] border-2 shadow-lg"/>
                        <div className="text-[25px] mt-10">만화 빅데이터</div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        {/*<img src={JapaneseWordCloud}*/}
                        {/*     className=" h-[300px] w-[300px] object-cover rounded-[15px] border-2 shadow-lg"/>*/}
                        <div className="rounded-[15px] shadow-lg h-[300px] w-[300px]"><SimpleWordcloud word={data}/>
                        </div>
                        <div className="text-[25px] mt-10">만화에 등장한 단어 빈도수 수집</div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src={OnePieceSet}
                             className=" h-[300px] w-[300px] object-fill rounded-[15px] border-2 shadow-lg"/>
                        <div className="text-[25px] mt-10">사용자 맞춤형 퀴즈 생성</div>
                    </div>
                </div>

            </div>


            <div className="flex h-[100px] items-end text-7xl ml-[50px] mt-[200px]">
                편리한 단어 검색
            </div>
            <hr className="gradient-hr"/>
            {/*<div className="h-[200px]"></div>*/}
            <div className=" text-[25px] my-10  px-[50px]">
                <div className=" text-[25px] my-10 ">
                    말풍선을 클릭하면 순식간에 단어의 뜻이 펼쳐집니다. 이 특별한 기능은 당신이 만화를 읽는 새로운 경험을 만날 수 있게 해줍니다. 매 순간 새로운 단어를 배우며, 이를 통해 언어의
                    세계로
                    더욱 깊게 빠져들어보세요. 단어의 뜻을 쉽고 빠르게 이해하며, 독해 능력을 향상시킬 수 있습니다. 우리의 기능은 당신의 학습을 즐겁고 효과적으로 이끌어줄 것입니다. 이제 당신의
                    만화
                    읽기를 더욱 풍부하고 유익한 경험으로 바꿔보세요!
                </div>

                <div className="flex justify-evenly items-center">
                    <div className="flex flex-col justify-center items-center">
                        <img src={SpeechDef}
                             className=" h-[600px] w-[800px] object-fill rounded-[15px] border-2 shadow-lg"/>
                        <div className="text-[25px] mt-10">말풍선을 클릭합니다</div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src={SpeechDef}
                             className=" h-[600px] w-[800px] object-fill rounded-[15px] border-2 shadow-lg"/>
                        <div className="text-[25px] mt-10">말풍선을 클릭합니다</div>
                    </div>
                </div>

            </div>

            <div className="h-[200px]"></div>

        </div>
    );
}


// const options = {
//     "rotations": 2,
//     "rotationAngles": [-90, 0],
// };
const sizes = [300, 300];

function SimpleWordcloud({word}) {
    // return <ReactWordcloud words={word}/>
    return <ReactWordcloud words={word}/>
}

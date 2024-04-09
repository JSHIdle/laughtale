import BlueHeader from "../../components/common/BlueHeader.tsx";
import Logo from '../../assets/Logo3.png';
import '../../styles/fontstyle.css';
import '../../styles/mainpagestyle.css';


// import AuthButton from "../../components/common/AuthButton.tsx";
// import MainBG from '../../assets/mainpageimage/mainbg.png';
import mainPageCartoon from '../../assets/mainpageimage/mainPageCartoon.jpg'
import userUpload from '../../assets/mainpageimage/userUpload.gif'
// import Manga1 from '../../assets/mainpageimage/mangas/manga_1.webp'
// import Manga2 from '../../assets/mainpageimage/mangas/manga_2.jpg'
// import Manga3 from '../../assets/mainpageimage/mangas/manga_3.jpg'
// import Manga4 from '../../assets/mainpageimage/mangas/manga_4.jpg'
// import Manga5 from '../../assets/mainpageimage/mangas/manga_5.png'
// import Manga6 from '../../assets/mainpageimage/mangas/manga_6.webp'
// import Manga7 from '../../assets/mainpageimage/mangas/manga_7.jfif'
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
import ebbinghausCurve from '../../assets/mainpageimage/ebbinghausCurve.jpg';

// import JapaneseWordCloud from '../../assets/mainpageimage/japwrcl3.jpg';
import ReactWordcloud from "react-wordcloud";
import {useEffect, useState, useRef} from "react";
import client from "../../apis";
// import {Button} from "@material-tailwind/react";
import {Link} from "react-router-dom";

export default function NewMain() {
    const [data, setData] = useState(null);

    // IntersectionObserver를 사용하기 위한 ref 생성
    const sectionRefs = useRef([]);
    sectionRefs.current = [];

    // 요소를 sectionRefs 배열에 추가하는 함수
    const addToRefs = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

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

        // IntersectionObserver 설정
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("opacity-100", "translate-y-0"); // 타겟 요소가 화면에 보일 때 클래스 추가
                        entry.target.classList.remove("opacity-0", "translate-y-10"); // 초기 상태 클래스 제거
                    } else { // 화면에서 벗어날 때
                        entry.target.classList.add('opacity-0', 'translate-y-10');
                        entry.target.classList.remove('opacity-100', 'translate-y-0');
                    }
                });
            },
            {
                threshold: 0.12, // 12%가 보일 때 콜백 함수 실행
            }
        );

        // 모든 참조된 요소에 대해 observer 등록
        sectionRefs.current.forEach((el) => observer.observe(el));

        return () => {
            sectionRefs.current.forEach((el) => observer.unobserve(el));
        };
    }, []);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // const customFont = {
    //     fontFamily: 'GmarketSansMedium',
    // };
    return (
        <div className="bg-[#FFFFFF] min-h-screen laughtale-font">
            <BlueHeader/>
            <div className="flex justify-end min-h-screen min-w-full items-center relative">
                {/*<div className="gradient-overlay"></div>*/}
                <img src={ReadingManga} alt="만화 읽는 사람 이미지"
                     className=" w-[100%] h-[740px] object-cover opacity-80 relative"/>

                {/*<div className="w-[100%] h-[600px] absolute bg-[#000000] z-10 opacity-20 "></div>*/}
                <div className="w-[100%] h-[670px] absolute z-10">
                    <div
                        className="h-full w-full bg-gradient-to-r from-[#121212]  to-transparent"></div>
                </div>
                <img src={Logo} alt="로고 이미지" className="absolute mt-[250px] left-0 z-20"/>
                <div className="absolute mt-[510px] left-20 z-20 text-white text-5xl ">楽しく簡単に日本語を学んでみましょう！
                    : 일본어를 쉽고 재밌게 배워보세요!
                </div>
                <div className=" absolute top-[50px] z-10 right-[125px] m-4">
                    <Link to="/analyze">
                        <div
                            className="bg-[#73ABE5] hover:bg-blue-500 text-white font-bold p-5  text-5xl shadow-lg rounded-t z-[200]">
                            漫<br/>画<br/>分<br/>析<br/>--<br/>만<br/>화<br/>분<br/>석
                        </div>
                    </Link>
                </div>
                <div className=" absolute top-[50px] z-10 right-[45px] m-4">
                    <Link to="/home">
                        <div
                            className="bg-[#73abe5] hover:bg-blue-500 text-white font-bold p-5  text-5xl shadow-lg rounded-t z-[200]">
                            漫<br/>画<br/>を<br/>読<br/>む<br/>--<br/>만<br/>화<br/>읽<br/>기
                        </div>
                    </Link>
                </div>
            </div>

            <div className=" flex flex-col bg-[#FFFFFF]">
                <div className="items-center text-7xl px-[150px] mt-[100px]">

                    <div
                        ref={addToRefs}
                        className="transition-all duration-1000 transform opacity-0 translate-y-10"
                    >
                        난이도에 맞춰 선별된 만화를 즐겨보세요.<br/>
                    </div>
                </div>
                <hr className="gradient-hr"/>
            </div>
            <div className=" text-[25px] my-10  px-[150px]">
                <div
                    ref={addToRefs}
                    className="transition-all duration-1000 transform opacity-0 translate-y-10"
                >
                    다양한 일본 만화의 세계로 당신을 초대합니다. 각 만화는 등장하는 단어의 난이도에 따라 분류되어 있어, 선택의 폭이 넓습니다.<br/> 캐릭터들이 여러분을 기다리고 있어요.
                    흥미진진한 이야기들과 함께 자연스럽게 일본어를 배워보세요. 지금 시작해보세요!

                </div>
            </div>
            {/*1번 슬라이드*/}
            <div className=" overflow-hidden mb-10">
                <div className="flex flex-row pb-10  animate-sliderC">
                    {[Manga15, Manga16, Manga17, Manga18, Manga19, Manga20, Manga21].map((image, index) => (
                        <img src={image} alt="만화 슬라이드 1-1" key={index}
                             className="w-[210px] h-[280px] mx-7  object-cover rounded-[15px] shadow-lg"/>
                    ))}
                    {[Manga15, Manga16, Manga17, Manga18, Manga19, Manga20, Manga21].map((image, index) => (
                        <img src={image} alt="만화 슬라이드 1-2" key={index}
                             className="w-[210px] h-[280px] mx-7 object-cover rounded-[15px] shadow-lg"/>
                    ))}
                </div>
            </div>
            {/*2번 슬라이드*/}
            <div className=" overflow-hidden mb-10">
                <div className="flex flex-row pb-10  animate-sliderB bg-[#FFFFFF]">
                    {[Manga8, Manga9, Manga10, Manga11, Manga12, Manga13, Manga14].map((image, index) => (
                        <img src={image} alt="만화 슬라이드 2-1" key={index}
                             className="w-[210px] h-[280px] mx-7  object-cover rounded-[15px] shadow-lg "/>
                    ))}
                    {[Manga8, Manga9, Manga10, Manga11, Manga12, Manga13, Manga14].map((image, index) => (
                        <img src={image} alt="만화 슬라이드 2-2" key={index}
                             className="w-[210px] h-[280px] mx-7 object-cover  rounded-[15px] shadow-lg"/>
                    ))}
                </div>
            </div>

            <div className="flex h-[100px] items-end text-7xl px-[150px] mt-[200px]">
                <div
                    ref={addToRefs}
                    className="transition-all duration-1000 transform opacity-0 translate-y-10"
                >
                    맞춤형 퀴즈로 일본어 실력을 한 단계 업그레이드하세요.
                </div>
            </div>
            <hr className="gradient-hr"/>
            {/*<div className="h-[200px]"></div>*/}
            <div className=" text-[25px] my-10  px-[50px]">
                <div className=" text-[25px] my-10 px-[100px]">

                    <div
                        ref={addToRefs}
                        className="transition-all duration-1000 transform opacity-0 translate-y-10"
                    >
                        만화 속에서 사용되는 단어들을 분석하여 사용자에게 맞춤형 학습 경험을 제공합니다. 각 페이지에 등장하는 말풍선을 추출하고, 해당 단어들의 빈도수를 카운트하여 단어 난이도를
                        측정합니다. 이를 토대로 사용자에게 최적화된 퀴즈를 제공하여 일본어 실력을 향상시키는데 도움을 드립니다.
                    </div>
                </div>

                <div
                    ref={addToRefs}
                    className="transition-all duration-1000 transform opacity-0 translate-y-10"
                >
                    <div className="flex justify-evenly items-center">
                        <div className="flex flex-col justify-center items-center">
                            <img src={OnePieceSet} alt="원피스 세트 이미지"
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
                            <img src={ebbinghausCurve} alt="원피스 책 이미지"
                                 className=" h-[300px] w-[300px] object-fill rounded-[15px] border-2 shadow-lg"/>
                            <div className="text-[25px] mt-10">사용자 맞춤형 퀴즈 생성</div>
                        </div>
                    </div>
                </div>


            </div>


            <div className="flex h-[100px] items-end text-7xl px-[150px] mt-[200px]">

                <div
                    ref={addToRefs}
                    className="transition-all duration-1000 transform opacity-0 translate-y-10"
                >
                    편리한 단어 검색
                </div>
            </div>
            <hr className="gradient-hr"/>
            {/*<div className="h-[200px]"></div>*/}
            <div className=" text-[25px] my-10  px-[50px]">
                <div className=" text-[25px] my-10 px-[100px]">
                    <div
                        ref={addToRefs}
                        className="transition-all duration-1000 transform opacity-0 translate-y-10"
                    >
                        만화를 읽다가 모르는 단어가 등장하면 말풍선을 클릭해 보세요! 따로 검색해볼 필요 없이, 단어의 뜻과 발음을 제공합니다. <br/>
                        이제 만화 읽기를 통해 더욱 풍부하고 유익한 학습 경험을 누리세요.
                    </div>
                </div>

                <div className="flex justify-evenly items-center">
                    <div
                        ref={addToRefs}
                        className="transition-all duration-1000 transform opacity-0 translate-y-10"
                    >
                        <div className="flex flex-col justify-center items-center">
                            <img src={mainPageCartoon} alt="만화보기 화면"
                                 className=" h-[500px] w-[870px] object-fill rounded-[15px] border-2 shadow-lg"/>
                            <div className="text-[25px] mt-10">말풍선을 클릭합니다</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex h-[100px] items-end text-7xl px-[150px] mt-[200px]">

                <div
                    ref={addToRefs}
                    className="transition-all duration-1000 transform opacity-0 translate-y-10"
                >
                    원하는 만화를 직접 업로드해서 분석
                </div>
            </div>
            <hr className="gradient-hr"/>
            {/*<div className="h-[200px]"></div>*/}
            <div className=" text-[25px] my-10  px-[50px]">
                <div className=" text-[25px] my-10 px-[100px]">
                    <div
                        ref={addToRefs}
                        className="transition-all duration-1000 transform opacity-0 translate-y-10"
                    >
                        당신이 가지고 있는 만화를 업로드하면 분석해드립니다! <br/>
                        업로드한 만화 속 단어들의 뜻부터 난이도, 발음까지 쉽고 빠르게 확인하세요
                    </div>
                </div>

                <div className="flex justify-evenly items-center">
                    <div
                        ref={addToRefs}
                        className="transition-all duration-1000 transform opacity-0 translate-y-10"
                    >
                        <div className="flex flex-col justify-center items-center">
                            <img src={userUpload} alt="만화보기 화면"
                                 className=" h-[500px] w-[870px] object-fill rounded-[15px] border-2 shadow-lg"/>
                            {/*<div className="text-[25px] mt-10">말풍선을 클릭합니다</div>*/}
                        </div>
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
// const sizes = [300, 300];

function SimpleWordcloud({word}) {
    // return <ReactWordcloud words={word}/>
    return <ReactWordcloud words={word}/>
}

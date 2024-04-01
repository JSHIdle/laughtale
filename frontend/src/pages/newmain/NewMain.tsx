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

export default function NewMain() {
    const OrbitRegular = {
        fontFamily: 'Orbit-Regular',
    };
    return (
        <div className="bg-[#FFFFFF] min-h-screen" style={OrbitRegular}>
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

            {/*<div className="fixed bottom-[100px] left-1/2 transform -translate-x-1/2 m-4 z-1100">*/}
            {/*    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-[100px] w-[200px] rounded-full">*/}
            {/*        버튼*/}
            {/*    </button>*/}
            {/*</div>*/}

            {/*<div className="flex flex-col justify-center items-center z-50 w-full h-full">*/}
            {/*    <img src={Logo} className="object-cover -translate-y-[50px] opacity-90 "/>*/}
            {/*    <div className="text-5xl  font-bold -translate-y-[50px] opacity-80 mb-5 "*/}
            {/*    >LaughTale에 오신 것을*/}
            {/*        환영합니다!*/}
            {/*    </div>*/}
            {/*    <div*/}
            {/*        className="text-4xl  font-bold text-center -translate-y-[50px] w-[1000px] opacity-80 mb-5 "*/}
            {/*    >LaughTale과*/}
            {/*        함께 일본어를 배우는 흥미진진한 여정에 동참해보세요! 완전한 초보자이든 언어 실력을 향상시키려는 분이든, LaughTale은 일본 문화의 풍부함을 언어를 통해 탐험하는 재미있고*/}
            {/*        효과적인 방법을 제공합니다.*/}
            {/*    </div>*/}
            {/*    <div className="text-4xl  font-bold text-center -translate-y-[50px] w-[1000px] opacity-80 "*/}
            {/*    >저희*/}
            {/*        플랫폼은 일본어*/}
            {/*        학습을 즐거운 경험으로 만들어 드립니다. 지루한 암기를 잊고 웃음과 흥분이 넘치는 인터랙티브 레슨을 즐겨보세요. 혁신적인 접근법으로, 일본어를 정복하는 것이 과제가 아닌 즐거운*/}
            {/*        모험으로 바뀝니다.*/}
            {/*    </div>*/}
            {/*    <div className=" flex">*/}
            {/*        <button*/}
            {/*            className="bg-blue-400 hover:bg-blue-700  text-5xl font-bold h-[100px] w-[200px] rounded-full mr-16">*/}
            {/*            만화읽기*/}
            {/*        </button>*/}
            {/*        <button*/}
            {/*            className="bg-blue-400 hover:bg-blue-700  text-5xl font-bold h-[100px] w-[200px] rounded-full ml-16">*/}
            {/*            분석하기*/}
            {/*        </button>*/}

            {/*    </div>*/}

            {/*</div>*/}
            {/*<div className="mainCustomSlider overflow-y-hidden">*/}
            {/*    <div className="h-[100px]"></div>*/}
            {/*1번 슬라이드*/}
            {/*<div className=" overflow-hidden mb-10">*/}
            {/*    <div className="flex flex-row pb-10  animate-sliderA">*/}
            {/*        {[Manga1, Manga2, Manga3, Manga4, Manga5, Manga6, Manga7].map((image, index) => (*/}
            {/*            <img src={image} key={index}*/}
            {/*                 className="w-[210px] h-[280px] mx-7  object-cover"/>*/}
            {/*        ))}*/}
            {/*        {[Manga1, Manga2, Manga3, Manga4, Manga5, Manga6, Manga7].map((image, index) => (*/}
            {/*            <img src={image} key={index}*/}
            {/*                 className="w-[210px] h-[280px] mx-7 object-cover"/>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*2번 슬라이드*/}
            {/*<div className=" overflow-hidden mb-10">*/}
            {/*    <div className="flex flex-row pb-10  animate-sliderB bg-[#FFFFFF]">*/}
            {/*        {[Manga8, Manga9, Manga10, Manga11, Manga12, Manga13, Manga14].map((image, index) => (*/}
            {/*            <img src={image} key={index}*/}
            {/*                 className="w-[210px] h-[280px] px-7  object-cover  bg-[#FFFFFF] "/>*/}
            {/*        ))}*/}
            {/*        {[Manga8, Manga9, Manga10, Manga11, Manga12, Manga13, Manga14].map((image, index) => (*/}
            {/*            <img src={image} key={index}*/}
            {/*                 className="w-[210px] h-[280px] px-7 object-cover  bg-[#FFFFFF] "/>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*3번 슬라이드*/}
            {/*<div className=" overflow-hidden">*/}
            {/*    <div className="flex flex-row pb-10  animate-sliderC bg-[#FFFFFF]">*/}
            {/*        {[Manga15, Manga16, Manga17, Manga18, Manga19, Manga20, Manga21].map((image, index) => (*/}
            {/*            <img src={image} key={index}*/}
            {/*                 className="w-[210px] h-[280px] px-7  object-cover  bg-[#FFFFFF] "/>*/}
            {/*        ))}*/}
            {/*        {[Manga15, Manga16, Manga17, Manga18, Manga19, Manga20, Manga21].map((image, index) => (*/}
            {/*            <img src={image} key={index}*/}
            {/*                 className="w-[210px] h-[280px] px-7 object-cover  bg-[#FFFFFF] "/>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*</div>*/}


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
                모르는 단어를 즉시 검색!
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
            <div className="flex h-[100px] items-end text-7xl ml-[50px] mt-[200px]">
                모르는 단어를 즉시 검색!
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
        <div className="h-[250px]"></div>
        </div>
    );
}

import Header from "../../components/common/Header.tsx";
import Logo from '../../assets/logo.png';
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

export default function NewMain() {

    return (
        <div className="bg-[#121212] min-h-screen">
            <Header/>
            {/*<div className="fixed bottom-[100px] left-1/2 transform -translate-x-1/2 m-4 z-1100">*/}
            {/*    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-[100px] w-[200px] rounded-full">*/}
            {/*        버튼*/}
            {/*    </button>*/}
            {/*</div>*/}
            <div className="flex flex-col justify-center items-center absolute z-50 w-full h-full">
                <img src={Logo} className="object-cover -translate-y-[50px] opacity-90 "/>
                <div className="text-5xl text-white font-bold -translate-y-[50px] opacity-80 mb-5">LaughTale에 오신 것을
                    환영합니다!
                </div>
                <div
                    className="text-4xl text-white font-bold text-center -translate-y-[50px] w-[1000px] opacity-80 mb-5">LaughTale과
                    함께 일본어를 배우는 흥미진진한 여정에 동참해보세요! 완전한 초보자이든 언어 실력을 향상시키려는 분이든, LaughTale은 일본 문화의 풍부함을 언어를 통해 탐험하는 재미있고
                    효과적인 방법을 제공합니다.
                </div>
                <div className="text-4xl text-white font-bold text-center -translate-y-[50px] w-[1000px] opacity-80 ">저희
                    플랫폼은 일본어
                    학습을 즐거운 경험으로 만들어 드립니다. 지루한 암기를 잊고 웃음과 흥분이 넘치는 인터랙티브 레슨을 즐겨보세요. 혁신적인 접근법으로, 일본어를 정복하는 것이 과제가 아닌 즐거운
                    모험으로 바뀝니다.
                </div>
                <div className=" flex">
                    <button
                        className="bg-blue-400 hover:bg-blue-700 text-white text-5xl font-bold h-[100px] w-[200px] rounded-full mr-16">
                        만화읽기
                    </button>
                    <button
                        className="bg-blue-400 hover:bg-blue-700 text-white text-5xl font-bold h-[100px] w-[200px] rounded-full ml-16">
                        분석하기
                    </button>

                </div>

            </div>
            <div className="mainCustomSlider overflow-y-hidden">
                <div className="h-[100px]"></div>
                {/*1번 슬라이드*/}
                <div className=" overflow-hidden mb-10">
                    <div className="flex flex-row pb-10  animate-sliderA bg-[#121212]">
                        {[Manga1, Manga2, Manga3, Manga4, Manga5, Manga6, Manga7].map((image, index) => (
                            <img src={image} key={index}
                                 className="w-[300px] h-[400px] px-7  object-cover  bg-[#121212] "/>
                        ))}
                        {[Manga1, Manga2, Manga3, Manga4, Manga5, Manga6, Manga7].map((image, index) => (
                            <img src={image} key={index}
                                 className="w-[300px] h-[400px] px-7 object-cover  bg-[#121212] "/>
                        ))}
                    </div>
                </div>
                {/*2번 슬라이드*/}
                <div className=" overflow-hidden mb-10">
                    <div className="flex flex-row pb-10  animate-sliderB bg-[#121212]">
                        {[Manga8, Manga9, Manga10, Manga11, Manga12, Manga13, Manga14].map((image, index) => (
                            <img src={image} key={index}
                                 className="w-[300px] h-[400px] px-7  object-cover  bg-[#121212] "/>
                        ))}
                        {[Manga8, Manga9, Manga10, Manga11, Manga12, Manga13, Manga14].map((image, index) => (
                            <img src={image} key={index}
                                 className="w-[300px] h-[400px] px-7 object-cover  bg-[#121212] "/>
                        ))}
                    </div>
                </div>
                {/*3번 슬라이드*/}
                {/*<div className=" overflow-hidden">*/}
                {/*    <div className="flex flex-row pb-10  animate-sliderC bg-[#121212]">*/}
                {/*        {[Manga15, Manga16, Manga17, Manga18, Manga19, Manga20, Manga21].map((image, index) => (*/}
                {/*            <img src={image} key={index}*/}
                {/*                 className="w-[300px] h-[400px] px-7  object-cover  bg-[#121212] "/>*/}
                {/*        ))}*/}
                {/*        {[Manga15, Manga16, Manga17, Manga18, Manga19, Manga20, Manga21].map((image, index) => (*/}
                {/*            <img src={image} key={index}*/}
                {/*                 className="w-[300px] h-[400px] px-7 object-cover  bg-[#121212] "/>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>


            <div className="text-white flex flex-col bg-[#121212]">
                <div className="h-[200px]"></div>
                <div className="grid grid-rows-1 h-[100px] items-center text-7xl text-center">
                    만화를 더욱 풍부하게 즐기세요!
                </div>
                <div className="h-[200px]"></div>
                <div className="flex justify-evenly w-full">
                    <div className="flex flex-col justify-center items-center">
                        <img src={SpeechDef} className=" h-[500px] w-[700px] object-fill"/>
                        <div className="w-[750px] text-[25px] my-10">
                            말풍선을 클릭하면 순식간에 단어의 뜻이 펼쳐집니다. 우리의 감각적인 기능으로 당신은 만화를 읽는 새로운 경험을 만나게 될 것입니다. 지금 시작하여 단어의 세계로
                            빠져보세요!
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                        <img src={SpeechDef} className=" max-h-[500px] object-fill "/>
                        <div className="w-[750px] text-[25px] my-10">
                            말풍선을 클릭하면 순식간에 단어의 뜻이 펼쳐집니다. 우리의 감각적인 기능으로 당신은 만화를 읽는 새로운 경험을 만나게 될 것입니다. 지금 시작하여 단어의 세계로
                            빠져보세요!
                        </div>
                    </div>
                </div>
                <div className="h-[200px]"></div>
                <div className="flex justify-evenly w-full">
                    <div className="flex flex-col justify-center items-center">
                        <img src={SpeechDef} className=" h-[500px] w-[700px] object-fill"/>
                        <div className="w-[750px] text-[25px] my-10">
                            말풍선을 클릭하면 순식간에 단어의 뜻이 펼쳐집니다. 우리의 감각적인 기능으로 당신은 만화를 읽는 새로운 경험을 만나게 될 것입니다. 지금 시작하여 단어의 세계로
                            빠져보세요!
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                        <img src={SpeechDef} className=" max-h-[500px] object-fill "/>
                        <div className="w-[750px] text-[25px] my-10">
                            말풍선을 클릭하면 순식간에 단어의 뜻이 펼쳐집니다. 우리의 감각적인 기능으로 당신은 만화를 읽는 새로운 경험을 만나게 될 것입니다. 지금 시작하여 단어의 세계로
                            빠져보세요!
                        </div>
                    </div>
                </div>
                <div className="h-[200px]"></div>
                <div className="h-[200px]"></div>

            </div>


        </div>
    );
}

import Header from "../../components/common/Header.tsx";
import Logo from '../../assets/logo.png';
import AuthButton from "../../components/common/AuthButton.tsx";
import Winter from '../../assets/mainpageimage/winter.webp'
import MainBG from '../../assets/mainpageimage/mainbg.png';
import SpeechDef from '../../assets/mainpageimage/speech_def.jpg'

export default function NewMain() {

    return (
        <div className="bg-[#1D1D21] min-h-screen">
            <Header/>
            <div className="bg-[#1D1D21] min-h-screen relative">
                <Header/>
                <div className="flex flex-row justify-center">
                    <div className="absolute inset-0 flex justify-center items-center">
                        <img src={MainBG} className="min-w-full max-h-full object-cover"/>
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center pb-16 mb-16 opacity-87">
                        <img src={Logo} className="min-w-fit max-h-full object-cover"/>
                    </div>
                </div>
            </div>

            {/* 첫 번째 기능*/}
            <div className="text-white flex flex-col bg-[#121212]">
                <div className="grid  grid-rows-1 h-[100px]"></div>
                <div className="grid grid-rows-1 h-[100px]">
                    <div className="text-7xl text-center">
                        만화를 더욱 풍부하게 즐기세요!
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full  ">
                    <img src={SpeechDef} className=" max-h-[600px] object-contain rounded-[40px]"/>
                    <div className="flex justify-center items-center ">
                        <div className="max-w-[1000px] text-[20px] mt-10">
                            말풍선을 클릭하면 순식간에 단어의 뜻이 펼쳐집니다. 우리의 감각적인 기능으로 당신은 만화를 읽는 새로운 경험을 만나게 될 것입니다. 지금 시작하여 단어의 세계로
                            빠져보세요!
                        </div>
                    </div>
                </div>
            </div>
            {/*두 번째 기능*/}
            <div className="text-white flex flex-col bg-[#1D1D21]">
                <div className="grid  grid-rows-1 h-[100px]"></div>
                <div className="grid grid-rows-1 h-[100px]">
                    <div className="text-7xl text-center">
                        만화를 더욱 풍부하게 즐기세요!
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full  ">
                    <img src={SpeechDef} className=" max-h-[600px] object-contain rounded-[40px]"/>
                    <div className="flex justify-center items-center ">
                        <div className="max-w-[1000px] text-[20px] mt-10">
                            말풍선을 클릭하면 순식간에 단어의 뜻이 펼쳐집니다. 우리의 감각적인 기능으로 당신은 만화를 읽는 새로운 경험을 만나게 될 것입니다. 지금 시작하여 단어의 세계로
                            빠져보세요!
                        </div>
                    </div>
                </div>
            </div>
            {/*세 번째 기능*/}
            <div className="text-white flex flex-col bg-[#121212]">
                <div className="grid  grid-rows-1 h-[100px]"></div>
                <div className="grid grid-rows-1 h-[100px]">
                    <div className="text-7xl text-center">
                        만화를 더욱 풍부하게 즐기세요!
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full  ">
                    <img src={SpeechDef} className=" max-h-[600px] object-contain rounded-[40px]"/>
                    <div className="flex justify-center items-center ">
                        <div className="max-w-[1000px] text-[20px] mt-10">
                            말풍선을 클릭하면 순식간에 단어의 뜻이 펼쳐집니다. 우리의 감각적인 기능으로 당신은 만화를 읽는 새로운 경험을 만나게 될 것입니다. 지금 시작하여 단어의 세계로
                            빠져보세요!
                        </div>
                    </div>
                </div>
            </div>
            {/*네 번째 기능*/}
            <div className="text-white flex flex-col bg-[#121212]">
                <div className="grid  grid-rows-1 h-[100px]"></div>
                <div className="grid grid-rows-1 h-[100px]">
                    <div className="text-7xl text-center">
                        만화를 더욱 풍부하게 즐기세요!
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full  ">
                    <img src={SpeechDef} className=" max-h-[600px] object-contain rounded-[40px]"/>
                    <div className="flex justify-center items-center ">
                        <div className="max-w-[1000px] text-[20px] mt-10">
                            말풍선을 클릭하면 순식간에 단어의 뜻이 펼쳐집니다. 우리의 감각적인 기능으로 당신은 만화를 읽는 새로운 경험을 만나게 될 것입니다. 지금 시작하여 단어의 세계로
                            빠져보세요!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import {useRef, useState} from 'react';
import QuizSlider from "./QuizSlider.tsx";
import Progressbar from "./Progressbar.tsx";
import Header from "../common/Header.tsx";


const Quiz = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const dummyData = Array.from({ length: 5 }, (_, index) => ({
    id: index,
    text: `Q${index + 1}. 다음 문제를 풀어보세요 `
}));

    const updateCurrentSlide = (index) => {
        setCurrentSlide(index);
    };

    const handleNumberClick = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    return (
        <div className="bg-[#1D1D21] min-h-screen">
            <Header/>
            <div className="max-w-[450px] m-auto">
                <div className="flex justify-center pt-6">
                    <Progressbar value={currentSlide} max={dummyData.length} onNumberClick={handleNumberClick} />
                </div>
            </div>
            <div className="text-white max-w-[1200px] m-auto">
                <QuizSlider slides={dummyData} updateCurrentSlide={updateCurrentSlide} sliderRef = {sliderRef}  />
            </div>
        </div>
    )
}

export default Quiz;
import { useState } from 'react';
import QuizSlider from "./QuizSlider.tsx";
import Progressbar from "./Progressbar.tsx";

const Quiz = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const dummyData = Array.from({ length: 5 }, (_, index) => ({
    id: index,
    text: `Q${index + 1}. 다음 문제를 풀어보세요 `
}));

    const updateCurrentSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="bg-[#212529] min-h-screen">
            <div className="max-w-[450px] m-auto">
                <div className="flex justify-center pt-24">
                    <Progressbar value={currentSlide} max={dummyData.length}/>
                </div>
            </div>
            <div className="text-white max-w-[1000px] m-auto">
                <QuizSlider slides={dummyData} updateCurrentSlide={updateCurrentSlide} />
            </div>
        </div>
    )
}

export default Quiz;
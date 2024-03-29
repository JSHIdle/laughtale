import { useRef, useState} from 'react';
import QuizSlider from "./QuizSlider.tsx";
import Progressbar from "./Progressbar.tsx";
import Header from "../common/Header.tsx";

import { useQuery } from '@tanstack/react-query';
import getQuizInfo from './getQuizInfo.tsx';

const Quiz = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const quizId = 7;
    const { data: quizData, isLoading, error } = useQuery({
        queryKey: ['quiz', quizId],
        queryFn: () => getQuizInfo(quizId)
    });

    const updateCurrentSlide = (index) => {
        setCurrentSlide(index);
    };

    const handleNumberClick = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    console.log(quizData);

    return (
        <div className="bg-[#121212] min-h-screen">
            <Header/>
            <div className="max-w-[450px] m-auto">
                <div className="flex justify-center pt-6">
                    {quizData && <Progressbar value={currentSlide} max={quizData.length} onNumberClick={handleNumberClick}/>}
                </div>
            </div>
            <div className="text-white max-w-[1200px] m-auto">
                {quizData && <QuizSlider slides={quizData} updateCurrentSlide={updateCurrentSlide} sliderRef = {sliderRef}/>}
            </div>
        </div>
    )
}

export default Quiz;
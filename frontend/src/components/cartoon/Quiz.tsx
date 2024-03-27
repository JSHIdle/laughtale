import { useRef, useState} from 'react';
import QuizSlider from "./QuizSlider.tsx";
import Progressbar from "./Progressbar.tsx";
import Header from "../common/Header.tsx";

import { useQuery } from '@tanstack/react-query';
import getQuizInfo from './getQuizInfo.tsx';

const Quiz = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
//     const dummyData = Array.from({ length: 5 }, (_, index) => ({
//     id: index,
//     text: `Q${index + 1}. 다음 문제를 풀어보세요 `
// }));

    // const [data, setData] = useState(null);
    // // api 연결
    // useEffect(() => {
    //     client.get(`/quiz/${id}`
    //     ).then((response) => {
    //         setData(response.data);
    //     })
    //         .catch((error) => {
    //             console.error("There was an error!", error);
    //         });
    // }); // 빈 배열로 컴포넌트가 마운트될때만 실행되도록.

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
        <div className="bg-[#1D1D21] min-h-screen">
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
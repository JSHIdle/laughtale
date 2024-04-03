import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './animations.css';

const QuizCountdown = () => {
    const navigate = useNavigate();
    const { chapterId } = useParams();
    const [countDown, setCountDown] = useState(3);

    useEffect(() => {
        if (countDown > 0) {
            const timerId = setTimeout(() => setCountDown(countDown - 1), 1000);
            return () => clearTimeout(timerId);
        } else {
            navigate(`/quiz/new/${chapterId}`);
        }
    }, [countDown, navigate, chapterId]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#73ABE5]" style={{ height: 'calc(100vh * 1.1111)' }}>
            {countDown > 0 ? (
                <div className="w-96 h-96 flex items-center justify-center">
                <div
                    key={countDown} // key 프로퍼티 추가
                    className=" laughtale-font text-white text-10xl font-bold"
                    style={{
                        animation: "counting 1s ease-in-out forwards",
                    }}
                >
                    {countDown}
                </div>
                </div>
            ) : (
                <div
                    className=" laughtale-font text-white text-xl transition-opacity duration-1000 ease-in-out"
                    style={{opacity: countDown === 0 ? 1 : 0}}
                >
                </div>
            )}
        <div className=" laughtale-font mt-12 text-3xl font-bold text-white">
            곧 퀴즈가 시작됩니다
        </div>
</div>
)
    ;
};

export default QuizCountdown;

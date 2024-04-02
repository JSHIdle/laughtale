import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@material-tailwind/react";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'; // 아이콘 추가

type QuizButtonProps = {
    chapterId: number;
    mangaId: number;
};

const QuizButton: React.FC<QuizButtonProps> = ({ chapterId, mangaId }) => {
    const navigate = useNavigate();

    const handlePreviousClick = () => {
        navigate(`/cartoon/${mangaId}/viewer/${chapterId - 1}`);
    };

    const handleNextClick = () => {
        navigate(`/cartoon/${mangaId}/viewer/${chapterId + 1}`);
    };

    const handleQuizButtonClick = () => {
        navigate(`/quiz/new/${chapterId}/cnt`);
    };

    return (
        <div className="flex justify-center items-center space-x-4 p-4 m-10 rounded shadow">
            <MdChevronLeft
                className="cursor-pointer text-5xl"
                onClick={handlePreviousClick}
            />
            <button
                onClick={handleQuizButtonClick}
                className="text-5xl py-6 px-12 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-3xl"
            >
                퀴즈 풀면서 단어 학습하기!
            </button>
            <MdChevronRight
                className="cursor-pointer text-5xl"
                onClick={handleNextClick}
            />
        </div>
    );
};

export default QuizButton;

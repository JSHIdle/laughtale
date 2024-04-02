import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import Header from "../common/Header.tsx";

const Quizcount =()=> {
    const navigate = useNavigate();
    const [countDown, setCountDown] = useState(4); // 시작 카운트다운 3초로 설정

    const {chapterId} = useParams();

    useEffect(() => {
        if (countDown > 0) {
            setTimeout(() => setCountDown(countDown - 1), 1000);
            console.log(countDown);
        } else {
            // 카운트다운이 0이 되면 퀴즈 시작
            navigate(`/quiz/new/${chapterId}`);
        }
    }, [countDown]);
    return(
        <div className="flex flex-col bg-[#ffffff]" style={{height: 'calc(100vh * 1.1111)'}}>
            <div className="text-black flex justify-center items-center flex-1 h-[100px]"> 곧 퀴즈가 시작됩니다 </div>
            <div className="text-black flex justify-center items-center flex-1 text-5xl">
                {
                    countDown > 1
                        ? (
                            <div>{countDown-1}</div>
                        )
                        : "Start!"
                }
            </div>
        </div>);
}
export default Quizcount;


// LevelCartoons.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LevelCartoonGrid from "../../components/main/LevelCartoonGrid";
import BlueHeader from '../../components/common/BlueHeader';


const LevelCartoons = () => {
    const { level } = useParams();
    const [cartoons, setCartoons] = useState([]);

    useEffect(() => {
        const fetchCartoonsByLevel = async () => {
            // level과 page 번호에 따라 URL 구성
            const url = `https://j10a705.p.ssafy.io/api/manga/${level}?page=0&size=12`;
            const response = await fetch(url);
            const data = await response.json();

            console.log("API 응답 데이터:", data); // API 응답 데이터 콘솔에 출력

            const cartoonsData = data.content.map(cartoon => ({
                imageUrl: cartoon.thumbnail, // API 응답의 thumbnail을 imageUrl로 매핑
                title: cartoon.title,
                link: `/cartoon/${cartoon.id}` // 만화 상세보기 페이지로의 링크 구성
            }));

            console.log("변환된 cartoonsData:", cartoonsData); // 변환된 데이터 콘솔에 출력


            setCartoons(cartoonsData);
        };
        fetchCartoonsByLevel();
    }, [level]); // level이 변경될 때마다 데이터를 다시 불러옴


    return (
        <div className="bg-[#212529] min-h-screen text-black">
            <BlueHeader/>
            <LevelCartoonGrid cartoons={cartoons} level={parseInt(level, 10)}/>
        </div>
    );
};

export default LevelCartoons;

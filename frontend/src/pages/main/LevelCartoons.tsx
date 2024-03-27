// LevelCartoons.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LevelCartoonGrid from "../../components/main/LevelCartoonGrid";
import Header from '../../components/common/Header';

// import cartoons1 from "../../components/main/sampleData/Cartoons1.ts";


const LevelCartoons = () => {
    const { level } = useParams();
    const [cartoons, setCartoons] = useState([]);

    useEffect(() => {
        const fetchCartoonsByLevel = async () => {
            // level과 page 번호에 따라 URL 구성
            // 여기서는 페이지 번호를 1로 설정하였으나, 필요에 따라 변경 가능
            const response = await fetch('https://j10a705.p.ssafy.io/api/manga/level/0/1');
            const data = await response.json();

            console.log("API 응답 데이터:", data); // API 응답 데이터 콘솔에 출력

            const cartoonsData = data.content.map(cartoon => ({
                imageUrl: cartoon.thumbnail, // API 응답의 thumbnail을 imageUrl로 매핑
                title: cartoon.title,
                authors: '', // authors 정보가 없으므로 빈 문자열로 설정
                rating: 0, // rating 정보가 없으므로 0으로 설정
                link: `/cartoon/${cartoon.id}` // 만화 상세보기 페이지로의 링크 구성
            }));

            console.log("변환된 cartoonsData:", cartoonsData); // 변환된 데이터 콘솔에 출력


            setCartoons(cartoonsData);
        };
        fetchCartoonsByLevel();
    }, [level]); // level이 변경될 때마다 데이터를 다시 불러옴

    // 여기서 `level`을 이용하여 만화 데이터를 가져오거나 필터링할 수 있습니다.
    // 예를 들어, API 호출을 통해 해당 레벨의 만화 데이터를 가져오는 로직을 구현할 수 있습니다.


    return (
        <div className="bg-[#212529] min-h-screen text-white">
            <Header/>
            <LevelCartoonGrid cartoons={cartoons} level={parseInt(level, 10)}/>
        </div>
    );
};

export default LevelCartoons;

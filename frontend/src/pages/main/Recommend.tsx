import React, { useEffect, useState } from 'react';

import Header from '../../components/common/Header';
import CartoonGrid from "../../components/main/CartoonGrid";
import cartoons1 from "../../components/main/sampleData/Cartoons1.ts";
import cartoons2 from "../../components/main/sampleData/Cartoons2.ts";
import cartoons3 from "../../components/main/sampleData/Cartoons3.ts";
import cartoons4 from "../../components/main/sampleData/Cartoons4.ts";

import RecentSlider from '../../components/main/RecentSlider';
import '../../index.css'

const Recommend = () => {

    //레벨별 만화 4개씩 불러오기
    const [cartoons, setCartoons] = useState([]);
    useEffect(() => {
        // API 요청을 통해 만화 데이터를 가져옵니다.
        const fetchCartoons = async () => {
            const response = await fetch('https://j10a705.p.ssafy.io/api/manga/level');
            const data = await response.json();

            console.log("여기 옴 ??")
            console.log(data)
            // 상태에 응답 데이터를 저장합니다.
            setCartoons(data);
        };
        fetchCartoons();
    }, []);
    // 데이터가 없으면 로딩 메시지를 표시합니다.
    if (cartoons.length === 0) {
        return <div>Loading...</div>;
    }



    return (
        <div className="bg-[#121212] min-h-screen text-white">
            <Header/>
            <div className="mx-auto recent_wrap" style={{maxWidth: '950px'}}>
            <RecentSlider/>
            </div>
            {cartoons.map((cartoonData, index) => (
                <CartoonGrid key={index} cartoons={cartoonData.content} level={index + 1} />
            ))}


            <CartoonGrid cartoons={cartoons1} level={1}/>
            <CartoonGrid cartoons={cartoons2} level={2}/>
            <CartoonGrid cartoons={cartoons3} level={3}/>
            <CartoonGrid cartoons={cartoons4} level={4}/>
        </div>
    );
}

export default Recommend;

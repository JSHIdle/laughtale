import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import CartoonGrid from "../../components/main/CartoonGrid";
import RecentWord from '../../components/main/RecentWord.tsx';
import '../../index.css'
import NavBar from "./NavBar.tsx";

const Recommend = () => {
    const [selectedLevel, setSelectedLevel] = useState(1);
    const [filteredCartoons, setFilteredCartoons] = useState([]);
    const [cartoons, setCartoons] = useState([]);
    useEffect(() => {
        // API 요청을 통해 만화 데이터를 가져옵니다.
        const fetchCartoons = async () => {
            const response = await fetch('https://j10a705.p.ssafy.io/api/manga?page=0&size=5');
            const data = await response.json();
            console.log("api전체 데이터",data)
            setCartoons(data);
        };
        fetchCartoons();
    }, []);

    useEffect(() => {
        if(cartoons.length >= selectedLevel && cartoons[selectedLevel - 1] !== undefined){
            const levelCartoons = cartoons[selectedLevel - 1] || []; // cartoons 속성이 있는지 확인하고, 없으면 빈 배열 사용
            const updatedFilteredCartoons = levelCartoons.slice(0, 6);
            setFilteredCartoons(updatedFilteredCartoons);
        } else {
            setFilteredCartoons([]);
        }
    }, [cartoons, selectedLevel]);

    return (

        <div className="bg-[#ffffff] min-h-screen text-black">
            <Header/>
            <div className="mx-auto recent_wrap" style={{maxWidth: '950px'}}>
            </div>
            <RecentWord/>
            <NavBar selectedLevel={selectedLevel} onSelectLevel={setSelectedLevel} />
            <div className="flex justify-center">
            <CartoonGrid cartoons={filteredCartoons} level={selectedLevel} />
            </div>
            {/*{cartoons.map((cartoonData, index) => (*/}
            {/*    <CartoonGrid key={index} cartoons={cartoonData} level={index + 1} />*/}
            {/*))}*/}
        </div>
    );
}

export default Recommend;
import React, { useEffect, useState } from 'react';
import BlueHeader from '../../components/common/BlueHeader';
import CartoonGrid from "../../components/main/CartoonGrid";
import '../../index.css'
import NavBar from "./NavBar.tsx";

import cartoonstudy from "../../assets/main/cartoonstudy.jpg";
import MainText from "./MainText.tsx";
import CartoonCard from "../../components/main/CartoonCard.tsx";
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
        <div className="bg-[#ffffff] text-black laughtale-font" style={{height: 'calc(100vh * 1.1111)'}}>
            <BlueHeader/>
            <div className="w-full flex justify-center">
                <div className="flex justify-center font-bold text-5xl mt-20 laughtale-font">
                    만화를 통한 수준별 일본어 학습 LaughTale
                </div>
            </div>

            <div className="flex justify-center items-center p-6 ">
                <div
                    className="w-full grid grid-cols-16 gap-4 justify-items-center fixed inset-x-0 top-0 translate-y-3/4">
                    <div className="col-span-2">
                    </div>
                    <div className="col-span-8">
                        <NavBar selectedLevel={selectedLevel} onSelectLevel={setSelectedLevel}/>
                    </div>
                    <div className="col-span-2>
                    </div>
                    <div className=" col-span-4x></div>
                </div>
            </div>

            <div
              className="flex w-[100%] pl-20 pr-20 justify-between  h-[540px] translate-y-40 object-cover relative"
              style={{ backgroundSize:'cover',backgroundImage:`url(${cartoonstudy})`, backgroundRepeat:'no-repeat'}}>
                <div className="absolute top-0 left-0 right-0 bottom-0 opacity-80 bg-amber-50">

                </div>
                <div className="flex z-10">
                  <div className="flex items-center gap-20 ">
                    {
                      filteredCartoons.map((webtoon, index) => (
                        <CartoonCard
                          key={index}
                          imageUrl={webtoon.thumbnail}
                          title={webtoon.title}
                          mangaId={webtoon.id}
                        />
                      ))
                    }
                  </div>
                </div>
              <MainText />


              {/*<CartoonGrid cartoons={filteredCartoons} level={selectedLevel}/>*/}
              {/*<img src={cartoonstudy} className="absolute w-full h-[540px] top-40 translate-y-40 object-cover"/>*/}
            </div>



            {/*<div className="flex justify-center p-3 fixed inset-x-0 bottom-10">*/}
            {/*    <CartoonGrid cartoons={filteredCartoons} level={selectedLevel}/>*/}
            {/*</div>*/}
            {/*{cartoons.map((cartoonData, index) => (*/}
            {/*    <CartoonGrid key={index} cartoons={cartoonData} level={index + 1} />*/}
            {/*))}*/}
        </div>
    );
}

export default Recommend;
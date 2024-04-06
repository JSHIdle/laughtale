import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import CartoonGrid from "../../components/main/CartoonGrid";
import RecentWord from '../../components/main/RecentWord.tsx';
import '../../index.css'
import NavBar from "./NavBar.tsx";
import mainimage from "../../assets/main/mainimage.png";
import imageboy from "../../assets/main/imageboy.png";
import theme from "../../assets/main/theme.jpg";
import preview from '../../assets/main/preview.png'
import "./fade-out.css";
import BlueHeader from "../../components/common/BlueHeader.tsx";

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

            {/*<div className="flex justify-center font-bold text-5xl mt-16 laughtale-font p-10">*/}
            {/*  만화를 통한 수준별 일본어 학습 LaughTale*/}
            {/*</div>*/}


                      <div className="flex justify-center items-center relative overflow-hidden h-[450px] mt-[70px]">
                          <img src={preview} className="absolute top-0 bottom-0 right-0 left-0 w-full h-[450px]  object-cover z-1 blur"/>

                          <div className="relative w-[70%] h-full z-10 mt-[150px] text-8xl test">
                              <span className="test text-[#444444]">나에게 맞는 <span className="text-yellow-400 custom-shadow">만화책</span> 고르기</span>
                              {/*<span className="test text-[#444444] absolute top- left-0 translate-x-1 translate-y-1">나에게 맞는 책 고르기</span>*/}
                              <div className="text-4xl mt-4  text-[#333]">
                                  <div className="p-4">Lv1 : 흔한 단어들이 많이 등장한다. 일상 대화나 글에서 자주 들을 수 있다.</div>
                                  <div className="p-4">Lv2 : 자주 쓰이는데 조금 덜 흔하다. 여전히 일상 대화에서 자주 등장한다.</div>
                                  <div className="p-4">Lv3 : 정확한 시제 구사, 이유와 설명 전달 가능하다.</div>
                                 <div className="p-4"> Lv4 : 일상 대화 수준의 의사소통 가능하다.</div>
                                 <div className="p-4"> Lv5 : 흔히 사용되지 않는 단어이다.</div>
                              </div>
                          </div>


                      </div>
                      <div className="flex justify-center items-center p-3 ">
                        <NavBar selectedLevel={selectedLevel} onSelectLevel={setSelectedLevel}/>
                      </div>

                      <div className="flex justify-center p-3">
                          <CartoonGrid cartoons={filteredCartoons} level={selectedLevel}/>
                      </div>
                      {/*{cartoons.map((cartoonData, index) => (*/}
                      {/*    <CartoonGrid key={index} cartoons={cartoonData} level={index + 1} />*/}
                      {/*))}*/}
                  </div>
                  );
}
                  export default Recommend;

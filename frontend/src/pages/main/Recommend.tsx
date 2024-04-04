import React, { useEffect, useState } from 'react';
import BlueHeader from '../../components/common/BlueHeader';
import CartoonGrid from "../../components/main/CartoonGrid";
import '../../index.css'
import NavBar from "./NavBar.tsx";
import "./fade-out.css"
import { text } from '../../constants/text.ts';
import cartoonstudy from "../../assets/main/cartoonstudy.jpg";
import MainText from "./MainText.tsx";
import CartoonCard from "../../components/main/CartoonCard.tsx";
import {colors} from "../../constants/colors.ts";
const Recommend = () => {
    const [selectedLevel, setSelectedLevel] = useState(1);
    const [filteredCartoons, setFilteredCartoons] = useState([]);
    const [cartoons, setCartoons] = useState([]);
    const [same, isSame] = useState(false);
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
            <div
              className="flex w-[100%] pl-20 pr-20 justify-between  h-[80vh] translate-y-40 object-cover relative ">
                <div
                  className="absolute top-0 left-0 right-0 bottom-0 -z-10 blur-md	 "
                  style={{ backgroundSize:'cover',backgroundImage:`url(${cartoonstudy})`, backgroundRepeat:'no-repeat'}}
                >

                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 opacity-50 bg-black "
                     // style={{ backgroundColor: 'rgba(0,0,0, 0.4);' }}
                >
                </div>
              <div className="z-10 flex-1">
                <div className="w-full flex justify-center ">
                  <div className="flex justify-center font-bold text-5xl mt-20 laughtale-font">
                    <span className="">만화를 통한 수준별 일본어 학습</span>
                  </div>

                </div>
                <div className="flex justify-center font-bold text-5xl mt-20 laughtale-font">
                  <span className="fadeInUp-animation">{ text[selectedLevel - 1] }</span>
                </div>
                {/*<NavBar selectedLevel={selectedLevel} onSelectLevel={setSelectedLevel}/>*/}


                <div className="flex z-10 flex-1 ">
                  <div className="flex gap-20 justify-center items-center flex-1">
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

                <ul className="flex mt-4 md:space-x-32 md:flex-row text-5xl justify-center absolute bottom-10 left-0 right-0">
                  {[1, 2, 3, 4, 5].map(level => (
                    <li key={level}>
                      <div
                        className={`p-3 rounded-xl}`}
                      >
                        <button onClick={() => setSelectedLevel(level)}
                          // className="text-5xl block py-2 px-3 md:p-0 font-bold rounded md:bg-transparent md:dark:text-blue-500 md:dark:bg-transparent"
                                className="text-5xl block py-2 px-3 md:p-0 font-bold rounded"
                                style={{color: `${selectedLevel === level ?  'text-[#64BDE2]' : colors[level-1]}`}}
                        >
                          Lv {level}
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>


              </div>


              {/*<MainText />*/}


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
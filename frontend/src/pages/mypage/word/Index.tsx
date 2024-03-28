import React, { useState, useEffect } from 'react';
import CustomSlider from '../../../components/mypage/CustomSlider.tsx';
import Header from "../../../components/common/Header.tsx";
import myImage from '../../../assets/badge/badge1.png';
import client from "../../../apis";

const Index = () => {
  const [data, setData] = useState(null);

  // const id = 7;

  // useEffect(() => {
  // client.get(`/quiz/${id}`
  // ).then((response) => {
  //   setData(response.data);
  // })
  // .catch((error) => {
  //   console.error("There was an error!", error);
  // });
  // }, []); // 빈 배열로 컴포넌트가 마운트될때만 실행되도록.


  const dummyData = Array.from({ length: 24 }, (_, index) => ({
    id: index,
    content: `あ-う [会う] 
동사 1.만나다
2.대면하다;면회하다
3.우연히 만나다;조우하다`,
    text: `항목 ${index + 1}`

  }));


  // dummyData를 6개 단위로 나누어 slideData를 생성
  const slideDatas = [];
  for (let i = 0; i < dummyData.length; i += 9) {
    slideDatas.push(dummyData.slice(i, i + 9));
  }

  console.log(data);

  // CustomSlider 컴포넌트에 slideData를 slides props로 전달
  return (
      <div className="bg-[#1D1D21] h-min-screen">

        {/*<div>*/}
        {/*  {data ? <div>{JSON.stringify(data)}</div> : <div>Loading...</div>}*/}
        {/*</div>*/}

        <div><Header/></div>
`
        <div className="flex justify-center items-center">
          <div className="max-w-[1000px]">
            <div className="flex justify-center items-center">
              <div className="mt-3 w-[900px] text-white font-bold flex justify-start">
                {/*<img src={myImage} width="50" height="50"/>*/}
                LV1
              </div>
            </div>

            <div>
              <CustomSlider slides={slideDatas}/>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Index;

import React, { useState, useEffect } from 'react';
import CustomSlider from '../../../components/mypage/CustomSlider.tsx';
import Header from "../../../components/common/Header.tsx";
import myImage from '../../../assets/badge/badge1.png';
import {useQuery} from "@tanstack/react-query";
import getWordInfo from "../../../components/mypage/getWordInfo.tsx";

const Index = () => {
  // const [data, setData] = useState(null);
  ///api/word-book/{level}?page={value}&size={value}

  const level = 1;
  const page = 0;
  const size = 100;

  const { data: wordData, isLoading, error } = useQuery({
    queryKey: ['wordBook', level, page, size],
    queryFn: () => getWordInfo(level, page, size)
  });

  const [slideDatas, setSlideDatas] = useState([]);

  useEffect(() => {
    // wordData가 로딩되었을 때 slideDatas를 생성.
    console.log('Raw wordData:', wordData);
    if (wordData && !isLoading) {
      const newSlideDatas = [];
      for (let i = 0; i < wordData.length; i += 9) {
        newSlideDatas.push(wordData.slice(i, i + 9));
      }
      console.log('Processed slideDatas:', newSlideDatas);
      setSlideDatas(newSlideDatas);
    }
  }, [wordData, isLoading]);

  console.log(slideDatas);

  return (
      <div className="flex flex-col bg-[#121212]" style={{ height: 'calc(100vh * 1.1111)' }}>
        <div><Header/></div>
        <div className="flex justify-center items-center h-screen ">
          <div className="max-w-[1100px]">
            <div className="flex justify-center items-center ">
              <div className="w-[900px] text-white font-bold flex justify-center mb-6 text-4xl">
                {/*<img src={myImage} width="50" height="50"/>*/}
                LV1
              </div>
            </div>

            <div>
              {slideDatas && <CustomSlider slides={slideDatas}/>}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Index;

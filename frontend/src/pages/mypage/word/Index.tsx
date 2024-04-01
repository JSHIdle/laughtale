import React, { useState, useEffect } from 'react';
import CustomSlider from '../../../components/mypage/CustomSlider.tsx';
import Header from "../../../components/common/Header.tsx";
import {useQuery} from "@tanstack/react-query";
import getWordInfo from "../../../components/mypage/getWordInfo.tsx";
import { useParams } from 'react-router-dom';

const Index = () => {
  const { level } = useParams();
  const page = 0;
  const size = 100;

  // 레벨별 단어 목록 데이터
  const { data: wordData, isLoading, error } = useQuery({
    queryKey: ['wordBook', level, page, size],
    queryFn: () => getWordInfo(level, page, size)
  });

  useEffect(() => {
    console.log('Raw wordData:', wordData);
  }, [wordData, isLoading]);

  return (
      <div className="flex flex-col bg-[#ffffff]" style={{ height: 'calc(100vh * 1.1111)' }}>
        <div><Header/></div>
        <div className="flex justify-center items-center">
          <div className="max-w-[1180px] mt-12">
            <div className="p-12">
                {wordData && <CustomSlider slides={wordData}/>}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Index;

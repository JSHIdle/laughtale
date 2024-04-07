import React, { useState, useEffect } from 'react';
import CustomSlider from '../../../components/mypage/CustomSlider.tsx';
import BlueHeader from "../../../components/common/BlueHeader.tsx";
import {useQuery} from "@tanstack/react-query";
import getWordInfo from "../../../components/mypage/getWordInfo.tsx";
import { useParams } from 'react-router-dom';
import SpeechButton from "../../../components/common/SpeechButton.tsx";
import image from '../../../assets/test.jpg'
import {get} from "../../../apis";
const Index = () => {
  const { level } = useParams();
  const page = 0;
  const size = 100;


  const [wordInfo, setWordInfo] = useState();
  const [wordRelativeInfo, setWordRelativeInfo] = useState();
  const [selectedSentence, setSelectedSentence] = useState();
  const { data: wordData, isLoading, error } = useQuery({
    queryKey: ['wordBook', level, page, size],
    queryFn: () => getWordInfo(level, page, size)
  });


  const clickTranslate = async (data) => {
    setWordInfo(data);
    const res = await get(`/word-data/${data.id}`);
    setWordRelativeInfo(res);
    setSelectedSentence(res.speeches[0]);
  }

  return (
    <div className="flex flex-col bg-[#ffffff]" style={{ height: 'calc(100vh * 1.1111)' }}>
      <div><BlueHeader/></div>
      <div className="flex flex-row bg h-full border">
        <div className="overflow-auto w-[15%] p-[10px]">

        {wordData && wordData.content.map(slideone => (
          <div key={slideone.id}>
            <div
              className="group p-6 flex justify-center items-center transform hover:scale-110 transition duration-300 relative " onClick={() => clickTranslate(slideone)}>
              <div
                className="absolute top-0 right-0 transform translate-y-10 -translate-x-12 text-red-600 w-6 h-6 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
              >
                &ndash;
              </div>
              <div
                className={"bg-[#73ABE5] text-white rounded-xl overflow-hidden w-[100%] p-10 flex justify-center items-center shadow-sm border-2 border-[#73ABE5] group-hover:bg-gradient-to-b from-[#4EDBDE] to-[#8675DA] hover:border-transparent hover:text-black transition-all duration-300"}
              >
                <div>
                  <div className="flex justify-items-center space-x-2 p-3">
                    <div className="text-black font-semibold hover:text-black text-6xl">
                      {slideone.word}
                    </div>
                    <SpeechButton sentence={slideone.word} style={{width:"3rem", display:"inline", marginLeft:'1rem'}}/>

                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>

        <div className="w-[65%]">
          <div className="h-[100%]  flex">
            <div className="w-[50%] overflow-auto">
              {
                selectedSentence && <img src={selectedSentence.imageUrl} style={{objectFit:'contain', width:"100%"}}/>
              }
            </div>
            <div className="flex-1 border-2">
              <div className="h-[50%] overflow-auto border-2">
                <div className="p-12">
                  {wordInfo?.word && <h2 className="text-9xl border-b-2 pb-5">{wordInfo?.word}</h2>}
                  {wordInfo?.definition ? <div className="text-4xl pt-5" dangerouslySetInnerHTML={{__html: wordInfo.definition}} ></div>: <>단어를 선택해주세요</>}
                </div>
              </div>
              <div className="h-[50%] py-12">
                <div className="h-[100%] text-5xl overflow-auto">
                  {wordRelativeInfo && wordRelativeInfo.speeches.map((item, index) => (
                    <div key={index}
                         className="scale-90 rounded-xl bg-[#73ABE5] mb-6 p-6 hover:text-black hover:scale-95 transform transition-transform duration-300 hover:bg-gradient-to-r from-[#4EDBDE] from-5% to-[#8675DA] text-white"
                         onClick={() => setSelectedSentence(item)}
                    >
                      <div className="flex items-center justify-start ">
                        <div className="mr-3">
                          <h2>{item.sentence}<SpeechButton sentence={item.sentence} style={{color:'black', width:"24px", height:'24px'}} /></h2>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

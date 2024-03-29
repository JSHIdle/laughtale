import image from '/src/assets/test.jpg';
import {Suspense, useCallback, useEffect, useState} from "react";

import "./hoverBox.css"
import {useInfiniteQuery} from "@tanstack/react-query";
import {ChapterListResponse} from "../../types/types";
import {getChapterList} from "../../apis/cartoon.ts";
import {useInView} from "react-intersection-observer";
import {getImageByChapterId} from "../../apis/viewer.ts";

import {Link, useParams} from "react-router-dom";
import client, {get} from "../../apis";
import img from '../../assets/test.jpg';
import ChapterList from "../../components/cartoon/ChapterList.tsx";
import absoluteToPercent from "../../utils/position.ts";
import {Position} from "../../../types";
import Header from "../../components/common/Header.tsx";
import {ErrorBoundary} from "react-error-boundary";
import CartoonHeaderSuspense from "./manga/CartoonHeaderError.tsx";
import CartoonHeader from "../../components/cartoon/CartoonHeader.tsx";
import TotalEpisode from "./manga/TotalEpisode.tsx";
import FirstEpisode from "./manga/FirstEpisode.tsx";

const defaultSize = 5;

const colors = ["#CDFADB", "#F6FDC3", "#FFCF96","#FF8080","#D2E0FB","#F9F3CC","#D7E5CA", "#8EACCD"]
const Viewer = () => {
    const params = useParams()
    const mangaId = + params.title;
    const chapterId = + params.id;
    const [data, setData] = useState(null);
    const [page, setPage] = useState(0);
    const {ref, inView} = useInView({
        threshold: 0,
        triggerOnce: false
    })
    const [replacedSentence, setReplaceSentence] = useState();
    const [word, setWord] = useState([]);
    const [sentence, setSentence] = useState("");
    useEffect(() => {
        getImageByChapterId({chapterId, page, size:5}).then(res => setData({...res}));
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data,setData]);

    const onClick = useCallback(async ({sentence, speechId}) => {
        const wordData = await get(`/word-data/speech/${speechId}`) as Array<any>;

        setSentence(sentence);
        setWord(wordData);
    },[]);

    return (
      <>
      <div className="bg-[#1D1D21] min-h-screen">
          <Header/>
          <div className="flex">
              <div className="flex-1"></div>
              <div className=" w-[500px]">
                  {
                      data != null ? data.content.map(d => {
                          const {width, height} = d;
                          return <div className="relative ml-auto">
                              {
                                  d.speeches.map(speech => {
                                      // const {leftTopY,leftBottomY,leftBottomX,leftTopX,rightBottomY,rightBottomX,rightTopY,rightTopX} : Position= speeche;
                                      const position: Position = speech.position;
                                      const sentence = speech.sentence;
                                      const pos = absoluteToPercent({position: {...position}, size: {width, height}});
                                      return <div className="hoverBox" onClick={() => onClick({speechId: speech.id, sentence })} style={{
                                          position: "absolute",
                                          left: `${pos.leftTop.x}%`,
                                          top: `${pos.leftTop.y}%`,
                                          right: `${pos.rightBottom.x}%`,
                                          bottom: `${pos.rightBottom.y}%`
                                      }}></div>
                                  })
                              }
                              < img
                                src={d.imageUrl}
                              />
                          </div>
                      }) : <></>
                  }
              </div>
              <div className="flex-1" style={{position:"relative"}}>
                  <div className="bg-amber-50 top-[50%] fixed p-10"
                       style={{height: "50vh", transform: "translateY(-50%)", overflow: "scroll"}}>

                      {

                      }

                      {
                          // word != null ? return (() => {
                          //     let satet =
                          // return word.map(w => {
                          // return <div>
                          // <div></div>
                          // </div>
                          // })()
                          // } : <></>
                      }
                  </div>

              </div>
          </div>
          <div className="text-center bg-amber-300 p-10"><Link to={`/quiz/new/${chapterId}`}>test</Link></div>
      </div>
      </>
    );
}
export default Viewer;
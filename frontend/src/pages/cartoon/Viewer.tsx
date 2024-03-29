import image from '/src/assets/test.jpg';
import {useCallback, useEffect, useState} from "react";

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

// const test = {
//     content:[
//         {
//             imageUrl:"test",
//             width:800,
//             height:1137,
//             speeches:[{
//                 id:516,
//                 sentence: "abcd",
//                 position: {
//                     id: 516,
//                     leftTopX: 384,
//                     leftTopY: 207,
//                     rightTopX: 450,
//                     rightTopY: 207,
//                     leftBottomX: 384,
//                     leftBottomY: 292,
//                     rightBottomX: 450,
//                     rightBottomY: 292
//                 }
//          }]
//         }
//     ]
// }

const defaultSize = 5;


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

    useEffect(() => {
        getImageByChapterId({chapterId, page, size:5}).then(res => setData({...res}));
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data,setData]);
    // const imageRef = useCallback((node: HTMLElement) =>{
    //     if(node !== null){
    //         //위치 얻기 위함.....
    //     }
    // },[]);
    const onClick = useCallback(async (id) => {
        const wordData = await get(`/word-data/speech/${id}`);
        console.log(wordData);
    },[]);
    return (
        <div className="bg-gray-600">
            <div ref={ref}>
                {
                    data != null ? data.content.map(d => {
                        const {width, height} = d;
                        return <div className = "relative w-[800px]">
                            {

                                d.speeches.map(speech => {
                                    // const {leftTopY,leftBottomY,leftBottomX,leftTopX,rightBottomY,rightBottomX,rightTopY,rightTopX} : Position= speeche;
                                    const position: Position = speech.position;
                                    const pos = absoluteToPercent({position:{ ...position}, size:{ width, height } });
                                    return <div className="hoverBox" onClick={() => onClick(speech.id)} style={{
                                        // background:"#fff",
                                        // border:"1px solid #000",
                                        position:"absolute",
                                        left:`${pos.leftTop.x}%`,
                                        top:`${pos.leftTop.y}%`,
                                        right:`${pos.rightBottom.x}%`,
                                        bottom:`${pos.rightBottom.y}%`
                                    }}></div>
                                })
                            }
                            < img
                              src = {d.imageUrl}
                            />
                    </div>
                    }) : <></>
                }
            </div>
            <div className="text-center bg-amber-300 p-10"><Link to={`/quiz/new/${chapterId}`}>test</Link></div>
        </div>
    );
}
export default Viewer;
import image from '/src/assets/test.jpg';
import {useCallback, useEffect, useState} from "react";

import "./hoverBox.css"
import {useInfiniteQuery} from "@tanstack/react-query";
import {ChapterListResponse} from "../../types/types";
import {getChapterList} from "../../apis/cartoon.ts";
import {useInView} from "react-intersection-observer";
import {getImageByChapterId} from "../../apis/viewer.ts";

import {Link, useParams} from "react-router-dom";
import client from "../../apis";
import img from '../../assets/test.jpg';
import ChapterList from "../../components/cartoon/ChapterList.tsx";

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
    const [data, setData] = useState({});
    const [page, setPage] = useState();
    const {ref, inView} = useInView({
        threshold: 0,
        triggerOnce: false
    })

    // const imageRef = useCallback((node: HTMLElement) =>{
    //     if(node !== null){
    //         //위치 얻기 위함.....
    //     }
    // },[]);
    return (
        <div className="bg-gray-600">
            <div ref={ref}></div>
            <Link to={`/quiz/new/${chapterId}`}>test</Link>
        </div>
    );
}
export default Viewer;
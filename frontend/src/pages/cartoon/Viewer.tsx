import {useCallback, useEffect} from "react";
import "./hoverBox.css"
import {useInfiniteQuery} from "@tanstack/react-query";
import {ChapterListResponse} from "../../types/types";
import {getChapterList} from "../../apis/cartoon.ts";
import {useInView} from "react-intersection-observer";
import {getImageByChapterId} from "../../apis/viewer.ts";
import {useParams} from "react-router-dom";

import img from '../../assets/test.jpg';

const test = {
    content:[
        {
            imageUrl:"test",
            width:800,
            height:1137,
            speeches:[{
                id:516,
                sentence: "abcd",
                position: {
                    id: 516,
                    leftTopX: 384,
                    leftTopY: 207,
                    rightTopX: 450,
                    rightTopY: 207,
                    leftBottomX: 384,
                    leftBottomY: 292,
                    rightBottomX: 450,
                    rightBottomY: 292
                }
         }]
        }
    ]
}

const defaultSize = 5;

const Viewer = () => {
    const data = {...test};
    // console.log("viewr page")
    // const params = useParams()
    // const mangaId = + params.title;
    // const chapterId = + params.id;
    // const {
    //     data,
    //     error,
    //     fetchNextPage,
    //     hasNextPage,
    //     isFetching,
    //     isFetchingNextPage,
    //     status,
    // } = useInfiniteQuery<ChapterListResponse>({
    //     queryKey: ['chapter', mangaId,],
    //     queryFn: ({pageParam = 0}) => {
    //         // console.log("page param " + pageParam);
    //         return getImageByChapterId({
    //             page: + pageParam,
    //             chapterId,
    //             size:defaultSize,
    //         })
    //     },
    //     initialPageParam: 0,
    //     getNextPageParam: (lastPage, allPages, lastPageParam) => {
    //         if(typeof lastPageParam !== 'number') {
    //             return 0;
    //         }
    //         return lastPageParam + 1
    //     },
    // });
    // const {ref, inView} = useInView({
    //     threshold: 0,
    //     triggerOnce: false
    // })
    //
    // useEffect(() => {
    //     if(inView){
    //         fetchNextPage();
    //     }
    // }, [inView]);

    // const imageRef = useCallback((node: HTMLElement) =>{
    //     if(node !== null){
    //         //위치 얻기 위함.....
    //     }
    // },[]);
    return (
        <div className="bg-gray-600">
            <img src={img}  className="w-[700px]" />

            {/*<div ref={ref}></div>*/}
        </div>
    );
}
export default Viewer;
import image from '/src/assets/test.jpg';
import {useCallback, useEffect} from "react";
import "./hoverBox.css"
import {useInfiniteQuery} from "@tanstack/react-query";
import {ChapterListResponse} from "../../types/types";
import {getChapterList} from "../../apis/cartoon.ts";
import {useInView} from "react-intersection-observer";
import {getImageByChapterId} from "../../apis/viewer.ts";
import {useParams} from "react-router-dom";



const defaultSize = 5;

const Viewer = () => {
    console.log("viewr page")
    const params = useParams()
    const mangaId = + params.title;
    const chapterId = + params.id;
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery<ChapterListResponse>({
        queryKey: ['chapter', mangaId,],
        queryFn: ({pageParam = 0}) => {
            // console.log("page param " + pageParam);
            return getImageByChapterId({
                page: + pageParam,
                chapterId,
                size:defaultSize,
            })
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            if(typeof lastPageParam !== 'number') {
                return 0;
            }
            return lastPageParam + 1
        },
    });
    const {ref, inView} = useInView({
        threshold: 0,
        triggerOnce: false
    })

    useEffect(() => {
        if(inView  ){
            fetchNextPage();
        }
    }, [inView]);

    // const imageRef = useCallback((node: HTMLElement) =>{
    //     if(node !== null){
    //         //위치 얻기 위함.....
    //     }
    // },[]);
    return (
        <div className="bg-gray-600">

        </div>
    );
}
export default Viewer;
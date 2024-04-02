import Header from "../../../src/components/common/Header.tsx";
import {useInfiniteQuery, useQuery, useQueryClient} from "@tanstack/react-query";
import {useParams} from "react-router-dom";
import {getChapterList, getMangaHistory} from "../../apis/cartoon.ts";
import ChapterList from "../../components/cartoon/ChapterList.tsx";
import {Cartoon, ChapterListResponse} from "../../types/types";
import React, {Suspense, useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";

import FirstEpisode from "./manga/FirstEpisode.tsx";
import MagaInfo from "./manga/MangaInfo.tsx";
import TotalEpisode from "./manga/TotalEpisode.tsx";
import MangaErrorBoundary from "./manga/MangaErrorBoundary.tsx";
import CartoonHeader from "../../components/cartoon/CartoonHeader.tsx";
import {ErrorBoundary} from "react-error-boundary";
import CartoonHeaderSuspense from "./manga/CartoonHeaderError.tsx";
import client, {get} from "../../apis";
import Chart from "react-apexcharts";
import {Level} from "../../../types";



const Index = () => {
    const params = useParams()
    const mangaId = +params.title;
    const [wordLevelChartData, setWordLevelChartData] = useState({labels: [], series: []});
    const [chapterLevelChartData, setChapterLevelChartData] = useState({labels: [], series: []});


    useEffect(() => {
        const fetchMangaWordLevelData = async () => {
            const data:Array<any> = await get(`/manga/word/level?mangaId=${mangaId}`);
            console.log(data);
            const labels = data.map(item => `Word Level ${item.level}`);
            const series = data.map(item => item.count);

            setWordLevelChartData({labels, series});
        };

        const fetchMangaChapterLevelData = async () => {
            const data: Array<Level> = await get(`/manga/chapter/level?mangaId=${mangaId}`);
            console.log(data);
            const labels = data.map(item => `Chapter Level ${item.level}`);
            const series = data.map(item => item.count);

            setChapterLevelChartData({labels, series});
        }

        fetchMangaWordLevelData();
        fetchMangaChapterLevelData();
    }, [mangaId]);

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery<ChapterListResponse>({
        queryKey: ['chapterList', mangaId],
        queryFn: ({pageParam}) => {
            // console.log("page param " + pageParam);
            return getChapterList({
                page: +pageParam,
                mangaId
            })
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            if (typeof lastPageParam !== 'number') {
                return 0;
            }
            return lastPageParam + 1
        },
    });
    const {ref, inView} = useInView({
        threshold: 0,
        triggerOnce: false
    })
    const queryClient = useQueryClient();
    const getData = queryClient.getQueryData<Cartoon>(["mangaInfo", mangaId])
    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [inView]);

    // console.log("test" ,data?.pages[0]?.totalElements)
    return <>
        <div className="bg-[#ffffff] h-full">
            <Header/>
            <div className="max-w-[1180px] m-auto ">
                <div className="h-full flex flex-row">
                    <div className="flex-1 h-full">
                        <ErrorBoundary fallbackRender={(props) => <CartoonHeaderSuspense type={"error"}/>}>
                            <Suspense fallback={<CartoonHeaderSuspense type={"loading"}/>}>
                                <CartoonHeader mangaId={mangaId}/>

                                {/*<FirstEpisode mangaId={mangaId}/>*/}

                                {data?.pages[0]?.totalElements && <TotalEpisode total={data.pages[0]?.totalElements}/>}
                            </Suspense>
                        </ErrorBoundary>
                    </div>
                    <div className="flex-1">test</div>
                </div>
                {/*<MagaInfo mangaId={mangaId}/>*/}

                {/*/!* 도넛 Chart*!/*/}
                <div className="flex ">
                    <Chart
                        type="donut"
                        series={wordLevelChartData.series}

                        options={{
                            labels: wordLevelChartData.labels,
                            chart: {
                                type: 'donut',
                            },

                        }}
                        style={{
                            width:"100%"
                        }}
                    />
                    <Chart
                        type="donut"
                        series={chapterLevelChartData.series}

                        options={{
                            labels: chapterLevelChartData.labels,
                            chart: {
                                type: 'donut',
                            },
                        }}
                        style={{
                            width:"100%"
                        }}
                    />
                </div>

                <div className="mb-3">
                    {!data ? <div>...loading..</div> :
                        <>
                            {
                                data.pages.map((pages) => <>
                                    <ChapterList content={pages.content} title={getData.title} mangaId={mangaId}/>
                                </>)}
                        </>
                    }
                    <div ref={ref} className="h-1"></div>
                    {
                        isFetchingNextPage && <div className="text-black"> fetching...</div>
                    }
                </div>
            </div>
        </div>
    </>

}

export default Index;
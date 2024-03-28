import Header from "../../../src/components/common/Header.tsx";
import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import {useParams} from "react-router-dom";
import { getChapterList, getMangaHistory} from "../../apis/cartoon.ts";
import ChapterList from "../../components/cartoon/ChapterList.tsx";
import {ChapterListResponse} from "../../types/types";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";

import FirstEpisode from "./manga/FirstEpisode.tsx";
import MagaInfo from "./manga/MangaInfo.tsx";
import TotalEpisode from "./manga/TotalEpisode.tsx";
import MangaErrorBoundary from "./manga/MangaErrorBoundary.tsx";

const Index = () => {
  const params = useParams()
  const mangaId = + params.title;

  // const {data: history, isLoading: historyLoading} = useQuery({
  //   queryKey: ['history', mangaId],
  //   queryFn: () => getMangaHistory(+ mangaId), staleTime: Infinity }
  // );
  // if(history) {
  //   console.log(history);
  // }
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
        page: + pageParam,
        mangaId
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

  return <MangaErrorBoundary>
    <div className="bg-[#1D1D21] min-h-screen">
      <Header/>
      <div className="max-w-[700px] m-auto">
        <MagaInfo mangaId={mangaId}/>
        <FirstEpisode mangaId={mangaId}/>
        <TotalEpisode total={100}/>

        <div className="mb-3">

          {!data ? <div>...loading..</div> :
            <>
              {
                data.pages.map((pages) => <>
                  <ChapterList content={pages.content}/>
                </>)}
            </>
          }
          <div ref={ref} className="h-1"></div>
          {
            isFetchingNextPage && <div className="text-white"> fetching...</div>
          }
        </div>
      </div>
    </div>
  </MangaErrorBoundary>
}

export default Index;
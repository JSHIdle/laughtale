import Header from "../../../src/components/common/Header.tsx";
import {useInfiniteQuery, useQueries, useQuery} from "@tanstack/react-query";
import {useParams, useSearchParams} from "react-router-dom";
import {getMangaInfo, getChapterList, ChapterListRequest, getMangaHistory} from "../../apis/cartoon.ts";
import CartoonHeader from "../../components/cartoon/CartoonHeader.tsx";
import ChapterList from "../../components/cartoon/ChapterList.tsx";
import {ChapterListResponse} from "../../types/types";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import MangaErrorBoundary from "./MangaErrorBoundary.tsx";
import MangaInfoFetcher from "./MangaInfoFetcher.tsx";
import MangaInfoFetchingSuspense from "./MangaInfoFetchingSuspense.tsx";
import FirstEpisode from "./FirstEpisode.tsx";

const Index = () => {
  const params = useParams()
  const mangaId = + params.title;

  const {data: mangaInfo, isLoading: mangaInfoLoading} = useQuery({
    queryKey: ["manga", mangaId],
    queryFn: () => getMangaInfo(+ mangaId),
  });
  const {data: history, isLoading: historyLoading} = useQuery({
    queryKey: ['history', mangaId],
    queryFn: () => getMangaHistory(+ mangaId), staleTime: Infinity }
  );

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
      if(inView){
        fetchNextPage();
      }

  }, [inView]);

  return <div className="bg-[#1D1D21] min-h-screen">
    <div>
      <Header/>
    </div>
      <div className="max-w-[700px] m-auto">
        {/*{ mangaInfoLoading ? <div>laoding...</div> : <CartoonHeader {...mangaInfo}/>}*/}


        <div className="mt-3 mb-3">
          <span className="text-white font-semibold text-xl">총 115화</span>
        </div>

        <div className="mb-3">

          {!data ? <div>...loading..</div> :
            <>
              {
                data.pages.map((pages) => <>
                  <ChapterList content={pages.content} title={mangaInfo.title}/>

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
}

export default Index;
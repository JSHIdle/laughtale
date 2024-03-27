import Header from "../../../src/components/common/Header.tsx";
import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import {useParams, useSearchParams} from "react-router-dom";
import {getMangaInfo, getChapterList, ChapterListRequest} from "../../apis/cartoon.ts";
import CartoonHeader from "../../components/cartoon/CartoonHeader.tsx";
import ChapterList from "../../components/cartoon/ChapterList.tsx";
import {ChapterListResponse} from "../../types/types";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";

const Index = () => {
  const params = useParams()
  const mangaId = + params.title;
  const {data: mangaInfo, isLoading: mangaInfoLoading} = useQuery({
    queryKey: ["manga", mangaId],
    queryFn: () => getMangaInfo(+ mangaId),
  });

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
      // console.log("lastPageParam ", lastPageParam)
      // console.log("lastpage" , lastPage);
      // console.log("allPage ", allPages);
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
    console.log("Data", data)
  }, [data]);
  useEffect(() => {
    console.log("TEST",inView)
      if(inView){
        fetchNextPage();
      }

  }, [inView]);

  return <div className="bg-[#1D1D21] min-h-screen">
    <div>
      <Header/>
    </div>
      <div className="max-w-[700px] m-auto">
        { mangaInfoLoading ? <div>laoding...</div> : <CartoonHeader {...mangaInfo}/>}
        <div
          className="text-xl font-semibold text-center p-2 bg-gradient-to-r from-[#64BEE2] from-5%   to-[#8395E8] to-100% mt-10 mb-5 rounded-full">
          첫화보기 1화
        </div>
        <div>
          <div className="mt-3 mb-3">
            <span className="text-white font-semibold text-xl">총 115화</span>
          </div>
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
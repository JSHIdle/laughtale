import Header from "../../../src/components/common/Header.tsx";
import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import {useSearchParams} from "react-router-dom";
import {getMangaInfo, getChapterList} from "../../apis/cartoon.ts";

const Index = () => {
  const [searchParams, ] = useSearchParams();
  const mangaId = + searchParams.get("manga");
  const {data: mangaInfo, isLoading: mangaInfoLoading} = useQuery({
    queryKey: ["manga", mangaId],
    queryFn: () => getMangaInfo(mangaId),
  });
  //
  // const {
  //   data,
  //   error,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetching,
  //   isFetchingNextPage,
  //   status,
  // } = useInfiniteQuery({
  //   queryKey: ['chapterList', mangaId],
  //   queryFn: ({pageParam}) => getChapterList({
  //     page: pageParam,
  //     mangaId
  //   }),
  //   initialPageParam: 0,
  //   getNextPageParam: (lastPage, allPages, lastPageParam) => {
  //     if (lastPageParam === 0) {
  //       return undefined
  //     }
  //     return lastPageParam + 1
  //   },
  // })


  return <div className="bg-[#1D1D21] min-h-screen">
    <div>
      <Header/>
    </div>
      <div className="max-w-[700px] m-auto">
        <div
            className="mt-6 flex rounded-3xl overflow-hidden bg-gradient-to-r from-[#64BEE2] from-5%  to-[#8395E8] to-100%">
          <div className="w-5/12">
            <img
                src="https://i.namu.wiki/i/5vdfnFXt4GI-HGqkyz5llKd7QzfpCBxJVyw4MZ4FZuQCG54-Rom6qpaNJ0gUjYEmGaOm31_X8Rei-0uL7zU3DfwvFwnUrEjWeDSiJbZknES6hd9skeI7r59G2-EDI0ZuuXARfjjXkmP5MkiS0IKJcg.webp"/>
          </div>
          <div className="p-10">
            <div className="font-bold text-3xl text-white	mb-10">{mangaInfo.title}</div>
            <div className="font-bold text-xl text-white">작가 : {mangaInfo.author}</div>
            <div className="font-bold text-xl text-white">장르 : {mangaInfo.genre}</div>
            <div className="mb-10"></div>
            <div className="font-bold text-xl text-white">줄거리</div>
            {/*<div className="mb-10"></div>*/}
            <div className="font-bold text-xl text-white">{mangaInfo.summary}</div>
          </div>
        </div>
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
          <div
            className="bg-gradient-to-r from-[#747982] to-[#879099] text-white font-semibold text-xl flex p-5 items-center rounded-2xl mb-5">
            <div className="w-[64px] rounded-xl overflow-hidden mr-5">
              <img
                  src="https://image-comic.pstatic.net/webtoon/648419/426/thumbnail_202x120_6ea6018a-5843-4020-ac46-7c2bb34b583c.jpg"/>
            </div>
            <div>1. 미지의 숲</div>
          </div>

          <div
              className="bg-gradient-to-r from-[#64BEE2] from-5%   to-[#8395E8] to-100% font-bold text-xl flex p-5 items-center rounded-2xl mb-5">
            <div className="w-[64px] rounded-xl overflow-hidden mr-5">
              <img
                  src="https://image-comic.pstatic.net/webtoon/648419/426/thumbnail_202x120_6ea6018a-5843-4020-ac46-7c2bb34b583c.jpg"/>
            </div>
            <div>2. 미지의 숲</div>
          </div>

          <div
              className="bg-gradient-to-r from-[#747982] to-[#879099] text-white font-semibold text-xl flex p-5 items-center rounded-2xl mb-5">
            <div className="w-[64px] rounded-xl overflow-hidden mr-5">
              <img
                  src="https://image-comic.pstatic.net/webtoon/648419/426/thumbnail_202x120_6ea6018a-5843-4020-ac46-7c2bb34b583c.jpg"/>
            </div>
            <div>1. 미지의 숲</div>
          </div>
          <div
              className="bg-gradient-to-r from-[#747982] to-[#879099] text-white font-semibold text-xl flex p-5 items-center rounded-2xl mb-5">
            <div className="w-[64px] rounded-xl overflow-hidden mr-5">
              <img
                  src="https://image-comic.pstatic.net/webtoon/648419/426/thumbnail_202x120_6ea6018a-5843-4020-ac46-7c2bb34b583c.jpg"/>
            </div>
            <div>1. 미지의 숲</div>
          </div>

          <div
              className="bg-gradient-to-r from-[#747982] to-[#879099] text-white font-semibold text-xl flex p-5 items-center rounded-2xl mb-5">
            <div className="w-[64px] rounded-xl overflow-hidden mr-5">
              <img
                  src="https://image-comic.pstatic.net/webtoon/648419/426/thumbnail_202x120_6ea6018a-5843-4020-ac46-7c2bb34b583c.jpg"/>
            </div>
            <div>1. 미지의 숲</div>
          </div>
        </div>
      </div>
    </div>
}

export default Index;
import {useQueryClient, useSuspenseQuery} from "@tanstack/react-query";
import {Suspense, useEffect} from "react";
import {Cartoon} from "../../types/types";
import {getMangaInfo} from "../../apis/cartoon.ts";
import {ErrorBoundary} from "react-error-boundary";


// type Props = {
//   title:string;
//   author?:string;
//   genre?: string;
//   summary: string;
//   thumbnail:string;
// }
type Props = {
  mangaId:number;
}
export default function CartoonHeader(p: Props) {
  const {mangaId} = p;
  const {data:props, isLoading, isError} = useSuspenseQuery({
    queryKey: ["mangaInfo", mangaId],
    queryFn: () => getMangaInfo(+ mangaId),
    retry:0
  });

  return <>
      <div
        className="mt-6 flex rounded-3xl overflow-hidden bg-gradient-to-r from-[#64BEE2] from-5%  to-[#8395E8] to-100%">
        {
          props.thumbnail ? <div style={{
            backgroundImage: `url(${props.thumbnail})`,
            objectFit: "cover",
            flexShrink: 0,
            width: "300px",
            height: "400px"
          }}></div> : null
        }
        <div className="p-10 flex-grow">
          <div className="font-bold text-3xl text-white	mb-10">{props?.title}</div>
          <div className="font-bold text-xl text-white">작가 : {props.author}</div>
          <div className="font-bold text-xl text-white">카테고리 : {props.category}</div>
          <div className="font-bold text-xl text-white">레벨 : {props.level}</div>

          <div className="mb-10"></div>
          <div className="font-bold text-xl text-white">줄거리</div>
          {/*<div className="mb-10"></div>*/}
          <div className="font-bold text-xl text-white">{props.summary}</div>
        </div>
      </div>
    </>
}
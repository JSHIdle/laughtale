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
  const {data:props, isLoading, isError,} = useSuspenseQuery({
    queryKey: ["mangaInfo", mangaId],
    queryFn: () => getMangaInfo(+ mangaId),
    retry:0
  });
  console.log("data is", props.thumbnail)
  return <>
      <div
        className="flex mt-6 flex rounded-3xl overflow-hidden bg-gradient-to-r from-[#64BEE2] from-5%  to-[#8395E8] to-100% h-1/2">
        <div className="flex-1" style={{backgroundImage:`url(${props.thumbnail})`,backgroundSize: "cover"}}>
            {/*<img src={`${props.thumbnail}`} style={{all:"unset",margin:0,width:"100%", height:"100%"}} />*/}
        </div>
        <div className="p-10 flex-1">
          <div className="font-bold text-3xl text-white	mb-10">{props?.title}</div>
          { props.author && <div className="font-bold text-xl text-white">작가 : {props.author}</div>}
          { props.category && <div className="font-bold text-xl text-white">카테고리 : {props.category}</div> }
          { props.level &&<div className="font-bold text-xl text-white">레벨 : {props.level}</div>}

          <div className="mb-10"></div>
          {
            props.summary && <>
                  <div className="font-bold text-xl text-white">줄거리</div>
                  <div className="font-bold text-xl text-white">{props.summary}</div>
              </>
          }
        </div>
      </div>
  </>
}
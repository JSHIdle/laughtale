import {useQueryClient} from "@tanstack/react-query";


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
export default function CartoonHeader(props: Props) {
  const {mangaId} = props;
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(["mangaInfo", mangaId]);
  console.log("queryData", data);
  return <div
    className="mt-6 flex rounded-3xl overflow-hidden bg-gradient-to-r from-[#64BEE2] from-5%  to-[#8395E8] to-100%">
    {/*<div className="w-5/12">*/}
    {/*  <img*/}
    {/*    src={props.thumbnail}/>*/}
    {/*</div>*/}
    {/*<div className="p-10">*/}
    {/*  <div className="font-bold text-3xl text-white	mb-10">{props.title}</div>*/}
    {/*  /!*<div className="font-bold text-xl text-white">작가 : {props.author}</div>*!/*/}
    {/*  /!*<div className="font-bold text-xl text-white">장르 : {props.genre}</div>*!/*/}
    {/*  <div className="mb-10"></div>*/}
    {/*  <div className="font-bold text-xl text-white">줄거리</div>*/}
    {/*  /!*<div className="mb-10"></div>*!/*/}
    {/*  <div className="font-bold text-xl text-white">{props.summary}</div>*/}
    {/*</div>*/}
  </div>
}
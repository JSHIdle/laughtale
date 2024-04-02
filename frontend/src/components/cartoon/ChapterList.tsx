import ChapterItem from "./ChapterItem.tsx";
import {useQueryClient} from "@tanstack/react-query";
import {Cartoon} from "../../types/types";
// "chapterId": 7,
//   "chapterNo": 0,
//   "thumbnail": "/home/ubuntu/images/ジャガイモ農家の村娘、剣神と謳われるまで。/1/ジャガイモ農家の村娘、剣神と謳われるまで。--4-1.jpg",
//   "level": null


type Props = {
  content: Array<{
    chapterId: number;
    chapterNo: number;
    thumbnail: string;
    level:null | number;
  }>
  mangaId: number;
  title: string;
}
export default function ChapterList(props: Props){
  return props.content.map((item) => <ChapterItem {...item} mangaId={props.mangaId} title={props.title} />)
}



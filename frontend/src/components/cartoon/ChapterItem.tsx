

type Props = {
  title:string;
  thumbnail: string;
  chapterNo: number;
  chapterId: number;
}
export default function ChapterItem(props : Props){

  return (
    <div
      className="bg-gradient-to-r from-[#747982] to-[#879099] text-white font-semibold text-xl flex p-5 items-center rounded-2xl mb-5">
      <div className="w-[64px] rounded-xl overflow-hidden mr-5">
        <img
          src="https://image-comic.pstatic.net/webtoon/648419/426/thumbnail_202x120_6ea6018a-5843-4020-ac46-7c2bb34b583c.jpg"/>
      </div>
      <div>{props.title} {props.chapterNo + 1}화</div>
    </div>
  )

}
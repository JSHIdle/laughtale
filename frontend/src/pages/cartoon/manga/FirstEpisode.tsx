import {NavLink} from "react-router-dom";

type Props = {
  mangaId: number;
  chapterId: number;
}
export default function FirstEpisode (props: Props){
  const {mangaId, chapterId} = props;
  return (<NavLink to={`/cartoon/${mangaId}/viewer/${chapterId}`} >
    {/*<div*/}
    {/*  className="text-3xl text-white font-semibold text-center p-4 bg-gradient-to-r from-[#64BEE2] from-5%   to-[#8395E8] to-100% mt-10 mb-5 rounded-full">*/}
    {/*  첫화보기 1화*/}
    {/*</div>  */}
    <div
      className="text-3xl text-black  font-semibold text-center p-4 border border-[#73ABE5] hover:bg-gradient-to-r from-[#6CB3E4] to-[#8F89EB]  hover:text-white mt-10 mb-5 rounded-full">
      첫화보기 1화
    </div>
  </NavLink>);
}


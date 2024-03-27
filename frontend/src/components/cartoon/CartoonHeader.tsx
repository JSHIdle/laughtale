

type Props = {
  title:string;
  author?:string;
  genre?: string;
  summary: string;
}
export default function CartoonHeader(props:Props) {
  return <div
    className="mt-6 flex rounded-3xl overflow-hidden bg-gradient-to-r from-[#64BEE2] from-5%  to-[#8395E8] to-100%">
    <div className="w-5/12">
      <img
        src="https://i.namu.wiki/i/5vdfnFXt4GI-HGqkyz5llKd7QzfpCBxJVyw4MZ4FZuQCG54-Rom6qpaNJ0gUjYEmGaOm31_X8Rei-0uL7zU3DfwvFwnUrEjWeDSiJbZknES6hd9skeI7r59G2-EDI0ZuuXARfjjXkmP5MkiS0IKJcg.webp"/>
    </div>
    <div className="p-10">
      <div className="font-bold text-3xl text-white	mb-10">{props.title}</div>
      <div className="font-bold text-xl text-white">작가 : {props.author}</div>
      <div className="font-bold text-xl text-white">장르 : {props.genre}</div>
      <div className="mb-10"></div>
      <div className="font-bold text-xl text-white">줄거리</div>
      {/*<div className="mb-10"></div>*/}
      <div className="font-bold text-xl text-white">{props.summary}</div>
    </div>
  </div>

}
import {AddWordButton} from "./AddWordButton.tsx";
import {WordInfo} from "../../../types";

type Props = {
  words: Array<WordInfo>
}
export default function WordList(props: Props){
  return props.words.map(word => (
    <div className="border-2 border-[#3ECBF7] p-5 rounded-md text-3xl word_info_box">
      <div className="mb-5">
        <span style={{background:`${word.color}`, color:'#000'}} className="rounded-md p-3 inline-block">{word.word}</span>
        <AddWordButton wordId={word.id}/>
      </div>
      <div dangerouslySetInnerHTML={{__html:word.definition}} className="text-2xl text-white"></div>
    </div>
  ))
}
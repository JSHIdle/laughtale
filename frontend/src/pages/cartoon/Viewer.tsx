import image from '/src/assets/test.jpg';
import {Suspense, useCallback, useEffect, useState} from "react";

import "./hoverBox.css"
import "./wordInfoBox.css"
import {useInView} from "react-intersection-observer";
import {getImageByChapterId} from "../../apis/viewer.ts";
import {Link, useParams} from "react-router-dom";
import client, {get} from "../../apis";
import {MangaImageInfo, MangaImageResponse, Position, WordInfo} from "../../../types";
import Header from "../../components/common/Header.tsx";
import Sentence from "../../components/cartoon/Sentence.tsx";
import WordList from "../../components/cartoon/WordList.tsx";
import FlexItem from "../../components/cartoon/Flex.tsx";
import WordListWrapper from "../../components/cartoon/WordListWrapper.tsx";
import CartoonImage from "../../components/cartoon/CartoonImage.tsx";

const defaultSize = 5;

const colors = ["#CDFADB", "#F6FDC3", "#FFCF96","#FF8080","#D2E0FB","#F9F3CC","#D7E5CA", "#8EACCD"]
const Viewer = () => {
    const params = useParams()
    const mangaId = + params.title;
    const chapterId = + params.id;
    const [data, setData] = useState<MangaImageResponse>([]);
    const [page, setPage] = useState<number>(0);
    const {ref, inView} = useInView({
        threshold: 0,
        triggerOnce: false
    })
    const [words, setWords] = useState<WordInfo[]>();
    const [sentence, setSentence] = useState<string>("");
    useEffect(() => {
        getImageByChapterId({chapterId, page, size:5}).then((res: MangaImageResponse) =>{
            setData([res]);
        });
    }, []);
    useEffect(() => {
        if(inView){
            getImageByChapterId({chapterId, page, size:5}).then((res: MangaImageResponse) => {
                setData([...data, ...res]);
            });
        }
    }, [inView]);

    const onClick = useCallback(async ({sentence, id}) => {
        console.log(sentence, id)
        const wordData:Array<WordInfo> = await get(`/word-data/speech/${id}`) as Array<any>;
        for(let i = 0; i < wordData.length; i++){
            const {word} = wordData[i];
            sentence = sentence.replace(word,`<span style='color:${colors[i % colors.length]}'>${word}</span>`);
            wordData[i].color = colors[i%colors.length];
        }
        setSentence(sentence);
        setWords(wordData);
    },[]);

    return (
      <>
      <div className="bg-[#1D1D21] min-h-screen">
          <Header/>
          <div className="flex">
              <FlexItem flex="1"/>
              <div className=" w-max-[700px] ">
                  {
                    data.length != 0 && data.map((page) => page.content.map((imageInfo) => <CartoonImage mangaImageInfo={imageInfo} onClick={onClick}/>))
                  }
              </div>
              <FlexItem flex="1" style={{position:"relative"}}>
                  <WordListWrapper>
                      { sentence && <Sentence sentence={sentence}/>}
                      { words && <WordList words={words}/>}
                  </WordListWrapper>
              </FlexItem>
          </div>
          <div className="text-center bg-amber-300 p-10"><Link to={`/quiz/new/${chapterId}`}>test</Link></div>
      </div>
      </>
    );
}
export default Viewer;
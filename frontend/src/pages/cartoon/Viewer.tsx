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
import {useInfiniteQuery} from "@tanstack/react-query";
import {ChapterListResponse} from "../../types/types";
import {getChapterList} from "../../apis/cartoon.ts";
import axios from "axios";
import header from "../../components/common/Header.tsx";


type TestType = {
    id:number;
    nmame:string;
}
const defaultSize = 5;

const colors = ["#CDFADB", "#F6FDC3", "#FFCF96","#FF8080","#D2E0FB","#F9F3CC","#D7E5CA", "#8EACCD"]
const Viewer = () => {
    const params = useParams()
    const mangaId = + params.title;
    const chapterId = + params.id;
    // const [data, setData] = useState<MangaImageResponse>([]);
    // const [page, setPage] = useState<number>(0);

    useEffect(() => {
        const fetchMangaWordLevelData = async () => {
            await client.post(`/history/${chapterId}`)
        };

        fetchMangaWordLevelData();
    }, [chapterId]);

    const {ref, inView} = useInView({
        threshold: 0,
        triggerOnce: false
    })
    const [words, setWords] = useState<WordInfo[]>();
    const [sentence, setSentence] = useState<string>("");
    const [originSentence, setOriginSentence] = useState<string>("");
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery<ChapterListResponse>({
        queryKey: ['chapterList', mangaId, chapterId],
        queryFn: ({pageParam}) => {
            // console.log("page param " + pageParam);
            return getImageByChapterId({chapterId, page: + pageParam, size:5})
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            if(typeof lastPageParam !== 'number') {
                return 0;
            }
            return lastPageParam + 1
        },
    });


    const onClick = useCallback(async ({sentence, id}) => {
        setOriginSentence(sentence);
        const wordData:Array<WordInfo> = await get(`/word-data/speech/${id}`) as Array<any>;
        for(let i = 0; i < wordData.length; i++){
            if(wordData[i].definition == null) continue;
            const {word} = wordData[i];
            sentence = sentence.replace(word,`<span style='color:${colors[i % colors.length]}'>${word}</span>`);
            wordData[i].color = colors[i%colors.length];
        }
        setSentence(sentence);
        setWords(wordData);
    },[]);
    useEffect(() => {
    }, []);

    useEffect(() => {
        if(inView){
            fetchNextPage();
        }
    }, [inView]);

    return (
      <>
      <div className="bg-[#ffffff] min-h-screen">
          <Header/>
          <div className="flex relative justify-center">
              <div className="max-w-[1200px] flex">

                <div className="flex-1">
                    {
                      data && data.pages.map((page) => page.content.map((imageInfo) => <CartoonImage mangaImageInfo={imageInfo} onClick={onClick}/>))
                    }
                </div>
                  {sentence &&
                      <FlexItem flex="1" style={{position: "relative"}} >
                                  <WordListWrapper>
                                      <Sentence originSentence={originSentence} sentence={sentence}/>
                                      <WordList words={words}/>
                                  </WordListWrapper>

                      </FlexItem>
                  }
              </div>

          </div>
          <div ref={ref} className="h-1"></div>
          <div className="text-center bg-amber-300 p-10"><Link to={`/quiz/new/${chapterId}/cnt`}>Quiz</Link></div>
      </div>
      </>
    );
}
export default Viewer;

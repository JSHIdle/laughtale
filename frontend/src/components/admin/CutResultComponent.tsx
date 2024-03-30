import {CutAnalyze} from "../../../types";
import React, {useEffect, useRef, useState} from "react";
import WordResult from "./WordResultComponent.tsx";
import Pagination from "./Pagination.tsx";
import ImageWithIndexAndRect from "./ImageWithIndexAndRect.tsx";
import SentenceResult from "./SentenceResultComponent.tsx";

export default function CutResult(props: CutAnalyze) {
    const speechLength = useRef(props.sentence.length);
    const [speechCur, setSpeechCur] = useState(1);

    const [speechContent, setSpeechContent] = useState(props.sentence[0] ?? null);
    const wordLength = useRef(props.words.length);
    const [wordCur, setWordCur] = useState(1);

    const [wordContent, setWordContent] = useState(props.words[0] ?? null);

    const handleWordCur = (value: number) => {
        setWordCur(wordCur + value);
        setWordContent(props.words[wordCur + value - 1]);
    }

    const handleSpeechCur = (value: number) => {
        setSpeechCur(speechCur + value);
        setSpeechContent(props.sentence[speechCur + value - 1]);
    }

    return (
        <div className="grid grid-cols-2 gap-5">
            <ImageWithIndexAndRect index={speechCur} src={props.imageUrl} boxCoordinates={{
                x: speechContent.positionBasic.leftBottomX,
                y: speechContent.positionBasic.leftBottomY,
                width: speechContent.positionBasic.rightTopX - speechContent.positionBasic.leftBottomX,
                height: speechContent.positionBasic.rightTopY - speechContent.positionBasic.leftBottomY
            }}/>
            <div className="flex flex-col border rounded">
                <p className="text-3xl font-bold p-4 border-b   ">문장</p>
                <div className="p-6 shadow rounded">
                    <div className="text-center mb-5">
                        <SentenceResult sentence={speechContent.sentence}/>
                    </div>
                </div>
                <Pagination length={speechLength.current} cur={speechCur} setCur={handleSpeechCur}></Pagination>
                <p className="text-3xl font-bold p-4 border rounded">단어</p>
                <div className="relative flex-1">
                    <div
                        className="absolute top-0 bottom-0 left-0 right-0 overflow-y-scroll">
                        <div className="absolute top-0 bottom-0 left-0 right-0 p-4">
                            <div>
                                {<WordResult {...wordContent} />}
                            </div>
                        </div>
                    </div>
                </div>
                <Pagination length={wordLength.current} cur={wordCur} setCur={handleWordCur}></Pagination>
            </div>
        </div>
    );
}
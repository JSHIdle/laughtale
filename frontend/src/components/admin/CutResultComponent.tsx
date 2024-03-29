import {CutAnalyze} from "../../../types";
import React, {useRef} from "react";
import WordResult from "./WordResultComponent.tsx";
import Pagenation from "./Pagenation.tsx";

export default function CutResult(props: CutAnalyze) {
    const sentenceCur = useRef(1);
    const sentenceLength = useRef(props.sentence.length);
    const wordCur = useRef();
    const wordLength = useRef(props.words.length);
    return (
        <div className="grid grid-cols-2 gap-5">
            <div className="border-2 border-black">
                <img id="cutImage" src={props.imageUrl} alt=""/>
            </div>
            <div className="flex flex-col ">
                <p className="text-3xl font-bold p-4">나온 문장들</p>
                <div className="relative flex-1">
                    <div
                        className="border border-2 border-amber-600 absolute top-0 bottom-0 left-0 right-0 overflow-y-scroll">
                        <div className="absolute top-0 bottom-0 left-0 right-0 p-4">
                            <div>
                                {props.sentence.map((sentence) => <p>{sentence}</p>)}
                            </div>
                        </div>
                    </div>
                </div>
                <Pagenation cur={sentenceCur.current} length={sentenceLength.current}></Pagenation>
                <p className="text-3xl font-bold p-4">나온 단어들</p>
                <div className="relative flex-1">
                    <div
                        className="border border-2 border-amber-600 absolute top-0 bottom-0 left-0 right-0 overflow-y-scroll">
                        <div className="absolute top-0 bottom-0 left-0 right-0 p-4">
                            <div>
                                {props.words.map((d) => <WordResult {...d} />)}
                            </div>
                        </div>
                    </div>
                </div>
                <Pagenation cur={wordCur.current} length={wordLength.current}></Pagenation>
            </div>
        </div>
    );
}
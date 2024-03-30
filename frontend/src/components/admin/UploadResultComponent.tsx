import {MangaAnalyze} from "../../../types";
import React, {useState} from "react";
import ChapterResult from "./ChapterResultComponent.tsx";
import {button} from "@material-tailwind/react";

export default function UploadResult(props: MangaAnalyze) {
    const [isInfo, setInfo] = useState(true);
    return (
        <div className="container mx-auto">
            {
                isInfo ?
                    <div>
                        <div className="flex justify-between">
                            <div className="grid grid-cols-1 gap-2">
                                <div>
                                    <p className="text-5xl mt-8 mb-8">{props.title} {props.chapter[0].chapterNo}화</p>
                                    <p className="text-3xl mt-8 mb-8">작가 : {props.author}</p>
                                    <p className="text-3xl mt-8 mb-8">카테고리 : {props.category}</p>
                                    <p className="text-3xl mt-8 mb-8">설명 : {props.description}</p>
                                </div>
                                <div className="border border-2">
                                    <p className="text-7xl p-20">그래프 Section</p>
                                </div>
                            </div>
                            <div>
                                <img src={props.thumbnail} alt=""/>
                            </div>
                        </div>
                        <div className="text-center">
                            <button
                                onClick={() => setInfo(false)}
                                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-1/2 mt-7">분석 결과 보기
                            </button>
                        </div>
                    </div> :
                        <ChapterResult {...props.chapter[0]}></ChapterResult>
            }
        </div>
    );
}
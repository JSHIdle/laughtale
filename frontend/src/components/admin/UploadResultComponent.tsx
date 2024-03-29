import {MangaAnalyze} from "../../../types";
import React from "react";
import ChapterResult from "./ChapterResultComponent.tsx";

export default function UploadResult(props: MangaAnalyze) {
    return (
        <div className="container mx-auto border-2 border-amber-600 flex flex-col justify-start">
            <div className="grid grid-cols-1 gap-4 p-2 border-2 border-amber-600">
                <p className="text-3xl">{props.title}</p>
                <p className="text-2xl">작가 : {props.author}</p>
                <p className="text-2xl">카테고리 : {props.category}</p>
                <p className="text-2xl">설명 : {props.description}</p>
            </div>
            {props.chapter.map((chapter) => <ChapterResult {...chapter}></ChapterResult>)}
        </div>
    );
}
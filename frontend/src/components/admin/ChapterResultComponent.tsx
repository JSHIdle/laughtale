import CutResult from "./CutResultComponent.tsx";
import {ChapterAnalyze} from "../../../types";
import Pagination from "./Pagination.tsx";
import React, {useState} from "react";

export default function ChapterResult(props: ChapterAnalyze) {
    const [cur, setCur] = useState(1);
    const [content, setContent] = useState(props.cuts[0]);

    const handleCur = (value) => {
        if ((value === -1 && cur === 1) || ((value === 1 && cur === props.cuts.length))) {
            return;
        }
        setContent(props.cuts[cur + value - 1]);
        setCur(cur + value);
    }
    return (
        <div className="mt-3 p-3">
            <CutResult {...content}></CutResult>
            <div className="">
                <div className="grid grid-cols-3 mx-auto">
                    <button
                        onClick={() => handleCur(-1)}
                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded border mt-5">«
                    </button>
                    <button
                        className="bg-white cursor-default text-gray-800 font-semibold py-2 px-4 rounded border mt-5">{cur}</button>
                    <button
                        onClick={() => handleCur(1)}
                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded border mt-5">»
                    </button>
                </div>
            </div>
        </div>
    );
}
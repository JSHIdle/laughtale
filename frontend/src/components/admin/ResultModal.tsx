import {MangaAnalyze} from "../../../types";
import React from "react";
import UploadResult from "./UploadResultComponent.tsx";

export default function ResultModal(mangaAnalyze: MangaAnalyze) {
    const [showModal, setShowModal] = React.useState(true);
    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="fixed flex justify-center items-center inset-0 z-50 bg-gray-400 outline-none focus:outline-none">
                        <div className="relative">
                            <div
                                className="border-0 rounded-lg shadow-lg bg-white flex flex-col outline-none focus:outline-none">
                                {/*header*/}
                                <div
                                    className="flex items-start justify-end p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                             fill="currentColor" className="w-6 h-6">
                                            <path fill-rule="evenodd"
                                                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="p-6">
                                    <UploadResult {...mangaAnalyze}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}
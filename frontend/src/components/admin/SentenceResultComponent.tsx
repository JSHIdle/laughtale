import React, {useEffect, useState} from "react";

export default function SentenceResult({sentence, word, color}: { sentence: string, word: string, color: string }) {

    const [sen, setSen] = useState(sentence);
    const textToSpeech = () => {
        const speech = new SpeechSynthesisUtterance(sentence);
        speech.lang = "ja";
        speech.pitch = 1;
        speech.rate = 1;
        speechSynthesis.speak(speech);
    }
    useEffect(() => {
        setSen(sentence.replace(word, `<span style='background-color:${color}'>${word}</span>`));
    }, [word, color]);
    return (
        <div className="flex justify-between">
            <p className="text-4xl mb-5" dangerouslySetInnerHTML={{__html: sen}}/>
            <button
                onClick={() => textToSpeech()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path
                        d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z"/>
                    <path
                        d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z"/>
                </svg>
            </button>
        </div>
    )
}
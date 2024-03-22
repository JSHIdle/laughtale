import image from '/src/assets/test.jpg';
import {useCallback,  useState} from "react";
import "./hoverBox.css"
export type Position = {
    x: number;
    y: number;
}

const getPosition = (width, height,x1,y1,x2,y2) => {
    const x1Percent = (x1/width) * 100;
    const y1Percent = (y1/height) * 100;
    const x2Percent = 100- (x2/width) * 100;
    const y2Percent = 100 -(y2/height) * 100;
    return {
        x1: x1Percent,
        y1: y1Percent,
        x2: x2Percent,
        y2: y2Percent,
    }
}

const Viewer = () => {
    const [list, ] = useState([
        {image:"http://lcoalhost:5173/src/assets/test.jpg",width:960,height:1378, word: [
                // {pos1: pos, pos2: pos2, japanese: "jp", korean: "한국어 뜻"},
                {x1:137, y1:310,x2:244, y2:662, line: [], japanese: "jp", korean: "한국어 뜻"},
                {x1:171.8, y1:958 , x2:231, y2:1071.25, japanese: "jp", korean: "한국어 뜻"},
                {x1:151, y1:1161,x2:214, y2:1269, japanese: "jp", korean: "한국어 뜻"},
            ]},
    ]);

    const onClick = (event) => {
        const rect = event.target.getBoundingClientRect();
        const xPosition = event.clientX - rect.left;
        const yPosition = event.clientY - rect.top;
        console.log(xPosition , yPosition);
    }
    const imageRef = useCallback((node: HTMLElement) =>{
        if(node !== null){
            //위치 얻기 위함.....
        }
    },[]);
    return (
            <div className="bg-gray-600">
                <div className="text-center">
                    <div className="inline-block relative">
                        {
                            list[0].word.map((d) => {
                                const {x1,y1,x2,y2} = d;
                                const r = getPosition(list[0].width,list[0].height, x1,y1,x2,y2);
                                return <div style={{left:`${r.x1}%`, top:`${r.y1}%`,right:`${r.x2}%`, bottom:`${r.y2}%`}} className="hover:border hover:border-gray-500 hover:border-4 absolute"> </div>
                            })
                        }
                        <img ref={imageRef} src={image} onClick={onClick}/>
                    </div>
                </div>
            </div>
    );
}
export default Viewer;
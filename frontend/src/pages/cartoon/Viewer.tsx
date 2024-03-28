import image from '/src/assets/test.jpg';
import {useCallback} from "react";
import "./hoverBox.css"



const Viewer = () => {

    const imageRef = useCallback((node: HTMLElement) =>{
        if(node !== null){
            //위치 얻기 위함.....
        }
    },[]);
    return (
            <div className="bg-gray-600">
                {/*<div className="text-center">*/}
                {/*    <div className="inline-block relative">*/}
                {/*        {*/}
                {/*            list[0].word.map((d) => {*/}
                {/*                const {x1,y1,x2,y2} = d;*/}
                {/*                const r = getPosition(list[0].width,list[0].height, x1,y1,x2,y2);*/}
                {/*                return <div style={{left:`${r.x1}%`, top:`${r.y1}%`,right:`${r.x2}%`, bottom:`${r.y2}%`}} className="hover:border hover:border-gray-500 hover:border-4 absolute"> </div>*/}
                {/*            })*/}
                {/*        }*/}
                {/*        <img ref={imageRef} src={image} onClick={onClick}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
    );
}
export default Viewer;
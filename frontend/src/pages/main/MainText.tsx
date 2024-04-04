import React from "react";

export default function MainText (){
  // return <div className="text-4xl fixed inset-x-0 translate-y-20 p-16 laughtale-font " style={{writingMode:"vertical-rl"}}>
  return  (
    <div className=" text-4xl inset-x-0 laughtale-font grow-0 z-10"  >
        <div className="flex flex w-max p-3 text-black font-bold" style={{justifyContent:'flex-end'}}>
          <span className="font-bold" style={{writingMode:"vertical-rl",  paddingLeft:"40px", letterSpacing:'3px'}}>  간단한 어휘 사용 가능</span>
          {/*<span className="font-bold" style={{writingMode:"vertical-rl",  paddingLeft:"40px", letterSpacing:'3px'}}>  업무, 비지니스 수준의 의사소통 가능</span>*/}
          {/*<span className="font-bold" style={{writingMode:"vertical-rl",  paddingLeft:"40px", letterSpacing:'3px' }}> 정확한 시제 구사, 이유와 설명 전달 가능</span>*/}
          {/*<span className="font-bold" style={{writingMode:"vertical-rl",  paddingLeft:"40px", letterSpacing:'3px'}}>  일상 대화 수준의 의사소통 가능</span>*/}
          {/*<span className="font-bold" style={{writingMode:"vertical-rl",  paddingLeft:"40px", letterSpacing:'3px'}}>  업무, 비지니스 수준의 의사소통 가능</span>*/}
        </div>

      {/*<div className=" p-3 text-black font-bold" style={{writingMode:"vertical-rl"}}>*/}
      {/*  lv1 : 간단한 어휘 사용 가능*/}
      {/*</div>*/}
      {/*<div className=" p-3 text-black font-bold" style={{writingMode:"vertical-rl"}}>*/}
      {/*  lv2 : 정확한 어휘, 발음, 문법 사용 가능*/}
      {/*</div>*/}
      {/*<div className=" p-3 text-black font-bold" style={{writingMode:"vertical-rl"}}>*/}
      {/*  lv3 : 정확한 시제 구사, 이유와 설명 전달 가능*/}
      {/*</div>*/}
      {/*<div className=" p-3  text-black font-bold" style={{writingMode:"vertical-rl"}}>*/}
      {/*  lv4 : 일상 대화 수준의 의사소통 가능*/}
      {/*</div>*/}
      {/*<div className=" p-3  text-black font-bold" style={{writingMode:"vertical-rl"}}>*/}
      {/*  lv 5 : 업무, 비지니스 수준의 의사소통 가능*/}
      {/*</div>*/}
  </div>)
}
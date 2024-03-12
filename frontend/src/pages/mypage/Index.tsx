import myImage from '../../assets/badge/badge1.png';
import graph from '../../assets/graph.png';
import MypageHeader from '../../components/common/mypageHeader';

const Index = () => {
  return <div className="bg-[#212529] min-h-screen">
    <div className="max-w-[700px] m-auto">

    <div>
      <MypageHeader/>
    </div>
      <div className="text-white font-semibold">
        경험치
      </div>
      <div className="flex space-x-8">
        <div className="bg-gradient-to-r text-white from-[#4EDBDE] from-5% to-[#5572A1] to-100% font-semibold flex rounded-xl overflow-hidden mb-1 w-60 h-60 flex justify-center items-center">
          <div className="flex justify-items-center items-center">
            <img src={myImage} width="100" height="100"></img>
            만화좋아
          </div>
        </div>
        <div>
          <img src={graph} width="400" height="400" alt="이미지 설명" />
        </div>
      </div>

      <div className="bg-gradient-to-r text-white font-semibold text-base flex items-center rounded-2xl mb-3 space-x-2">
        <div className="text-white font-semibold">
          LV1
        </div>
        <div className="bg-gradient-to-r from-[#4EDBDE] from-5% to-[#5572A1] to-100% font-semibold flex rounded-xl overflow-hidden w-80 h-5">
        </div>
      </div>

      <div className="text-white font-semibold">
        단어장
      </div>
      <div className="flex">
        <div className="bg-gradient-to-r from-[#4EDBDE] from-5% to-[#5572A1] to-100% text-white font-semibold rounded-xl overflow-hidden mb-1 w-60 h-60 mr-5 flex justify-center items-center">
        <div>
          <img src={myImage} width="100" height="100" alt="이미지 설명" />
          <p className="text-center">LV1</p>
        </div>
       </div>
       <div className="bg-gradient-to-r from-[#4EDBDE] from-5% to-[#5572A1] to-100% text-white font-semibold rounded-xl overflow-hidden mb-1 w-60 h-60 mr-5 flex justify-center items-center">
        <div>
          <img src={myImage} width="100" height="100" alt="이미지 설명" />
          <p className="text-center">LV1</p>
        </div>
       </div>
       <div className="bg-gradient-to-r from-[#4EDBDE] from-5% to-[#5572A1] to-100% text-white font-semibold rounded-xl overflow-hidden mb-1 w-60 h-60 mr-5 flex justify-center items-center">
        <div>
          <img src={myImage} width="100" height="100" alt="이미지 설명" />
          <p className="text-center">LV1</p>
        </div>
       </div>
      </div>
     
    </div>
  </div>
}

  export default Index;
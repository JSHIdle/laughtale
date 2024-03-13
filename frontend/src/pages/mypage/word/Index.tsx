import MypageHeader from '../../../components/common/mypageHeader.tsx';
const Index = () => {return<div className="bg-[#212529] min-h-screen">
  <div className="max-w-[700px] m-auto">
    <div>
      <MypageHeader/>
    </div>

    <div className="flex justify-center items-center min-h-screen w-full">
      <div
          className="bg-gradient-to-b text-white from-[#46AEB8] to-[#688AC1] font-semibold rounded-xl overflow-hidden w-[700px] h-[700px] flex flex-wrap justify-center items-center">
        <div
            className="bg-gradient-to-r text-white from-[#aad6de] to-[#78becd] font-semibold rounded-xl overflow-hidden w-[300px] h-[200px] flex justify-center items-center">
          단어 1
        </div>
        <div
            className="bg-gradient-to-r text-white from-[#aad6de] to-[#78becd] font-semibold rounded-xl overflow-hidden w-[300px] h-[200px] flex justify-center items-center">
          단어 2
        </div>
        <div
            className="bg-gradient-to-r text-white from-[#aad6de] to-[#78becd] font-semibold rounded-xl overflow-hidden w-[300px] h-[200px] flex justify-center items-center">
          단어 3
        </div>
        <div
            className="bg-gradient-to-r text-white from-[#aad6de] to-[#78becd] font-semibold rounded-xl overflow-hidden w-[300px] h-[200px] flex justify-center items-center">
          단어 4
        </div>
        <div
            className="bg-gradient-to-r text-white from-[#aad6de] to-[#78becd] font-semibold rounded-xl overflow-hidden w-[300px] h-[200px] flex justify-center items-center">
          단어 5
        </div>
        <div
            className="bg-gradient-to-r text-white from-[#aad6de] to-[#78becd] font-semibold rounded-xl overflow-hidden w-[300px] h-[200px] flex justify-center items-center">
          단어 6
        </div>
      </div>
    </div>

  </div>
</div>
}

export default Index;
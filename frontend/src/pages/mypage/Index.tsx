import myImage from '/assets/badge/badge1.png';
import myImage2 from '/assets/badge/badge2.png';
import myImage3 from '../../../public/assets/badge/badge3.png';
import Header from '../../components/common/Header';
import DoughnutChart from "../../components/mypage/DoughnutChart.tsx";
// import { Progress } from "@material-tailwind/react";

// export function Bar() {
//   return (
//       // <div className="flex w-full flex-col gap-4">
//       //   <Progress value={75} size="lg" />
//       // </div>
//   );
// }

const Index = () => {

  return <div className="bg-[#1D1D21] min-h-screen">
      <div className="max-w-[700px] m-auto">
          <div>
              <Header/>
          </div>
          <div className="mt-12 text-white font-semibold">
              경험치
          </div>
          <div className="flex space-x-12">
              <div
                  className="bg-gradient-to-r text-white from-[#4EDBDE] from-5% to-[#8675DA] to-100% font-semibold flex rounded-xl overflow-hidden mr-5 w-60 h-60 flex justify-center items-center">
                  <div className="flex justify-items-center items-center">
                      <img src={myImage} width="100" height="100"></img>
                      만화좋아
                  </div>
              </div>
          </div>


          <div className="flex justify-center items-center">
              <div className="bg-[#2D2D32] w-[700px] h-[300px] rounded-xl mt-6 mb-6">

                  <div className="flex justify-center items-center ">
                      <div className="mt-3 text-white font-semibold">
                          단어장
                      </div>
                  </div>

                  <div className="flex justify-center items-center">
                      <div className="p-6">
                          <div
                              className="bg-gradient-to-b from-[#5BC9E0] from-5% to-[#8E87EA] to-100% text-white font-semibold rounded-xl overflow-hidden w-36 h-48 flex justify-center items-center">
                              <div>
                                  <img src={myImage} width="60" height="60" alt="이미지 설명"/>
                                  <p className="text-center">LV1</p>
                              </div>
                          </div>
                      </div>
                      <div className="p-6">
                          <div
                              className="bg-gradient-to-b from-[#5BC9E0] from-5% to-[#8E87EA] to-100% text-white font-semibold rounded-xl overflow-hidden w-36 h-48 flex justify-center items-center">
                              <div>
                                  <img src={myImage2} width="60" height="60" alt="이미지 설명"/>
                                  <p className="text-center">LV2</p>
                              </div>
                          </div>
                      </div>
                      <div className="p-6">
                          <div
                              className="bg-gradient-to-b from-[#5BC9E0] from-5% to-[#8E87EA] to-100% text-white font-semibold rounded-xl overflow-hidden w-36 h-48 flex justify-center items-center">
                              <div>
                                  <img src={myImage3} width="60" height="60" alt="이미지 설명"/>
                                  <p className="text-center">LV3</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


          <div className="flex justify-center items-center">
              <div className="bg-[#2D2D32] w-[700px] h-[300px] rounded-xl mb-12 flex justify-center items-center">
                      <div>
                          <DoughnutChart/>
                      </div>
              </div>
          </div>

      </div>
  </div>
}

export default Index;
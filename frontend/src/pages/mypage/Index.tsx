// import Header from '../../components/common/Header';
import BlueHeader from '../../components/common/BlueHeader.tsx';
import DoughnutChart from "../../components/mypage/DoughnutChart.tsx";
import { useNavigate } from 'react-router-dom';
import WordLevelChart from "../../components/chart/WordLevelChart.tsx";
import Chart from "../../components/chart/Chart.tsx";
import RecentWord from "../../components/main/RecentWord.tsx";
import ebbinghaus from '../../assets/mypage/ebbinghaus.jpg';

const Index = () => {

    const navigate = useNavigate();
    function goToLevel(level:number) {
        navigate(`word/${level}`);
    }

      return <div className="laughtale-font bg-[#ffffff] min-h-screen" style={{ height: 'calc(100vh * 1.1111)' }}>
          <div>
              <BlueHeader/>
          </div>
          <div className="max-w-[1300px] m-auto">
              <div className="grid grid-cols-2 gap-12 mb-0 mt-20 justify-center items-center">
                  <div className="bg-[#73ABE5]  p-3 rounded-xl mt-6 mb-6">
                      <div className="relative mt-12 flex justify-center items-center bg-[#ffffff] rounded-xl">
                          <div
                              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff] font-bold text-black px-12 py-3 rounded-3xl">
                              단어장
                          </div>
                          <div className="w-[700px] h-[320px] pt-12 pb-12 px-6 flex justify-evenly items-center">
                              <div className="transform hover:scale-110 transition duration-300">
                                  <div
                                      onClick={() => goToLevel(1)}
                                      className={`cursor-pointer bg-gradient-to-b from-[#83E893] from-5% to-[#059C54] to-100% font-semibold rounded-xl overflow-hidden w-36 h-48 flex flex-col justify-center items-center shadow-lg`}
                                  >
                                      <p className="text-center">LV1</p>
                                  </div>
                              </div>
                              <div className="transform hover:scale-110 transition duration-300">
                                  <div
                                      onClick={() => goToLevel(2)}
                                      className={`cursor-pointer bg-gradient-to-b from-[#E4A56A] from-5% to-[#ED8423] to-100%  font-semibold rounded-xl overflow-hidden w-36 h-48 flex flex-col justify-center items-center shadow-lg`}
                                  >
                                      <p className="text-center">LV2</p>
                                  </div>
                              </div>
                              <div className="transform hover:scale-110 transition duration-300">
                                  <div
                                      onClick={() => goToLevel(3)}
                                      className={`cursor-pointer bg-gradient-to-b from-[#DDEC86] from-5% to-[#D7F041] to-100%  font-semibold rounded-xl overflow-hidden w-36 h-48 flex flex-col justify-center items-center shadow-lg`}
                                  >
                                      <p className="text-center">LV3</p>
                                  </div>
                              </div>
                              <div className="transform hover:scale-110 transition duration-300">
                                  <div
                                      onClick={() => goToLevel(4)}
                                      className={`cursor-pointer bg-gradient-to-b from-[#5BC9E0] from-5% to-[#8E87EA] to-100%  font-semibold rounded-xl overflow-hidden w-36 h-48 flex flex-col justify-center items-center shadow-lg`}
                                  >
                                      <p className="text-center">LV4</p>
                                  </div>
                              </div>
                              <div className="transform hover:scale-110 transition duration-300">
                                  <div
                                      onClick={() => goToLevel(5)}
                                      className={`cursor-pointer bg-gradient-to-b from-[#EA96DC] from-5% to-[#E937CD] to-100%  font-semibold rounded-xl overflow-hidden w-36 h-48 flex flex-col justify-center items-center shadow-lg`}
                                  >
                                      <p className="text-center">LV5</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div>
                      <div>
                          <div className="bg-[#73ABE5]  p-3 rounded-xl mt-6 mb-6">
                              <div className="relative mt-12 flex justify-center items-center bg-[#ffffff] rounded-xl">
                                  <div
                                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff] font-bold text-black px-12 py-3 rounded-3xl">
                                      최근 본 만화 목록
                                  </div>
                              </div>

                              <div className="flex justify-center items-center bg-[#ffffff] rounded-2xl">
                                  <div className="w-[700px] h-[320px] rounded-xl flex justify-center items-center ">
                                          <RecentWord/>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>


              </div>

              <div className="grid grid-cols-2 gap-12 mb-4">
                  <div>
                      <div>
                          <div className="bg-[#73ABE5]  p-3 rounded-xl mt-6 mb-6">
                              <div className="relative mt-12 flex justify-center items-center bg-[#ffffff] rounded-xl">
                                  <div
                                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff] font-bold text-black px-12 py-3 rounded-3xl">
                                      단어장 난이도별 단어 개수 분포
                                  </div>
                              </div>

                              <div className="flex justify-center items-center bg-[#ffffff] rounded-2xl">
                                  <div className="w-[750px] h-[250px] rounded-xl flex justify-center items-center ">
                                      <div>
                                          <WordLevelChart/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>


                  <div>
                      <div className="bg-[#73ABE5]  p-3 rounded-xl mt-6 mb-6">
                          <div className="relative mt-12 flex justify-center items-center bg-[#ffffff] rounded-xl">
                              <div
                                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff] font-bold text-black px-12 py-3 rounded-3xl">
                                  내가 푼 퀴즈의 난이도 분포
                              </div>
                          </div>

                          <div className="flex justify-center items-center bg-[#ffffff] rounded-2xl">
                              <div className="w-[700px] h-[250px] rounded-xl flex justify-center items-center ">
                                  <div>
                                      <DoughnutChart/>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div>
                      <div>
                          <div className="bg-[#73ABE5]  p-3 rounded-xl mt-2 mb-6">
                              <div className="relative mt-12 flex justify-center items-center bg-[#ffffff] rounded-xl">
                                  <div
                                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff] font-bold text-black px-12 py-3 rounded-3xl">
                                      학습 단어 망각곡선
                                  </div>
                              </div>

                              <div className="flex justify-center items-center bg-[#ffffff] rounded-2xl">
                                  <div className="w-[750px] h-[600px] rounded-xl flex justify-center items-center ">
                                      <div>
                                          <Chart/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div>
                      <div>
                          <div className="bg-[#73ABE5]  p-3 rounded-xl mt-2 mb-6">
                              <div className="relative mt-12 flex justify-center items-center bg-[#ffffff] rounded-xl">
                                  <div
                                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff] font-bold text-black px-12 py-3 rounded-3xl">
                                      망각곡선 기반 학습법
                                  </div>
                              </div>

                              <div className="flex justify-center items-center bg-[#ffffff] rounded-2xl">
                                  <div className="w-[750px] h-[600px] rounded-xl flex justify-center items-center ">
                                      <div>
                                            <div className="mt-5 ml-9 mb-2 mr-9 ">
                                                <div className="font-bold mb-5 text-4xl">망각곡선이란?</div>
                                                망각곡선 가설은 시간이 지남에 따라 기억이 남아있는 감소의 정도를 말하는 가설로,
                                                이 곡선은 기억을 유지하려는 시도가 없을 때 정보가 시간이 지남에 따라 손실되는 정도를 보여줍니다.<br/>
                                                곡선을 살펴보면 시간이 지남에 따라 잊어버리는 속도가 줄어듦을 알 수 있습니다.
                                            </div>

                                          <div className="flex justify-center">
                                              <img src={ebbinghaus} alt="망각곡선"
                                                   className=" w-[570px] h-[235px] "/>
                                          </div>

                                          <div className="mt-5 ml-9 mb-2 mr-9 ">
                                              이러한 망각곡선 주기에 착안하여 적절한 시점에 퀴즈를 통한 반복학습을 통해 <br/>
                                              장기기억으로 유도하고 있습니다.<br/><br/>
                                              ※ 왼쪽의 학습 단어 망각곡선에는 최근에 퀴즈에서 푼 단어의 예측 기억량을<br/>
                                              시각화한 것입니다.
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>


              </div>

              <div>

              </div>

          </div>
      </div>
}

export default Index;
import Header from '../../components/common/Header';
import DoughnutChart from "../../components/mypage/DoughnutChart.tsx";
import { useNavigate } from 'react-router-dom';
import WordLevelChart from "../../components/chart/WordLevelChart.tsx";
import Chart from "../../components/chart/Chart.tsx";
import LineChart from '../../components/mypage/LineChart.tsx';
import RecentWord from "../../components/main/RecentWord.tsx";

const Index = () => {

    const navigate = useNavigate();
    function goToLevel(level) {
        navigate(`word/${level}`);
    }

    const data = [299, 212, 80, 44, 16]; // api로 받아올 데이터(난이도별 단어 수)

      return <div className="bg-[#ffffff] min-h-screen" style={{ height: 'calc(100vh * 1.1111)' }}>
          <div>
              <Header/>
          </div>
          <div className="max-w-[1300px] m-auto">
              <div className="grid grid-cols-2 gap-12 mb-4 mt-24 flex justify-center items-center">
              <div className="bg-gradient-to-b from-[#59CDE0] to-[#8F89EB]  p-3 rounded-xl mt-6 mb-6">
                  <div className="relative mt-12 flex justify-center items-center bg-[#ffffff] rounded-xl">
                      <div
                          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff] font-bold text-black px-12 py-3 rounded-3xl">
                          단어장
                      </div>
                      <div className="w-[700px] pt-12 pb-12 px-6 flex justify-evenly items-center">
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
                      <div className="bg-gradient-to-b from-[#59CDE0] to-[#8F89EB]  p-3 rounded-xl mt-6 mb-6">
                          <div className="relative mt-12 flex justify-center items-center bg-[#ffffff] rounded-xl">
                              <div
                                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff] font-bold text-black px-12 py-3 rounded-3xl">
                                  차트 ( 예시 )
                              </div>
                          </div>
                          <div className="flex justify-center items-center bg-[#ffffff] rounded-2xl">
                              <div className="w-[700px] h-[180px] rounded-xl flex justify-center items-center ">
                                  <div>
                                      <LineChart />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  </div>

              </div>

              <div className="grid grid-cols-2 gap-12 mb-4">
                  <div>
                      <div>
                          <div className="bg-gradient-to-b from-[#59CDE0] to-[#8F89EB]  p-3 rounded-xl mt-6 mb-6">
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
                  </div>

                  <div>
                      <div>
                          <div className="bg-gradient-to-b from-[#59CDE0] to-[#8F89EB]  p-3 rounded-xl mt-6 mb-6">
                              <div className="relative mt-12 flex justify-center items-center bg-[#ffffff] rounded-xl">
                                  <div
                                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff] font-bold text-black px-12 py-3 rounded-3xl">
                                      단어장 난이도별 단어 개수 분포
                                  </div>
                              </div>

                              <div className="flex justify-center items-center bg-[#ffffff] rounded-2xl">
                                  <div className="w-[700px] h-[250px] rounded-xl flex justify-center items-center ">
                                      <div>
                                          <WordLevelChart data={data}/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div>
                      <div>
                          <div className="bg-gradient-to-b from-[#59CDE0] to-[#8F89EB]  p-3 rounded-xl mt-6 mb-6">
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
                          <div className="bg-gradient-to-b from-[#59CDE0] to-[#8F89EB]  p-3 rounded-xl mt-6 mb-6">
                              <div className="relative mt-12 flex justify-center items-center bg-[#ffffff] rounded-xl">
                                  <div
                                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff] font-bold text-black px-12 py-3 rounded-3xl">
                                      최근 본 만화목록
                                  </div>
                              </div>

                              <div className="flex justify-center items-center bg-[#ffffff] rounded-2xl">
                                  <div className="w-[750px] h-[420px] rounded-xl flex justify-center items-center ">
                                      <div>
                                          <RecentWord/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>


              </div>

          </div>
      </div>
}

export default Index;
import Header from '../../components/common/Header.tsx';

//이전 페이지에서 보내준 데이터를 받을 수 있다.
import { useLocation } from 'react-router-dom';
import ResultWord from '../cartoon/ResultWord.tsx';



const Result = () => {
    const location = useLocation();
    const {  slides , correctAnswersCount } = location.state;
    console.log(correctAnswersCount);


    return (<div className="flex flex-col bg-[#121212]" style={{ height: 'calc(100vh * 1.1111)' }}>
        <Header/>
        <div className="flex justify-center items-center">
            <div className="max-w-[1180px] mt-12">
                <div className="flex flex-col justify-center items-center">
                    <div
                        className="w-[400px] text-[20px] font-bold text-white flex justify-center items-center">
                        퀴즈 풀이 결과
                    </div>
                    <div className="text-white mt-6">
                        <div>
                        전체 단어 : 5
                        </div>
                        <div>
                        맞춘 단어 : {correctAnswersCount}
                        </div>
                        <div>
                        틀린 단어 : {5-correctAnswersCount}
                        </div>
                        <div>
                        점수 : {20*correctAnswersCount}점
                        </div>
                    </div>
                </div>
                <div className="p-12">
                    <ResultWord slides={slides}/>
                </div>
            </div>
        </div>
    </div>);
}

export default Result;
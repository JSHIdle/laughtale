import Header from '../../components/common/Header.tsx';

//이전 페이지에서 보내준 데이터를 받을 수 있다.
import {Link, useLocation, useParams} from 'react-router-dom';
import ResultWord from '../cartoon/ResultWord.tsx';

const prefix = `/cartoon/1`


const Result = () => {
    const location = useLocation();
    const {  slides , correctAnswersCount } = location.state;
    console.log(correctAnswersCount);

    const {chapterId} = useParams();
    const nextchapter = +chapterId+1;

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
                            점수 : {20 * correctAnswersCount}점
                        </div>
                    </div>

                </div>
                <div className="p-12">
                    <ResultWord slides={slides}/>
                </div>
                <div className="flex justify-center text-white">
                    <Link to={`${prefix}/viewer/${nextchapter}`} replace
                          className="p-6 text-2xl text-white bg-[#2D2D32] brightness-100 hover:brightness-115 rounded-3xl ">
                        다음 회차 보기
                    </Link>
                </div>
            </div>
        </div>
    </div>);
}

export default Result;
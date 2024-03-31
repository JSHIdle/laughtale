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

    return (
        <div className="flex flex-col h-screen bg-[#121212]" style={{ height: 'calc(100vh * 1.1111)' }}>
            <Header/>
            <div className="flex-grow flex justify-center items-center">
                <div className="w-full max-w-[1180px] h-[600px]">
                    <div className="flex flex-col justify-center items-center p-12">
                        <div className="w-[400px] text-[20px] font-bold text-white flex justify-center items-center p-6">
                            퀴즈 풀이 결과
                        </div>
                        <div className="text-white mt-6 p-6 text-5xl">
                            <div>
                                {20 * correctAnswersCount}점
                            </div>
                        </div>
                    </div>
                    <div className="z-10 flex justify-center items-center">
                        <ResultWord slides={slides}/>
                    </div>
                    <div className="flex text-white justify-center items-center mt-4">
                        <Link to={`${prefix}/viewer/${nextchapter}`} replace
                              className="z-20 p-6 text-2xl text-white bg-[#2D2D32] brightness-100 hover:brightness-125 rounded-3xl">
                            다음 회차 보기
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Result;
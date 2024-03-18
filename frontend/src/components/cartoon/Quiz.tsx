import QuizSlider from "./QuizSlider.tsx";

const Quiz = () => {
    const dummyData = Array.from({ length: 3 }, (_, index) => ({
    id: index,
    text: `Q${index + 1}. 다음 문제를 풀어보세요 `
}));
    console.log(dummyData[2]);

    return (
        <div className="bg-[#212529] min-h-screen">
            <div className="text-white max-w-[1000px] m-auto">
                <div className="flex justify-center pt-24">
                여기 프로그래스 바가 들어가야할듯</div>
                <QuizSlider slides={dummyData}/>
            </div>
        </div>
    )
}

export default Quiz;
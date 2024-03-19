import CustomSlider from '../../../components/mypage/CustomSlider.tsx';
import Header from "../../../components/common/Header.tsx";

const Index = () => {
  const dummyData = Array.from({ length: 24 }, (_, index) => ({
    id: index,
    content: `あ-う [会う]
동사 1.만나다
2.대면하다;면회하다
3.우연히 만나다;조우하다`,
    text: `항목 ${index + 1}`

  }));

  // dummyData를 6개 단위로 나누어 slideData를 생성
  const slideDatas = [];
  for (let i = 0; i < dummyData.length; i += 8) {
    slideDatas.push(dummyData.slice(i, i + 8));
  }

  console.log(slideDatas[1]);

  // CustomSlider 컴포넌트에 slideData를 slides props로 전달
  return(
  <div className="bg-[#1D1D21] min-h-screen">
    <div className="max-w-[700px] m-auto">

      <div><Header/></div>
      <div className="mt-6">
          <CustomSlider slides={slideDatas}/>
      </div>

    </div>
  </div>
  );
};

export default Index;
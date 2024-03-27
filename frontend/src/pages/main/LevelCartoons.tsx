// LevelCartoons.tsx
import { useParams } from 'react-router-dom';
import LevelCartoonGrid from "../../components/main/LevelCartoonGrid";
import Header from '../../components/common/Header';

import cartoons1 from "../../components/main/sampleData/Cartoons1.ts";


const LevelCartoons = () => {
    const { level } = useParams();

    // 여기서 `level`을 이용하여 만화 데이터를 가져오거나 필터링할 수 있습니다.
    // 예를 들어, API 호출을 통해 해당 레벨의 만화 데이터를 가져오는 로직을 구현할 수 있습니다.


    return (
        <div className="bg-[#212529] min-h-screen text-white">
            <Header/>
            <LevelCartoonGrid cartoons={cartoons1} level={parseInt(level, 10)}/>
        </div>
    );
};

export default LevelCartoons;

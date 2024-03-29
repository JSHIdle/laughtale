// CartoonGrid.tsx
import React from 'react';
import CartoonCard from './CartoonCard';
import {Link} from "react-router-dom"; // 경로는 실제 구조에 맞게 조정해야 합니다.

interface Cartoon {
    thumbnail: string;
    title: string;
    id: number;
}

interface CartoonGridProps {
    cartoons: Cartoon[];
    level:number;
}

const CartoonGrid: React.FC<CartoonGridProps> = ({ cartoons, level }) => {

    const allCartoonsLink = `/cartoons/level/${level}`;
    return (

        <div className="mx-auto comonent_wrap" style={{maxWidth: '600px'}}>
            <div className="flex items-center justify-between mb-4 ComponentHead">
                <div className="text-2xl font-bold ComponentHead_title">Level {level}</div>
                <Link to={allCartoonsLink} className="text-lg text-white hover:text-white-800">
                    Level {level} 만화 더보기
                </Link>
            </div>
            <div className="p-2 mb-8">
                <div className="mx-auto" style={{maxWidth: '950px'}}>
                    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {cartoons.map((webtoon, index) => ( // 배열에서 처음 4개의 요소만 렌더링
                            <CartoonCard
                                key={index}
                                imageUrl={webtoon.thumbnail}
                                title={webtoon.title}
                                mangaId={webtoon.id}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CartoonGrid;

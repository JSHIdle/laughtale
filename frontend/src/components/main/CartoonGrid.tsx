// CartoonGrid.tsx
import React from 'react';
import CartoonCard from './CartoonCard'; // 경로는 실제 구조에 맞게 조정해야 합니다.

interface Cartoon {
    imageUrl: string;
    title: string;
    authors: string[];
    rating: number;
    link: string;
}

interface CartoonGridProps {
    cartoons: Cartoon[];
    level:number;
}

const CartoonGrid: React.FC<CartoonGridProps> = ({ cartoons, level }) => {

    const allCartoonsLink = `/cartoons/level/${level}`;

    return (

        <div className="comonent_wrap mx-auto" style={{maxWidth: '950px'}}>
            <div className="ComponentHead flex justify-between items-center mb-4">
                <div className="ComponentHead_title font-bold text-2xl">Level {level}</div>
                <a href={allCartoonsLink} className="text-lg text-white hover:text-white-800">
                    Level {level} 만화 더보기
                </a>
            </div>
            <div className="p-2 mb-8">
                <div className="mx-auto" style={{maxWidth: '950px'}}>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {cartoons.slice(0, 4).map((webtoon, index) => ( // 배열에서 처음 4개의 요소만 렌더링
                            <CartoonCard
                                key={index}
                                imageUrl={webtoon.imageUrl}
                                title={webtoon.title}
                                authors={webtoon.authors}
                                rating={webtoon.rating}
                                link={webtoon.link}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CartoonGrid;

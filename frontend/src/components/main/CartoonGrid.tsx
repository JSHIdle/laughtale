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
    return (

        <div className="comonent_wrap mx-auto" style={{ maxWidth: '950px' }}>
            <div className="ComponentHead">
                <div className="ComponentHead_title font-bold text-2xl">Level {level}</div>
            </div>
            <div className="p-2">
                <div className="mx-auto" style={{ maxWidth: '950px' }}>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {cartoons.map((webtoon, index) => (
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

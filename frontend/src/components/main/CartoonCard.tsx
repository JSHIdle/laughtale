import React from 'react';

interface CartoonCardProps {
    imageUrl: string;
    title: string;
    authors: string[];
    rating: number;
    link: string;
}

const CartoonCard: React.FC<CartoonCardProps> = ({ imageUrl, title, authors, rating, link }) => {
    return (
        <li className="item" style={{ width: '225px' }} >
            <a href={link} className="block overflow-hidden rounded-lg shadow-lg">
                <div className="relative overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="object-cover w-full h-60 lg:h-80 transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </a>
            <div className="mt-2">
                <a href={link} className="block">
                    <span className="block text-lg font-bold truncate">{title}</span>
                </a>
                <div className="flex justify-between items-center mt-1">
                    <a href="/webtoon" className="text-sm text-gray-700">
                        {authors.join(' / ')}
                    </a>
                    <div className="flex items-center">
                        <svg
                            width="12"
                            height="12"
                            fill="none"
                            className="text-yellow-500 mr-1"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            {/* SVG 내용은 실제 사용할 별 모양의 SVG로 대체해야 합니다. */}
                        </svg>
                        <span className="text-sm">{rating.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default CartoonCard;
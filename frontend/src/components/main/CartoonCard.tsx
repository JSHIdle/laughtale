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
        <li className="mb-5 item sm:w-46 md:w-50">
            <a href={link} className="block overflow-hidden rounded-lg shadow-lg">
                <div className="relative overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="object-cover w-full transition-transform duration-300 h-60 lg:h-80 hover:scale-105"
                    />
                </div>
            </a>
            <div className="mt-2">
                <a href={link} className="block">
                    <span className="block text-lg font-bold truncate">{title}</span>
                </a>
                <div className="flex items-center justify-between mt-1">
                    <a href="/webtoon" className="text-sm text-gray-700">
                        {authors.join(' / ')}
                    </a>
                    <div className="flex items-center">
                        <svg
                            width="12"
                            height="12"
                            fill="none"
                            className="mr-1 text-yellow-500"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            viewBox="0 0 426.667 426.667"
                        >
                            <polygon style={{fill: '#FAC917'}} points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91
      81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "/>
                        </svg>
                        <span className="text-sm">{rating.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default CartoonCard;
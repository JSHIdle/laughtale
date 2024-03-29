import React from 'react';
import {Link} from "react-router-dom";
interface CartoonCardProps {
    imageUrl: string;
    title: string;
    mangaId: number;
}

const CartoonCard: React.FC<CartoonCardProps> = ({ imageUrl, title, mangaId }) => {
    return (
        <li className="mb-5 item sm:w-46 md:w-50">
            <Link to={`/cartoon/${mangaId}`} className="block overflow-hidden rounded-lg shadow-lg">
                <div className="relative overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="object-cover w-full transition-transform duration-300 h-60 lg:h-80 hover:scale-105"
                    />
                </div>
            </Link>
            <div className="mt-2">
                <Link to={`/cartoon/${mangaId}`} className="block">
                    <span className="block text-lg font-bold truncate">{title}</span>
                </Link>
            </div>
        </li>
    );
};

export default CartoonCard;
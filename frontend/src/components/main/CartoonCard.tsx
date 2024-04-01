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
            <Link to={`/cartoon/${mangaId}`} className="block overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-110">
                <div className="relative overflow-hidden ">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="object-cover w-full transition-transform duration-300 h-120 lg:h-120 hover:scale-105"
                    />
                </div>
            </Link>
            <div className="mt-2">
                <Link to={`/cartoon/${mangaId}`} className="block">
                    <span className="block text-4lg font-bold truncate mt-9 text-center">{title}</span>
                </Link>
            </div>
        </li>
    );
};

export default CartoonCard;
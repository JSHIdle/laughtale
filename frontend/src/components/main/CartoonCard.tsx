import React from 'react';
import {Link} from "react-router-dom";
interface CartoonCardProps {
    imageUrl: string;
    title: string;
    mangaId: number;
}

const CartoonCard: React.FC<CartoonCardProps> = ({ imageUrl, title, mangaId }) => {
    return (
        <li className="mb-5 item ">
            <Link to={`/cartoon/${mangaId}`} className="flex block rounded-lg transition-transform duration-300 hover:scale-110 justify-center">
                {/*<div className="flex justify-center">*/}
                    {/*<img*/}
                    {/*    src={imageUrl}*/}
                    {/*    alt={title}*/}
                    {/*    className="object-cover w-72 transition-transform duration-300 h-96 group-hover:scale-105"*/}
                    {/*/>*/}
                    <img
                        src={imageUrl}
                        alt={title}
                        className="object-cover w-72 h-96 shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                {/*</div>*/}
            </Link>
            <div className="mt-2">
                <Link to={`/cartoon/${mangaId}`} className="block">
                    <span className="w-[100px] overflow-ellipsis block text-4lg font-bold truncate mt-9 text-center">{title}</span>
                </Link>
            </div>
           <span className="flex group-hover:border-2 group-hover:border-[#73ABE5] "></span>
        </li>
    );
};

export default CartoonCard;
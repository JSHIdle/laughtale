import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logo.png';
import { Link } from "react-router-dom";
import AuthButton from "./AuthButton.tsx";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`bg-[#121212] flex justify-between items-center px-10 ${isScrolled ? 'fixed top-0 left-0 right-0 z-50' : 'relative'}`}>
            <Link to={`/admin`} className="text-lg text-white hover:text-gray-800">관리자페이지</Link>
            <div className="flex justify-center flex-grow">
                <Link to="/home">
                    <img src={Logo} alt="Logo" height="200" width="170"></img>
                </Link>
            </div>
            <AuthButton/>
        </div>
    )
}

export default Header;

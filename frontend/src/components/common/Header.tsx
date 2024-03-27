import Logo from '../../assets/logo.png';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-[rgba(23,23,26,0.40)] flex justify-between items-center px-10">
            <div className="flex justify-center flex-grow">
                <Link to="/home"> {/* 로고 이미지를 클릭하면 '/home'으로 이동 */}
                    <img src={Logo} alt="Logo" height="200" width="170"></img>
                </Link>
            </div>
            <Link to={`/mypage`} className="text-lg text-white hover:text-gray-800">마이페이지</Link>
        </div>
    )
}

export default Header;
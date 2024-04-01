import {Navigate, NavLink, useNavigate} from "react-router-dom";
import {useAuth} from "../../stores/useAuth.ts";
import {useCallback} from "react";

export default function AfterLoginButton() {
    const navigate = useNavigate();
    const clear = useAuth((state) => state.clear);
    const logout = () => {
        clear();
        navigate("/home");
    }
    return (
        <>
            <div className="flex justify-end">
                <div className="mr-10 text-3xl hover:text-gray-800 text-white">
                    <NavLink to="/mypage">マイページ : 마이페이지</NavLink>
                </div>

                <div className="text-3xl text-white hover:text-gray-800 hover:cursor-pointer" onClick={() => logout()}>
                    ログアウト : 로그아웃
                </div>
            </div>
        </>)
}

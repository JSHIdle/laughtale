import {Navigate, NavLink, useNavigate} from "react-router-dom";
import {useAuth} from "../../stores/useAuth.ts";
import {useCallback} from "react";

export default function AfterLoginButton() {
  const navigate = useNavigate();
  const clear  = useAuth((state) => state.clear);
  const logout =() => {
    clear();
    navigate("/home");
  }
  return (
      <>
      <div className="text-lg mr-3">
        <NavLink to="/mypage">마이페이지</NavLink>
      </div>

      <div className="text-lg" onClick={() => logout()}>
        로그아웃
      </div>
  </>)
}

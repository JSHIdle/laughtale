import {useAuth} from "../stores/useAuth";
import {Navigate, Outlet, useNavigate} from "react-router-dom";
import {Role} from "../constants/Role.ts";
import {useEffect} from "react";
import useModal from "../hooks/useModal.ts";
type Props = {
  roles: Array<Role>
}

const AuthRoute = (props: Props) => {
  const user = useAuth((state) => state.user);
  const token = useAuth((state) => state.token);
  const navigate = useNavigate();
  const toggle = useModal(state =>state.toggle);
  const isAccess = props?.roles.includes(user?.role);
  if(isAccess) {
    return <Outlet/>
  }else {
    toggle();
    return <Navigate to="/home" />
  }
  // return isAccess ? <Outlet/> : <Navigate to="/home" />
}
export default AuthRoute;
import {useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {getMyInfo} from "../../apis/auth.ts";
import {Navigate} from "react-router-dom";
import {useAuth} from "../../stores/useAuth.ts";
import {Role} from "../../constants/Role.ts";
import {useStore} from "zustand";
import {get} from "../../apis";
import {User} from "../../../types";
type Props = {
  accessToken: string;
}

const UserInfoFetcher = (props : Props) => {
  // const {  setToken, clear} = useAuth((state) => );
  const setToken = useAuth((state) => state.setToken);
  const setUser = useAuth(state => state.setUser)
  const clear = useAuth(state => state.clear);

  const {accessToken} = props;
  setToken({accessToken: accessToken});
  const {data, isError} = useSuspenseQuery({
    queryKey: ["auth"],
    queryFn: () => get<User>("/member"),
    retry: 0,
  });
  if(data){
    setToken({accessToken:accessToken});
    setUser({...data})
    return <Navigate to="/home"/>
  }
  if(isError){
    clear();
  }
  return <Navigate to="/error"/>

}
export default UserInfoFetcher;
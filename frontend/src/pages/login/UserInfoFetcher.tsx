import {useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {getMyInfo} from "../../apis/auth.ts";
import {Navigate} from "react-router-dom";
import {useAuth} from "../../stores/useAuth.ts";
import {Role} from "../../constants/Role.ts";
import {useStore} from "zustand";
type Props = {
  accessToken: string;
}

const UserInfoFetcher = (props : Props) => {
  // const {  setToken, clear} = useAuth((state) => );
  const setToken = useAuth((state) => state.setToken);
  const {accessToken} = props;
  const {data, isError} = useSuspenseQuery({
    queryKey: ["auth"],
    queryFn: () => getMyInfo({accessToken}),
    retry: 0,
  });

  if(data){
    setToken({accessToken:accessToken});
    return <Navigate to="/home"/>
  }
  return <Navigate to="/error"/>

}
export default UserInfoFetcher;
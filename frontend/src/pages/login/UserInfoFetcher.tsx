import {useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {getMyInfo} from "../../apis/auth.ts";
import {Navigate} from "react-router-dom";
import {useAuth} from "../../stores/useAuth.ts";
import {Role} from "../../constants/Role.ts";
type Props = {
  accessToken: string;
}

const UserInfoFetcher = (props : Props) => {
  const { setUser, setToken} = useAuth();
  const {accessToken} = props;
  const {data} = useSuspenseQuery({
    queryKey: ["auth"],
    queryFn:() => getMyInfo(),
    retry: 0,
  });

  if(data){
    setToken({accessToken});
    setUser({id:1, nickname:'test', profile:'test', role: Role.USER});
    return <Navigate to="/home"/>
  }else {
    return <Navigate to="/error"/>
  }
}
export default UserInfoFetcher;
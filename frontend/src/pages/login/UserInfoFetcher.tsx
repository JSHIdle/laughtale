import {useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {getMyInfo} from "../../apis/auth.ts";
import {Navigate, Outlet} from "react-router-dom";
import Spinner from "../../components/common/Spinner.tsx";
import {useAuth} from "../../stores/useAuth.ts";
import useAuthLocalStroage from "../../stores/useAuthLocalStroage.ts";
import useLocalStorage from "../../stores/useLocalStorage.ts";
type Props = {
  accessToken?: string;
}
const UserInfoFetcher = (props : Props) => {
  const {user} = useAuth();
  const {accessToken} = props;
  const local = useLocalStorage("accessToken");
  const authLocalStroage = useAuthLocalStroage();
  authLocalStroage.set( {accessToken})
  const {data} = useSuspenseQuery({
    queryKey: ["auth"],
    queryFn:() => getMyInfo(),
    retry: 0,
  });

  if(data){
    console.log(data);
    localStorage.setItem("accessToken",JSON.stringify({accessToken}));
    return <Navigate to="/home"/>
  }else {
    return <Navigate to="/error"/>
  }
}
export default UserInfoFetcher;
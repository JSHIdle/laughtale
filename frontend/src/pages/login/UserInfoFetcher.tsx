import {useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {getMyInfo} from "../../apis/auth.ts";
import {Navigate} from "react-router-dom";
import {useAuth} from "../../stores/useAuth.ts";
import {Role} from "../../constants/Role.ts";
type Props = {
  accessToken: string;
}

const tmpToken = "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJwaWUiLCJleHAiOjEwNzExNTM2NTIyLCJzdWIiOiJ3b2Nrc18yQGhhbm1haWwubmV0Iiwicm9sZXMiOiJST0xFX05PVF9DRVJUSUZJRUQifQ.QS3f6js8xqqPz98Hjc4SJId8mgAUIq7AuogbGzbVcGY&refreshToken=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJwaWUiLCJleHAiOjM2MDE3MTE1MzY1MjIsInN1YiI6IndvY2tzXzJAaGFubWFpbC5uZXQiLCJyb2xlcyI6IlJPTEVfTk9UX0NFUlRJRklFRCJ9._PQjdz9pt3qOz0Q0r2orUXC4iukZZUcjLqfY0dSCj94";

const tmpUser = {
  iss: "pie",
  exp: 10711536522,
  sub: "wocks_2@hanmail.net",
  roles: "ROLE_NOT_CERTIFIED"
}
const UserInfoFetcher = (props : Props) => {
  const {user, setUser, setToken} = useAuth();
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
import useAuthLocalStorage from "../stores/useAuthLocalStorage.ts";
import {useEffect, useState} from "react";
import client, {get} from "../apis";
import {useAuth} from "../stores/useAuth.ts";
import Loading from "../components/common/Loading.tsx";
import {User} from "../../types";

export default function AuthEffect ({children}){
  const authLocalStorage = useAuthLocalStorage();
  const authData = authLocalStorage.get();
  const {getToken, setToken, setUser, user,token,clear} = useAuth(state => ({...state}));
  const [loading, setLoding] = useState(true);
  useEffect(() => {
    console.log("authEffect")
    if(!authData?.accessToken) {
      setLoding(false);
      return;
    }

    get<User>("/member").then(res => {
      setToken({accessToken: authData.accessToken});
      setUser({...res});
      console.log("data",res);
      console.log("ut " ,user, token)
      setLoding(false);
    }).catch(error => {
      console.log(error);
      clear();
      setLoding(false);
    });

  }, []);
  if(loading) {
    return <Loading/>;
  }

  return <>{children}</>
}
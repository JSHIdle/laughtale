import useLocalStorage from "../../stores/useLocalStorage.ts";
import useAuthLocalStroage from "../../stores/useAuthLocalStroage.ts";
import {Suspense} from "react";
import {useMutation, useQuery} from "@tanstack/react-query";
import {getMyInfo} from "../../apis/auth.ts";
import LoginFetchingSuspense from "./LoginFetchingSuspense.tsx";
import {ErrorBoundary} from "react-error-boundary";
import UserInfoFetcher from "./UserInfoFetcher.tsx";

type Props = {
  accessToken:string;
}
const LoginPostProcessComponent = ({accessToken} : Props) => {
  return <ErrorBoundary fallbackRender={() => <div>error..</div>}>
    <LoginFetchingSuspense>
      <UserInfoFetcher accessToken={accessToken}/>
      </LoginFetchingSuspense>
    </ErrorBoundary>
}
export default LoginPostProcessComponent;
import LoginFetchingSuspense from "./LoginFetchingSuspense.tsx";
import {ErrorBoundary} from "react-error-boundary";
import UserInfoFetcher from "./UserInfoFetcher.tsx";
import ErrorPage from "../error/Index.tsx";

type Props ={
  accessToken:string;
}
const LoginPostProcessComponent = ({accessToken} : Props) => {
  console.log("login post process Components")
  return (
    <ErrorBoundary fallbackRender={() => <ErrorPage/>}>
      <LoginFetchingSuspense>
        <UserInfoFetcher accessToken={accessToken}/>
      </LoginFetchingSuspense>
    </ErrorBoundary>
  )
}
export default LoginPostProcessComponent;
import {RouterProvider} from "react-router-dom";
import router from "./routes";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useEffect} from "react";
import AuthEffect from "./layout/AuthEffect.tsx";
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{

    }
  }
});

export default function App(){
  return <QueryClientProvider client={queryClient}>
    <AuthEffect><RouterProvider router={router} /></AuthEffect>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
}
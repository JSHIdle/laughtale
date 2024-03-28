import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./index.css"
import './styles/SliderStyles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions:{
  }
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>

);

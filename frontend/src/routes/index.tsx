import {
  createBrowserRouter,
  Navigate, Outlet,
} from "react-router-dom";


import Recommend from "../pages/main/Recommend";
import Recent from "../pages/main/Recent";
import LevelCartoons from '../pages/main/LevelCartoons';

import Mypage from "../pages/mypage/Index";
import Word from "../pages/mypage/word/Index";

import Cartoon from "../pages/cartoon/Index";
import Viewer from "../pages/cartoon/Viewer";

import Result from "../components/cartoon/Result.tsx";
import Quiz from "../components/cartoon/Quiz.tsx";
import AuthRoute from "./AuthRoute.tsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace={true} />,
  },
  {
    path: "login",
    element: <div>login page</div>,
  },
  {
    path: "/home",
    element: <Outlet/>,
    children: [
      {
        path:'',
        element: <Recommend />
      },
      {
        path: "recent",
        element: <Recent />,
      },
    ],
  },
  {
    path: "/cartoons/level/:level",
    element: <LevelCartoons />,
  },
  {
    path: "/mypage",
    element: <Outlet/>,
    children: [
      {
        path:'',
        element: <Mypage/>,
      },
      {
        path: "word",
        element: <Word/>,
      },
    ]
  },
  {
    path: "/cartoon",
    element: <Outlet/>,
    children:[
      {
        path:":title", element: <Cartoon/>,
      },
      {
        path:":title/viewer",
        element: <AuthRoute/>,
        children:[
          {
            path:':id', element:<Viewer/>
          }
        ]
      }
    ],
  },

  {
    path: "/quiz",
    element: <Outlet/>,
    children:[
      {
        path:'',
        element: <Quiz/>,
      },
      {
        path:"result", element: <Result/>,
      },
    ],
  },
]);

export default router;
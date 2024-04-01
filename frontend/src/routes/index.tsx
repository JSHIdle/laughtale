import {createBrowserRouter, Navigate, Outlet,} from "react-router-dom";


import Recommend from "../pages/main/Recommend";
import Recent from "../pages/main/Recent";
import LevelCartoons from '../pages/main/LevelCartoons';

import Mypage from "../pages/mypage/Index";
import Word from "../pages/mypage/word/Index";

import Cartoon from "../pages/cartoon/Index";
import Viewer from "../pages/cartoon/Viewer";

import Result from "../components/cartoon/Result";
import Quiz from "../components/cartoon/Quiz";
import Login from "../pages/login/Index.tsx";
import Admin from "../pages/admin/Index";
import Error from "../components/common/Error.tsx";
import Logout from '../pages/logout/Index.tsx';
import Analyze from "../pages/analyze";
import NewMain from "../pages/newmain/NewMain.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/main" replace={true} />,
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "/logout",
    element: <Logout />,
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
        path: "word/:level",
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
        // element: <AuthRoute/>,
        element: <Outlet/>,
        children:[
          {
            path:':id', element:<Viewer/>
          }
        ]
      }
    ],
  },

  {
    path: "/quiz/new/:chapterId",
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
  {
    path: '/analyze',
    element: <Outlet/>,
    children: [
      {
        path: '',
        element: <Analyze/>
      }
    ]
  },

  {
    path: "/admin",
    element: <Outlet/>,
    children:[
      {
        path:'',
        element: <Admin/>,
      },
      {
        path:"result", element: <Result/>,
      },
    ],
  },

  {
    path: "/error",
    element: <Error />,
  },
  {
    path : "/main",
    element: <NewMain />
  }
]);

export default router;
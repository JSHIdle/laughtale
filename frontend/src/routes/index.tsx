import {createBrowserRouter, Navigate, Outlet,} from "react-router-dom";


import Recommend from "../pages/main/Recommend";
import Recent from "../pages/main/Recent";
import LevelCartoons from '../pages/main/LevelCartoons';

import Mypage from "../pages/mypage/Index";
import Word from "../pages/mypage/word/Index";

import Cartoon from "../pages/cartoon/Index.tsx";
import Viewer from "../pages/cartoon/Viewer";

import Result from "../components/cartoon/Result";
import Quiz from "../components/cartoon/Quiz";
import Login from "../pages/login/Index.tsx";
import Admin from "../pages/admin/Index";
import Error from "../components/common/Error.tsx";
import Logout from '../pages/logout/Index.tsx';
import Analyze from "../pages/analyze";
import NewMain from "../pages/newmain/NewMain.tsx";
import Quizcount from "../components/cartoon/Quizcount.tsx";
import AuthRoute from "./AuthRoute.tsx";
import {Role} from "../constants/Role.ts";

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
    element: <AuthRoute roles={[Role.USER, Role.TEMPORARY_USER, Role.ADMIN]} />,
    children:[
      {
        path:":title", element: <Cartoon/>,
      },
      {
        path:":title/viewer",
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
        path:'cnt',
        element: <Quizcount/>,
      },
      {
        path:"result", element: <Result/>,
      },
    ],
  },
  {
    path: '/analyze',
    element: <AuthRoute roles={[Role.TEMPORARY_USER]}/>,
    children: [
      {
        path: '',
        element: <Analyze/>
      }
    ]
  },

  {
    path: "/admin",
    element:  <AuthRoute roles={[Role.ADMIN, Role.TEMPORARY_USER]}/>,
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
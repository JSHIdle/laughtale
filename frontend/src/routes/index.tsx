import {
  createBrowserRouter,
  Navigate, Outlet,
} from "react-router-dom";


import Genre from "../pages/main/Genre";
import Recommend from "../pages/main/Recommend";
import Week from "../pages/main/Week";
import Recent from "../pages/main/Recent";
import Popular from "../pages/main/Popular";

import Mypage from "../pages/mypage/Index";
import LevelTest from "../pages/mypage/leveltest/Index";
import Word from "../pages/mypage/word/Index";

import Cartoon from "../pages/cartoon/Index";
import Viewer from "../pages/cartoon/Viewer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace={true} />,
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
        path: "week",
        element: <Week />,
      },
      {
        path: "genre",
        element: <Genre />,
      },
      {
        path: "recent",
        element: <Recent />,
      },
      {
        path: "popular",
        element: <Popular />,
      },
    ],
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
        path: "leveltest",
        element: <LevelTest/>,
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
        path:":title/viewer/:id", element: <Viewer/>,
      }
    ]

  },
]);

export default router;

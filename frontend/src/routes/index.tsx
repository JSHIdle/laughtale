import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace={true} />,
  },
  {
    path: "/home",
    element: <Recommend />,
    children: [
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
    element: <Mypage/>,
    children: [
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
    path: "/cartoon/:title",
    element: <Cartoon/>,
    children: [
      {
        path: "viewer/:id",
        element: <Viewer/>,
      },
    ]
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);


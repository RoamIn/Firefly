import { lazy } from "react";

export default [
  {
    path: "/magnet",
    name: "Magnet",
    icon: "magnet",
    exact: true,
    component: lazy(() => import("views/Magnet")),
  },
  {
    path: "/",
    name: "Home",
    icon: "movie1",
    exact: true,
    component: lazy(() => import("views/Movies")),
  },
  {
    path: "/*",
    name: "NotFound",
    icon: "404",
    component: lazy(() => import("views/NotFound")),
  },
];

import { lazy } from "react";
import { Navigate } from "react-router-dom";

const PublicLayout = lazy(() => import("../layouts/PublicLayout"));

const Starter = lazy(() => import("../views/Starter.js"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "/", element: <Navigate to="/101" /> },
      { path: "/:product_id", exact: true, element: <Starter /> },
    ],
  },
];

export default ThemeRoutes;

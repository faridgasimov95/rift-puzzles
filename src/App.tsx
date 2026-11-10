import { createBrowserRouter, type RouteObject } from "react-router";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import { RouterProvider } from "react-router/dom";
import NotFoundPage from "./pages/NotFound";
import { games } from "./games";

const gameRoutes: RouteObject[] = games.map((game) => ({
  path: game.path,
  Component: game.component,
}));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [{ index: true, element: <HomePage /> }, ...gameRoutes],
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

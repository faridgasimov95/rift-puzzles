import { createBrowserRouter } from "react-router";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ChampdlePage from "./pages/Champdle";
import RiftLinksPage from "./pages/RiftLinks";
import AbilityGuesserPage from "./pages/AbilityGuesser";
import RiftSoundPage from "./pages/RiftSound";
import ShopkeeperPage from "./pages/Shopkeepere";
import QuotesPage from "./pages/Quotes";
import HomePage from "./pages/Home";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/champdle", element: <ChampdlePage /> },
      {
        path: "/riftlinks",
        element: <RiftLinksPage />,
      },
      { path: "/ability", element: <AbilityGuesserPage /> },
      { path: "/riftsound", element: <RiftSoundPage /> },
      { path: "/shopkeeper", element: <ShopkeeperPage /> },
      { path: "/quotes", element: <QuotesPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

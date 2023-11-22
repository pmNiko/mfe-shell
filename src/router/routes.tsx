import { createBrowserRouter } from "react-router-dom";
import { PublicLayout, SupportLayout } from "../layout";
import { loaderItemListMenu } from "../loaders";
import { HomePage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: loaderItemListMenu,
    element: <PublicLayout />,
    children: [
      {
        errorElement: <SupportLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
        ],
      },
    ],
  },
]);

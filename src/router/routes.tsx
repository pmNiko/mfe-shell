import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { PublicLayout, SupportLayout } from "../layout";
import { errorLoader, loaderItemsMenu } from "../loaders";
import { HomePage } from "../pages";
import { CircularProgress } from "@mui/material";

const ErrorPage = lazy(() => import("../pages/ErrorPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    loader: loaderItemsMenu,
    element: <PublicLayout />,
    errorElement: <SupportLayout />,
    children: [
      {
        errorElement: <SupportLayout />,
        children: [
          {
            index: true,
            loader: loaderItemsMenu,
            element: <HomePage />,
          },
          {
            path: "error-page",
            loader: errorLoader,
            element: (
              <Suspense fallback={<CircularProgress />}>
                <ErrorPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { PublicLayout, SupportLayout } from "../layout";
import { errorLoader, loaderItemsMenu } from "../loaders";
import { HomePage } from "../pages";

const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const ParcelTest = lazy(() => import("../pages/ParcelTest"));

export const router = createBrowserRouter(
  [
    {
      path: "/",
      loader: loaderItemsMenu,
      element: <PublicLayout />,
      errorElement: <SupportLayout />,
      children: [
        {
          index: true,
          loader: loaderItemsMenu,
          element: <HomePage />,
        },
        {
          path: "parcel",
          element: (
            <Suspense fallback={<CircularProgress />}>
              <ParcelTest />
            </Suspense>
          ),
        },
        {
          path: "jsonplaceholder/",
          children: [],
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
  {
    basename: "/mfe-shell",
  }
);

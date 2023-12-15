import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoadingPage } from "../components";
import { PublicLayout, SupportLayout } from "../layout";
import {
  errorLoader,
  loaderItemsMenu,
  loaderPosts,
  loaderTodos,
} from "../loaders";

import { ProtectedRoute } from "./ProtectedRoute";

import { HomePage } from "../pages";
import { WithErrorBoundary } from "../components/WithErrorBoundary";

const RouterAuth = lazy(() => import("mf-auth/RouterAuth"));

const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const ParcelTest = lazy(() => import("../pages/ParcelTest"));
const Gallery = lazy(() => import("../pages/Gallery"));

const Posts = lazy(() => import("../pages/JSONPLACEHOLDER/Posts"));
const Post = lazy(() => import("../pages/JSONPLACEHOLDER/Post"));
const Comments = lazy(() => import("../pages/JSONPLACEHOLDER/Comments"));
const Todos = lazy(() => import("../pages/JSONPLACEHOLDER/Todos"));
const Users = lazy(() => import("../pages/JSONPLACEHOLDER/Users"));

const Characters = lazy(() => import("../pages/RICK&MORTY/Characters"));
const Character = lazy(() => import("../pages/RICK&MORTY/Character"));
const Locations = lazy(() => import("../pages/RICK&MORTY/Locations"));
const Episodes = lazy(() => import("../pages/RICK&MORTY/Episodes"));

export enum Paths {
  INDEX = "/",
  PARCEL_TEST = "parcel",
  JSONPLACEHOLDER = "jsonplaceholder",
  RICK_AND_MORTY = "rickandmorty",
  ERROR_PAGE = "error-page",
  AUTH = "account/*",
}

const router = createBrowserRouter(
  [
    {
      path: "/auth",
      loader: loaderItemsMenu,
      element: <PublicLayout />,
      errorElement: <SupportLayout />,
      children: [
        {
          path: Paths.AUTH,
          element: (
            <Suspense fallback={<p>Cargando...</p>}>
              <WithErrorBoundary>
                <RouterAuth basepath={"/auth"} />
              </WithErrorBoundary>
            </Suspense>
          ),
        },
      ],
    },
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
            <LoadingPage>
              <ParcelTest />
            </LoadingPage>
          ),
        },
        {
          path: "isProtectedmodule",
          element: (
            <ProtectedRoute>
              <LoadingPage>
                <Gallery />
              </LoadingPage>
            </ProtectedRoute>
          ),
        },
        {
          path: Paths.JSONPLACEHOLDER,
          children: [
            {
              path: "posts",
              loader: loaderPosts,

              element: (
                <LoadingPage>
                  <Posts />
                </LoadingPage>
              ),
            },
            {
              path: "post/:postID/:userID",
              element: (
                <LoadingPage>
                  <Post />
                </LoadingPage>
              ),
            },
            {
              path: "comments",
              element: (
                <LoadingPage>
                  <Comments />
                </LoadingPage>
              ),
            },
            {
              path: "users",
              element: (
                <LoadingPage>
                  <Users />
                </LoadingPage>
              ),
            },
            {
              path: "todos",
              loader: loaderTodos,
              element: (
                <LoadingPage>
                  <Todos />
                </LoadingPage>
              ),
            },
          ],
        },
        {
          path: Paths.RICK_AND_MORTY,
          children: [
            {
              path: "characters",
              element: (
                <LoadingPage>
                  <Characters />
                </LoadingPage>
              ),
            },
            {
              path: "character/:characterID",
              element: (
                <LoadingPage>
                  <Character />
                </LoadingPage>
              ),
            },
            {
              path: "locations",
              element: (
                <LoadingPage>
                  <Locations />
                </LoadingPage>
              ),
            },
            {
              path: "episodes",
              element: (
                <LoadingPage>
                  <Episodes />
                </LoadingPage>
              ),
            },
          ],
        },
        {
          path: Paths.ERROR_PAGE,
          loader: errorLoader,
          element: (
            <LoadingPage>
              <ErrorPage />
            </LoadingPage>
          ),
        },
      ],
    },
  ],
  {
    basename: import.meta.env.VITE_BASENAME,
  }
);

export default () => {
  return <RouterProvider router={router} />;
};

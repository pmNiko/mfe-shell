import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoadingPage } from "../components";
import { PublicLayout, SupportLayout } from "../layout";
import { errorLoader, loaderItemsMenu } from "../loaders";
import { HomePage } from "../pages";
import { useGetPosts, useGetComments } from "../api/JsonPlacecholder";

const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const ParcelTest = lazy(() => import("../pages/ParcelTest"));

const Posts = lazy(() => import("../pages/JSONPLACEHOLDER/Posts"));
const Post = lazy(() => import("../pages/JSONPLACEHOLDER/Post"));
const Comments = lazy(() => import("../pages/JSONPLACEHOLDER/Comments"));
const Todos = lazy(() => import("../pages/JSONPLACEHOLDER/Todos"));
const Users = lazy(() => import("../pages/JSONPLACEHOLDER/Users"));

const Characters = lazy(() => import("../pages/RICK&MORTY/Characters"));
const Locations = lazy(() => import("../pages/RICK&MORTY/Locations"));
const Episodes = lazy(() => import("../pages/RICK&MORTY/Episodes"));

export enum Paths {
  INDEX = "/",
  PARCEL_TEST = "parcel",
  JSONPLACEHOLDER = "jsonplaceholder",
  RICK_AND_MORTY = "rickandmorty",
  ERROR_PAGE = "error-page",
}

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
            <LoadingPage>
              <ParcelTest />
            </LoadingPage>
          ),
        },
        {
          path: Paths.JSONPLACEHOLDER,
          children: [
            {
              path: "posts",
              loader: () => useGetPosts(),
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
              loader: () => useGetComments,
              element: (
                <LoadingPage>
                  <Comments />
                </LoadingPage>
              ),
            },
            {
              path: "todos",
              element: (
                <LoadingPage>
                  <Todos />
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
    basename: "/mfe-shell/",
  }
);

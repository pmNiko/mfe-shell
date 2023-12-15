import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoadingPage } from "../components";
import { PublicLayout, SupportLayout } from "../layout";
import { loaderPosts, loaderTodos } from "../loaders/jsonplaceholder";
import { errorLoader, loaderItemsMenu } from "../loaders/menu";
import { ProtectedRoute } from "./ProtectedRoute";
import { Routes } from "./index";

import HomePage from "../pages/Home";

const RouterAuth = lazy(() => import("mf-auth/RouterAuth"));
const ParcelTest = lazy(() => import("../pages/ParcelTest"));

const ErrorPage = lazy(() => import("../pages/ErrorPage"));
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

const router = createBrowserRouter(
  [
    {
      path: Routes.auth.routerPath,
      loader: loaderItemsMenu,
      element: <PublicLayout />,
      errorElement: <SupportLayout />,
      children: [
        {
          path: Routes.auth.children.account.routerPath,
          element: (
            <LoadingPage>
              <RouterAuth basepath={Routes.auth.routerPath} />
            </LoadingPage>
          ),
        },
      ],
    },
    {
      path: Routes.index.routerPath,
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
          path: Routes.parcelTest.routerPath,
          element: (
            <LoadingPage>
              <ParcelTest />
            </LoadingPage>
          ),
        },
        {
          path: Routes.gallery.routerPath,
          element: (
            <ProtectedRoute>
              <LoadingPage>
                <Gallery />
              </LoadingPage>
            </ProtectedRoute>
          ),
        },
        {
          path: Routes.jsonplaceholder.routerPath,
          children: [
            {
              path: Routes.jsonplaceholder.children.posts.routerPath,
              loader: loaderPosts,
              element: (
                <LoadingPage>
                  <Posts />
                </LoadingPage>
              ),
            },
            {
              path: Routes.jsonplaceholder.children.post.routerPath,
              element: (
                <LoadingPage>
                  <Post />
                </LoadingPage>
              ),
            },
            {
              path: Routes.jsonplaceholder.children.comments.routerPath,
              element: (
                <LoadingPage>
                  <Comments />
                </LoadingPage>
              ),
            },
            {
              path: Routes.jsonplaceholder.children.users.routerPath,
              element: (
                <LoadingPage>
                  <Users />
                </LoadingPage>
              ),
            },
            {
              path: Routes.jsonplaceholder.children.todos.routerPath,
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
          path: Routes.rickAndMorty.routerPath,
          children: [
            {
              path: Routes.rickAndMorty.children.characters.routerPath,
              element: (
                <LoadingPage>
                  <Characters />
                </LoadingPage>
              ),
            },
            {
              path: Routes.rickAndMorty.children.character.routerPath,
              element: (
                <LoadingPage>
                  <Character />
                </LoadingPage>
              ),
            },
            {
              path: Routes.rickAndMorty.children.locations.routerPath,
              element: (
                <LoadingPage>
                  <Locations />
                </LoadingPage>
              ),
            },
            {
              path: Routes.rickAndMorty.children.episodes.routerPath,
              element: (
                <LoadingPage>
                  <Episodes />
                </LoadingPage>
              ),
            },
          ],
        },
        {
          path: Routes.errorPage.routerPath,
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

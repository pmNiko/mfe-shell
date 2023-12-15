export const Routes = {
  index: {
    routerPath: "/",
  },
  auth: {
    routerPath: "/auth",
    children: {
      account: {
        routerPath: "account/*",
        absolutePath: "/auth/account/*",
      },
    },
  },
  jsonplaceholder: {
    routerPath: "jsonplaceholder",
    children: {
      posts: { routerPath: "posts", absolutePath: "/jsonplaceholder/posts" },
      post: {
        routerPath: "post/:postID/:userID",
        absolutePath: "/jsonplaceholder/post",
      },
      comments: { routerPath: "comments" },
      users: { routerPath: "users" },
      todos: { routerPath: "todos" },
    },
  },
  rickAndMorty: {
    routerPath: "rickandmorty",
    children: {
      characters: { routerPath: "characters" },
      character: { routerPath: "character/:characterID" },
      locations: { routerPath: "locations" },
      episodes: { routerPath: "episodes" },
    },
  },
  errorPage: {
    routerPath: "error-page",
  },
  parcelTest: {
    routerPath: "parcel",
  },
  gallery: {
    routerPath: "gallery",
  },
};

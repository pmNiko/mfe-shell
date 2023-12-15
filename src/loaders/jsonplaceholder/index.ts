import { useGetPosts, useGetTodos } from "../../api/JsonPlacecholder";

export const loaderPosts = () => useGetPosts();
export const loaderTodos = () => useGetTodos();

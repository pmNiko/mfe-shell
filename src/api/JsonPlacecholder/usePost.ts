import { PostResponse } from "../../interfaces/JsonPlaceholderApi/Posts";
import { useGetJsonPlaceholder } from "./commons";

export const useGetPosts = async (quantity: number = 8) => {
  return (await useGetJsonPlaceholder(
    `/posts?_limit=${quantity}`
  )) as PostResponse[];
};

export const useGetPostByID = async (id: string) => {
  return (await useGetJsonPlaceholder(`/posts/${id}`)) as PostResponse;
};

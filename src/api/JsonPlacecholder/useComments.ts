import { CommentResponse } from "../../interfaces/JsonPlaceholderApi/Comments";
import { useGetJsonPlaceholder } from "./commons";

export const useGetComments = async (quantity: number = 10) => {
  return (await useGetJsonPlaceholder(
    `comments?_limit=${quantity}`
  )) as CommentResponse[];
};

import { CommentResponse } from "../../interfaces/JsonPlaceholderApi/Comments";
import { useGetJsonPlaceholder } from "./commons";

export const useGetComments = async (query: string = "") => {
  return (await useGetJsonPlaceholder(query)) as CommentResponse[];
};

import { TodoResponse } from "../../interfaces/JsonPlaceholderApi/Todos";
import { useGetJsonPlaceholder } from "./commons";

export const useGetTodos = async (quantity: number = 10) => {
  return (await useGetJsonPlaceholder(
    `/todos?_limit=${quantity}`
  )) as TodoResponse[];
};

import { CharacterResponse } from "../../interfaces/Rick&MortyApi/Caracters";
import { useGetRickAndMorty } from "./commons";

export const useGetCharacters = async (page: number = 1) => {
  return (await useGetRickAndMorty(
    `character/?page=${page}`
  )) as CharacterResponse[];
};

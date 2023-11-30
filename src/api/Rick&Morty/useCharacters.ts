import { CharacterResponse } from "../../interfaces/Rick&MortyApi/Caracters";
import { useGetRickAndMorty } from "./commons";

export const useGetCharacters = async (offset: number = 0) => {
  const quantity = 12;
  const start = offset * quantity + 1;
  const limit = quantity + start;

  const arrayCharacters = Array.from(
    { length: limit - start },
    (_, a) => a + start
  );

  return (await useGetRickAndMorty(
    `/character/[${arrayCharacters}]`
  )) as CharacterResponse[];
};

export const useGetCharacterByID = async (id: string) =>
  (await useGetRickAndMorty(`/character/${id}`)) as CharacterResponse;

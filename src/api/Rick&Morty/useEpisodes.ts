import { EpisodeResponse } from "../../interfaces/Rick&MortyApi/Episodes";
import { useGetRickAndMorty } from "./commons";

export const useGetEpisodes = async (offset: number = 0) => {
  const quantity = 12;
  const start = offset * quantity + 1;
  const limit = quantity + start;

  const arrayCharacters = Array.from(
    { length: limit - start },
    (_, a) => a + start
  );

  return (await useGetRickAndMorty(
    `/episode/[${arrayCharacters}]`
  )) as EpisodeResponse[];
};

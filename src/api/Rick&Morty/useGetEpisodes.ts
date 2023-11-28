import { EpisodeResponse } from "../../interfaces/Rick&MortyApi/Episodes";
import { useGetRickAndMorty } from "./commons";

export const useGetEpisodes = async (page: number = 1) => {
  return (await useGetRickAndMorty(
    `episode/?page=${page}`
  )) as EpisodeResponse[];
};

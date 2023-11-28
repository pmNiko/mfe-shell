import { LocationResponse } from "../../interfaces/Rick&MortyApi/Locations";
import { useGetRickAndMorty } from "./commons";

export const useGetLocations = async (page: number = 1) => {
  return (await useGetRickAndMorty(
    `location?page=${page}`
  )) as LocationResponse[];
};

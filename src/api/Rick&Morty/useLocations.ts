import { LocationResponse } from "../../interfaces/Rick&MortyApi/Locations";
import { useGetRickAndMorty } from "./commons";

export const useGetLocations = async (offset: number = 0) => {
  const quantity = 12;
  const start = offset * quantity + 1;
  const limit = quantity + start;

  const arrayCharacters = Array.from(
    { length: limit - start },
    (_, a) => a + start
  );

  return (await useGetRickAndMorty(
    `/location/[${arrayCharacters}]`
  )) as LocationResponse[];
};

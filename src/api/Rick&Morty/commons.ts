const BASE_URL = "https://rickandmortyapi.com/api";

export const useGetRickAndMorty = async (endPath: string) => {
  return await fetch(BASE_URL + endPath).then((response) => response.json());
};

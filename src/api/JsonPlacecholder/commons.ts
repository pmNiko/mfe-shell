const BASE_URL = "https://jsonplaceholder.typicode.com";

export const useGetJsonPlaceholder = async (endPath: string) => {
  return await fetch(BASE_URL + endPath).then((response) => response.json());
};

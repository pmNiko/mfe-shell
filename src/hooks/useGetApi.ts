import { useEffect, useState } from "react";

interface EstraOptions {
  manual?: boolean;
}

export const useGetApi = <T>(
  request: (param?: any) => Promise<T>,
  { manual = false }: EstraOptions
) => {
  const [loading, setLoading] = useState(false);
  const [data, setdata] = useState([] as T | {} as T);
  const [error, setError] = useState(false);

  const doRequest = async () => {
    try {
      setLoading(true);

      const response = await request();

      setdata(response);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error("Request error detail: ", error);
    }
  };

  useEffect(() => {
    !manual && doRequest();
  }, []);

  return {
    loading,
    error,
    data,
    doRequest,
  };
};

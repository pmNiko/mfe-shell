import { useEffect, useState } from "react";

export const useGetApi = <T>(request: (param?: any) => Promise<T[] | T>) => {
  const [loading, setLoading] = useState(false);
  const [data, setdata] = useState<T[] | T>([] as T[] | T);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
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
    })();
  }, []);

  return {
    loading,
    error,
    data,
  };
};

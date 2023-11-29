import { useEffect, useState } from "react";

interface EstraOptions {
  manual?: boolean;
  refetching?: null | any;
}

export const useGetApi = <T>(
  request: (param?: any) => Promise<T>,
  { manual = false, refetching = null }: EstraOptions
) => {
  const [loading, setLoading] = useState(false);
  const [data, setdata] = useState([] as T | {} as T);
  const [error, setError] = useState(false);
  const [lastRequestIsEmpty, setLastRequestIsEmpty] = useState(false);

  const doRequest = async () => {
    try {
      setLoading(true);

      const response = await request();

      if (JSON.stringify(response).length > 2) {
        setLastRequestIsEmpty(false);
        setdata(response);
      } else {
        setLastRequestIsEmpty(true);
      }

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

  useEffect(() => {
    refetching !== null && doRequest();
  }, [refetching]);

  return {
    loading,
    error,
    data,
    doRequest,
    lastRequestIsEmpty,
  };
};

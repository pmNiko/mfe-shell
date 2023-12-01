import { useEffect, useState } from "react";

interface EstraOptions {
  manual?: boolean;
  refetching?: null | any;
}

/**
 * useGetApi
 *  - Manejador de estado de peticiones asincronas.
 *  - Las opciones extras contoenen dos props:
 *    1. manual: si se cambia a true deberá usar doRequest para que se realice la petición.
 *    2. refetching: esta representa la dependencia de refetching por defecto es nula.
 * @param request (param?: any) => Promise<T>
 * @param?  { manual = false, refetching = null }
 */
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

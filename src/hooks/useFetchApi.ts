import { useState, useEffect, useRef } from "react";
import { fetchApi, Method, Options } from "../api";

import { Response } from "../types/api";

const AbortController = window.AbortController;

export const useFetchApi = (
  resouce: string,
  method: Method = "GET",
  options?: Options
) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [response, setResponse] = useState<Response | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const controller = new AbortController();

  const mounted = useRef<boolean>(false);

  const startFetch = async (body?: Options["body"]) => {
    setIsFetching(true);
    setError(null);

    try {
      const response = await fetchApi(resouce, {
        signal: controller.signal,
        method,
        body,
        ...options,
      });

      const res = await response.json();

      if (!response.ok) {
        throw res;
      }

      setResponse(res);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsFetching(false);
    }
  };

  const cancelFetch = () => controller.abort();

  useEffect(() => {
    mounted.current = true;
    return () => {
      if (!mounted.current) {
        controller.abort();
      }
      mounted.current = false;
    };
  }, []);

  return {
    isFetching,
    response,
    error,
    startFetch,
    cancelFetch,
  };
};

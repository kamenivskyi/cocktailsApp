import { useState, useEffect, useCallback } from "react";

interface IReturnedType<T> {
  data: T | null;
  loading: boolean;
  error: boolean;
  doFetch: (func: Function, arg: string) => void;
}
const useAsyncData = <T>(
  requestData: Function,
  arg?: string
): IReturnedType<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const doFetch = useCallback((getDataCallback: Function, arg?: string) => {
    setLoading(true);
    getDataCallback(arg)
      .then((data: T) => {
        setData(data);
        setError(false);
      })
      .catch((err: Error) => {
        setError(true);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    doFetch(requestData, arg);
  }, [doFetch, requestData, arg]);

  return { data, loading, error, doFetch };
};

export default useAsyncData;

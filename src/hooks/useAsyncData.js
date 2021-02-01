import { useState, useEffect, useCallback } from 'react';

const useAsyncData = (requestData, arg) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const doFetch = useCallback((getDataCallback, arg) => {
    setLoading(true);
    getDataCallback(arg)
      .then((response) => {
        setData(response);
        setError(false);
      })
      .catch((err) => {
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

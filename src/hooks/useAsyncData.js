import { useState, useEffect, useCallback } from 'react';

const useAsyncData = (requestData, arg) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const doFetch = useCallback((getDataFunc, arg) => {
    setLoading(true);

    getDataFunc(arg)
      .then(response => {
        setData(response)
      })
      .catch(err => {
        setError(true);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  useEffect(() => {
    doFetch(requestData, arg);

  }, [doFetch, requestData, arg]);

  return { data, loading, error, doFetch };
}


export default useAsyncData;

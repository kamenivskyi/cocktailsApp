import { useCallback, useState } from 'react';

const useAlert = (initialValue) => {
  const [alert, setAlert] = useState(initialValue || null);
  const defaultTimeout = 4000;

  const generateAlert = useCallback((msg, type, timeout) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), timeout || defaultTimeout);
  }, []);

  return [alert, generateAlert];
};

export default useAlert;

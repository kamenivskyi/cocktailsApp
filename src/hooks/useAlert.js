import { useCallback, useState } from "react";

const useAlert = (initialValue) => {
  const [alert, setAlert] = useState(initialValue || null);
  const DEFAULT_TIMEOUT = 4000;

  const generateAlert = useCallback((msg, type, timeout = DEFAULT_TIMEOUT) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), timeout);
  }, []);

  return [alert, generateAlert];
};

export default useAlert;

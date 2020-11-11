import { useState } from 'react';

const useAlert = (initialValue) => {
  const [alert, setAlert] = useState(initialValue || null);
  const defaultTimeout = 4000;
  
  const generateAlert = (msg, type, timeout) => {
    setAlert({ msg, type })
    setTimeout(() => setAlert(null), timeout || defaultTimeout);
  };

  return [alert, generateAlert];
};

export default useAlert;
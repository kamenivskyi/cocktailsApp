import { useCallback, useState } from "react";

interface IAlertObject {
  msg: string;
  type: string;
}
type TGenerateAlert = (msg: string, type: string, timeout?: number) => void;
type TReturnedType = [IAlertObject, TGenerateAlert];

const defaultState = {
  msg: "",
  type: "",
};
const useAlert = (): TReturnedType => {
  const [alert, setAlert] = useState(defaultState);
  const DEFAULT_TIMEOUT = 4000;

  const generateAlert = useCallback(
    (msg: string, type: string, timeout?: number): void => {
      setAlert({ msg, type });
      setTimeout(() => setAlert(defaultState), timeout || DEFAULT_TIMEOUT);
    },
    []
  );

  return [alert, generateAlert];
};

export default useAlert;

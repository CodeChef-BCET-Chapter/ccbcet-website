import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    const localStorageValue = localStorage.getItem(key);
    if (localStorageValue) {
      return localStorageValue;
    }
    return initialValue;
  });
  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);
  return [state, setState];
}

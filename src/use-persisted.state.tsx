import { useState, useEffect } from "react";

export default function usePersistedState(lsKey: string, initialState: Todo[]) {
  const [state, setState] = useState(() => {
    const foundValue = localStorage.getItem(lsKey);
    if (foundValue) {
      return JSON.parse(foundValue).value;
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(lsKey, JSON.stringify({ value: state }));
  }, [state, lsKey]);

  return [state, setState];
}

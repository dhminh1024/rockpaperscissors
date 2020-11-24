import React from "react";

export const shapes = ["rock", "paper", "scissors"];
// Meaning: 0 = tie, -1 = loss, 1 = win
export const roundOutcome = {
  rock: { rock: 0, paper: -1, scissors: 1 },
  paper: { rock: 1, paper: 0, scissors: -1 },
  scissors: { rock: -1, paper: 1, scissors: 0 },
};

export const initialProps = {
  choice: "unknown",
  title: "",
  win: 0,
  score: 0,
};

export const useLocalStorageState = (
  key,
  defaultValue = "",
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) => {
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      // the try/catch is here in case the localStorage value was set before
      // we had the serialization in place (like we do in previous extra credits)
      try {
        return deserialize(valueInLocalStorage);
      } catch (error) {
        window.localStorage.removeItem(key);
      }
    }
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });

  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
};

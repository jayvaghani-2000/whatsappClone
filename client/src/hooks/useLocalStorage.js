import { useState, useEffect } from "react";

const PREFIX = "whatsapp-clone";

const useLocalStorage = (key, initialValue) => {
  const prefixedKey = PREFIX + key;
  const [values, setValues] = useState(() => {
    const json = localStorage.getItem(prefixedKey);
    if (json != null) return JSON.parse(json);
    if (typeof initialValue === "function") {
      return initialValue();
    }
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(values));
  }, [values, key]);

  return [values, setValues];
};

export default useLocalStorage;

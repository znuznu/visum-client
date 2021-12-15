import { useState } from 'react';

const useLocalStorage = (key: string, defaultValue?: string) => {
  const [item, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  });

  const setItem = (value: string) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  const deleteItem = () => {
    setStoredValue(undefined);
    window.localStorage.removeItem(key);
  };

  return [item, setItem, deleteItem];
};

export default useLocalStorage;

import { useEffect, useState } from 'react';

export const useLocalStorage = (storageKey: string, key: string) => {
  const [value, setValue] = useState(
    () => JSON.parse(localStorage.getItem(storageKey) as string) || {}
  );

  useEffect(() => {
    const obj = JSON.parse(localStorage.getItem(storageKey) as string) || {};

    if (!Object.keys(obj).includes(key)) {
      const event = {
        ...obj,
        [key]: '',
      };
      localStorage.setItem(storageKey, JSON.stringify(event));
      setValue('');
    } else {
      setValue(obj[key]);
    }
  }, []);

  return [value, setValue];
};

export const saveToLocalStorage = (
  storageKey: string,
  key: string,
  content: string
) => {
  const item = JSON.parse(localStorage.getItem(storageKey) as string);
  const edited = {
    ...item,
    [key]: content,
  };
  localStorage.setItem(storageKey, JSON.stringify(edited));
};

import { useEffect } from 'react';
import { useCallback } from 'react';

const useDebouncedEffect = (func, delay, deps) => {
  const callback = useCallback(func, deps);
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [callback, delay]);
};

export default useDebouncedEffect;

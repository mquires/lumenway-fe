import { useEffect, useState } from 'react';

/**
 * Hook for detecting media query matches
 * @param query - CSS media query string (e.g. '(max-width: 768px)')
 * @returns boolean indicating if the media query matches
 */

export const useMediaQuery = (query: string) => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    const onChange = (e: MediaQueryListEvent) => {
      setValue(e.matches);
    };

    const result = matchMedia(query);
    result.addEventListener('change', onChange);

    setValue(result.matches);

    return () => result.removeEventListener('change', onChange);
  }, [query]);

  return value;
};

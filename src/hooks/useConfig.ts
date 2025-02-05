import { configStore } from '@/store/config/config.store';

export const useConfig = () => {
  const theme = configStore(state => state.theme);
  const setTheme = configStore(state => state.setTheme);

  return {
    theme,
    setTheme,
  };
};

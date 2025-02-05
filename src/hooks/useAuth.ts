import { authStore } from '@/store/auth/auth.store';

export const useAuth = () => {
  const isAuthenticated = authStore(state => state.isAuthenticated);
  const setIsAuthenticated = authStore(state => state.setIsAuthenticated);

  const login = () => setIsAuthenticated(true);
  const exit = () => setIsAuthenticated(false);

  return {
    isAuthenticated,
    login,
    exit,
  };
};

import { authStore } from '@/store/auth/auth.store';

/**
 * Hook for managing authentication state
 * @returns Authentication state and control functions
 */

export const useAuth = () => {
  const isAuthenticated = authStore(state => state.isAuthenticated);
  const setIsAuthenticated = authStore(state => state.setIsAuthenticated);

  const auth = () => setIsAuthenticated(true);
  const exit = () => setIsAuthenticated(false);

  return {
    isAuthenticated,
    auth,
    exit,
  };
};

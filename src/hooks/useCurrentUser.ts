import { useEffect } from 'react';
import { useAuth } from './useAuth';

/**
 * Hook for managing current user data and authentication state
 * @returns Current user data, loading state and refetch function
 */

export const useCurrentUser = () => {
  const { isAuthenticated, exit } = useAuth();

  const error = ''; //TODO: temporary
  //TODO: ADD profile query and session mutation

  useEffect(() => {
    if (error) {
      if (isAuthenticated) {
        // clear()
      }
      exit();
    }
  }, [exit, isAuthenticated]); //TODO: add clear

  return {
    user: {
      username: 'Test',
      displayName: 'Lin West',
      bio: 'Bio',
      email: 'email@email.com',
      avatar: '/avatar.jpg',
      isTotpEnabled: false,
      isVerified: true,
      notificationSettings: {
        webNotifications: false,
        telegramNotifications: false,
      },
      stream: {
        serverUrl: 'sasdfasdfasfd',
        streamKey: 'sadjfkkasjdf',
        isChatEnabled: true,
        isChatFollowersOnly: true,
        isChatPremiumFollowersOnly: true,
      },
    },
    isLoadingProfile: false,
    refetch: () => {},
  };
};

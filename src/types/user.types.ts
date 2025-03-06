export interface User {
  username: string;
  displayName?: string;
  bio?: string;
  email: string;
  avatar: string;
  isTotpEnabled?: boolean;
  isVerified?: boolean;
  notificationSettings?: {
    webNotifications: boolean;
    telegramNotifications: boolean;
  };
}

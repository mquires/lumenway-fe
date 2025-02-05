export const RoutePaths = {
  main: {
    home: '/',
    categories: '/categories',
    streams: '/streams',
  },
  auth: {
    login: '/account/login',
    register: '/account/create',
    deactivate: '/account/deactivate',
    recovery: '/account/recovery',
  },
  dashboard: {
    settings: '/dashboard/settings',
    keys: '/dashboard/keys',
    chat: '/dashboard/chat',
    followers: '/dashboard/followers',
    sponsors: '/dashboard/sponsors',
    plans: '/dashboard/plans',
    transactions: '/dashboard/transactions',
  },
} as const;

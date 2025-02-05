'use client';

import { Banknote, DollarSign, KeyRound, Medal, MessageSquare, Settings, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { v4 as uuidv4 } from 'uuid';
import { Route } from './route.interface';
import SidebarItem from './SidebarItem';

const DashboardNav = () => {
  const translate = useTranslations('layout.sidebar.dashboardNav');

  const routes: Route[] = [
    {
      id: uuidv4(),
      label: translate('settings'),
      href: '/dashboard/settings',
      icon: Settings,
    },
    {
      id: uuidv4(),
      label: translate('keys'),
      href: '/dashboard/keys',
      icon: KeyRound,
    },
    {
      id: uuidv4(),
      label: translate('chatSettings'),
      href: '/dashboard/chat',
      icon: MessageSquare,
    },
    {
      id: uuidv4(),
      label: translate('followers'),
      href: '/dashboard/followers',
      icon: Users,
    },
    {
      id: uuidv4(),
      label: translate('sponsors'),
      href: '/dashboard/sponsors',
      icon: Medal,
    },
    {
      id: uuidv4(),
      label: translate('premium'),
      href: '/dashboard/plans',
      icon: DollarSign,
    },
    {
      id: uuidv4(),
      label: translate('transactions'),
      href: '/dashboard/transactions',
      icon: Banknote,
    },
  ];

  return (
    <div className="space-y-2 px-2 pt-4 lg:pt-0">
      {routes.map(route => (
        <SidebarItem key={route.id} route={route} />
      ))}
    </div>
  );
};

export default DashboardNav;

'use client';

import { RoutePaths } from '@/libs/constants/routes.constants';
import {
  Banknote,
  DollarSign,
  KeyRound,
  Medal,
  MessageSquare,
  Settings,
  Users,
} from 'lucide-react';
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
      href: RoutePaths.dashboard.settings,
      icon: Settings,
    },
    {
      id: uuidv4(),
      label: translate('keys'),
      href: RoutePaths.dashboard.keys,
      icon: KeyRound,
    },
    {
      id: uuidv4(),
      label: translate('chatSettings'),
      href: RoutePaths.dashboard.chat,
      icon: MessageSquare,
    },
    {
      id: uuidv4(),
      label: translate('followers'),
      href: RoutePaths.dashboard.followers,
      icon: Users,
    },
    {
      id: uuidv4(),
      label: translate('sponsors'),
      href: RoutePaths.dashboard.sponsors,
      icon: Medal,
    },
    {
      id: uuidv4(),
      label: translate('premium'),
      href: RoutePaths.dashboard.plans,
      icon: DollarSign,
    },
    {
      id: uuidv4(),
      label: translate('transactions'),
      href: RoutePaths.dashboard.transactions,
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

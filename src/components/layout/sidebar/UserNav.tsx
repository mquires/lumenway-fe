'use client';

import { Folder, Home, Radio } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { v4 as uuidv4 } from 'uuid';
import RecommendedChannels from './RecommendedChannels';
import { Route } from './route.interface';
import SidebarItem from './SidebarItem';

const UserNav = () => {
  const translate = useTranslations('layout.sidebar.userNav');

  const routes: Route[] = [
    {
      id: uuidv4(),
      label: translate('home'),
      href: '/',
      icon: Home,
    },
    {
      id: uuidv4(),
      label: translate('categories'),
      href: '/categories',
      icon: Folder,
    },
    {
      id: uuidv4(),
      label: translate('streams'),
      href: '/streams',
      icon: Radio,
    },
  ];

  return (
    <div className="space-y-2 px-2 pt-4 lg:pt-0">
      {routes.map(route => (
        <SidebarItem key={route.id} route={route} />
      ))}
      <RecommendedChannels />
    </div>
  );
};

export default UserNav;

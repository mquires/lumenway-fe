'use client';

import { useAuth } from '@/hooks/useAuth';
import { RoutePaths } from '@/libs/constants/routes.constants';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from '../../ui/common/Button';
import ProfileMenu from './ProfileMenu';

const HeaderMenu = () => {
  const translate = useTranslations('layout.header.menu');
  const { isAuthenticated } = useAuth();

  return (
    <div className="ml-auto flex items-center gap-x-4">
      {isAuthenticated ? (
        <ProfileMenu />
      ) : (
        <>
          <Link href={RoutePaths.auth.login}>
            <Button variant="secondary">{translate('login')}</Button>
          </Link>
          <Link href={RoutePaths.auth.register}>
            <Button>{translate('register')}</Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default HeaderMenu;

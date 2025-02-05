'use client';

import { useAuth } from '@/hooks/useAuth';
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
          <Link href="/account/login">
            <Button variant="secondary">{translate('login')}</Button>
          </Link>
          <Link href="/account/create">
            <Button>{translate('register')}</Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default HeaderMenu;

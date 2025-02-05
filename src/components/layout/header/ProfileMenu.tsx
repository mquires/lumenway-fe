'use client';

import { useAuth } from '@/hooks/useAuth';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { LayoutDashboard, Loader, LogOut, User } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../ui/common/DropdownMenu';
import { ChannelAvatar } from '../../ui/elements/ChannelAvatar';
import Notifications from './notifications/Notifications';

const ProfileMenu = () => {
  const translate = useTranslations('layout.header.menu.profileMenu');
  const router = useRouter();

  const { exit } = useAuth();
  const { user, isLoadingProfile } = useCurrentUser();

  //TODO: Add logout mutation

  const logout = () => {
    exit();
    router.push('/account/login');
  };

  return isLoadingProfile || !user ? (
    <Loader className="size-6 animate-spin text-muted-foreground" />
  ) : (
    <>
      <Notifications />
      <DropdownMenu>
        <DropdownMenuTrigger>
          <ChannelAvatar channel={user} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[230px]">
          <div className="flex items-center gap-x-3 p-2">
            <ChannelAvatar channel={user} />
            <h2 className="font-medium text-foreground">{user.username}</h2>
          </div>
          <DropdownMenuSeparator />
          <Link href={`/${user.username}`}>
            <DropdownMenuItem>
              <User className="mr-2 size-2" />
              {translate('channel')}
            </DropdownMenuItem>
          </Link>
          <Link href="/dashboard/settings">
            <DropdownMenuItem>
              <LayoutDashboard className="mr-2 size-2" />
              {translate('dashboard')}
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem onClick={logout}>
            <LogOut className="mr-2 size-2" />
            {translate('logout')}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ProfileMenu;

'use client';

import { Button } from '@/components/ui/common/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/common/DropdownMenu';
import { ChannelAvatar } from '@/components/ui/elements/ChannelAvatar';
import { ChannelVerified } from '@/components/ui/elements/ChannelVerified';
import {
  DataTable,
  DataTableSkeleton,
} from '@/components/ui/elements/DataTable';
import { Heading } from '@/components/ui/elements/Heading';
import { useFormatDate } from '@/utils/format-date';
import type { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, User } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface Follower {
  createdAt: string;
  follower: {
    username: string;
    avatar: string;
    isVerified: boolean;
  };
}

const FollowersTable = () => {
  const translate = useTranslations('dashboard.followers');
  const formatDate = useFormatDate();

  // TODO: Add followers query

  const followers: Follower[] = [
    {
      createdAt: 'asdkfasdf',
      follower: {
        username: 'username',
        avatar: 'avatar',
        isVerified: false,
      },
    },
  ];

  const isLoadingFollowers = false;

  const followersColumns: ColumnDef<Follower>[] = [
    {
      accessorKey: 'createdAt',
      header: translate('columns.date'),
      cell: ({ row }) => formatDate(row.original.createdAt),
    },
    {
      accessorKey: 'follower',
      header: translate('columns.user'),
      cell: ({ row }) => (
        <div className="flex items-center gap-x-2">
          <ChannelAvatar channel={row.original.follower} size="sm" />
          <h2>{row.original.follower.username}</h2>
          {row.original.follower.isVerified && <ChannelVerified size="sm" />}
        </div>
      ),
    },
    {
      accessorKey: 'actions',
      header: translate('columns.actions'),
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="size-8 p-0">
              <MoreHorizontal className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right">
            <Link href={`/${row.original.follower.username}`} target="_blank">
              <DropdownMenuItem>
                <User className="mr-2 size-4" />
                {translate('columns.viewChannel')}
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return (
    <div className="lg:px-10">
      <Heading
        title={translate('header.heading')}
        description={translate('header.description')}
        size="lg"
      />
      <div className="mt-5">
        {isLoadingFollowers ? (
          <DataTableSkeleton />
        ) : (
          <DataTable columns={followersColumns} data={followers} />
        )}
      </div>
    </div>
  );
};

export default FollowersTable;

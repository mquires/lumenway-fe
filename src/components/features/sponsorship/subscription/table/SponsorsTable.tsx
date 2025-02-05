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

interface Sponsor {
  expiresAt: string;
  user: {
    username: string;
    avatar: string;
    isVerified: boolean;
  };
  plan: {
    title: string;
  };
}

const SponsorsTable = () => {
  const translate = useTranslations('dashboard.sponsors');
  const formatDate = useFormatDate();

  // TODO: Add Sponsors query

  const sponsors: Sponsor[] = [
    {
      expiresAt: 'asdkfasdf',
      user: {
        username: 'username',
        avatar: 'avatar',
        isVerified: false,
      },
      plan: {
        title: 'plan',
      },
    },
  ];

  const isLoadingSponsors = false;

  const sponsorsColumns: ColumnDef<Sponsor>[] = [
    {
      accessorKey: 'expiresAt',
      header: translate('columns.date'),
      cell: ({ row }) => formatDate(row.original.expiresAt),
    },
    {
      accessorKey: 'user',
      header: translate('columns.user'),
      cell: ({ row }) => (
        <div className="flex items-center gap-x-2">
          <ChannelAvatar channel={row.original.user} size="sm" />
          <h2>{row.original.user.username}</h2>
          {row.original.user.isVerified && <ChannelVerified size="sm" />}
        </div>
      ),
    },
    {
      accessorKey: 'plan',
      header: translate('columns.plan'),
      cell: ({ row }) => row.original.plan.title,
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
            <Link href={`/${row.original.user.username}`} target="_blank">
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
        {isLoadingSponsors ? (
          <DataTableSkeleton />
        ) : (
          <DataTable columns={sponsorsColumns} data={sponsors} />
        )}
      </div>
    </div>
  );
};

export default SponsorsTable;

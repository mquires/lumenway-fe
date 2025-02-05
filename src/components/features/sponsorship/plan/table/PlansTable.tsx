'use client';

import { Button } from '@/components/ui/common/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/common/DropdownMenu';
import {
  DataTable,
  DataTableSkeleton,
} from '@/components/ui/elements/DataTable';
import { Heading } from '@/components/ui/elements/Heading';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { convertPrice } from '@/utils/convert-price';
import { useFormatDate } from '@/utils/format-date';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, Trash } from 'lucide-react';
import { useTranslations } from 'next-intl';
import CreatePlanForm from '../forms/CreatePlanForm';
import VerifiedChannelAlert from './VerifiedChannelAlert';

interface Plan {
  createdAt: string;
  title: string;
  price: number;
}

const PlansTable = () => {
  const translate = useTranslations('dashboard.plans');
  const { user } = useCurrentUser();
  const formatDate = useFormatDate();

  // // TODO: Add plans query

  const plans: Plan[] = [
    {
      createdAt: 'asdkfasdf',
      title: 'plan',
      price: 123,
    },
  ];

  const isLoadingPlans = false;

  const plansColumns: ColumnDef<Plan>[] = [
    {
      accessorKey: 'createdAt',
      header: translate('columns.date'),
      cell: ({ row }) => formatDate(row.original.createdAt),
    },
    {
      accessorKey: 'title',
      header: translate('columns.title'),
      cell: ({ row }) => row.original.title,
    },
    {
      accessorKey: 'price',
      header: translate('columns.price'),
      cell: ({ row }) => convertPrice(row.original.price),
    },
    {
      accessorKey: 'actions',
      header: translate('columns.actions'),
      cell: ({ row }) => {
        //TODO: Add remove plan mutation

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="size-8 p-0">
                <MoreHorizontal className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right">
              <DropdownMenuItem
                onClick={() => console.log('click')}
                className="text-red-500 focus:text-red-500"
              >
                <Trash className="mr-2 size-4" />
                {translate('columns.remove')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return user?.isVerified ? (
    <div className="lg:px-10">
      <div className="block items-center justify-between space-y-3 lg:flex lg:space-y-0">
        <Heading
          title={translate('header.heading')}
          description={translate('header.description')}
          size="lg"
        />
        <CreatePlanForm />
      </div>
      <div className="mt-5">
        {isLoadingPlans ? (
          <DataTableSkeleton />
        ) : (
          <DataTable columns={plansColumns} data={plans} />
        )}
      </div>
    </div>
  ) : (
    <VerifiedChannelAlert />
  );
};

export default PlansTable;

'use client';

import {
  DataTable,
  DataTableSkeleton,
} from '@/components/ui/elements/DataTable';
import { Heading } from '@/components/ui/elements/Heading';
import { convertPrice } from '@/utils/convert-price';
import { ColumnDef } from '@tanstack/react-table';
import { useTranslations } from 'next-intl';

enum TransactionStatus {
  Success = 'success',
  Pending = 'pending',
  Failed = 'failed',
  Expired = 'expired',
}

interface Transaction {
  createdAt: string;
  status: TransactionStatus;
  amount: number;
}

const TransactionsTable = () => {
  const translate = useTranslations('dashboard.transactions');

  // // TODO: Add transactions query

  const transactions: Transaction[] = [
    {
      createdAt: 'asdkfasdf',
      status: TransactionStatus.Pending,
      amount: 123,
    },
  ];

  const isLoadingTransactions = false;

  const transactionsColumns: ColumnDef<Transaction>[] = [
    {
      accessorKey: 'createdAt',
      header: translate('columns.status'),
      cell: ({ row }) => {
        const status = row.original.status;
        let statusColor = '';

        switch (status) {
          case TransactionStatus.Success:
            statusColor = 'text-green-500';
            return (
              <div className={`py-1.5 ${statusColor}`}>
                {translate('columns.success')}
              </div>
            );
          case TransactionStatus.Pending:
            statusColor = 'text-yellow-500';
            return (
              <div className={`py-1.5 ${statusColor}`}>
                {translate('columns.pending')}
              </div>
            );
          case TransactionStatus.Failed:
            statusColor = 'text-red-600';
            return (
              <div className={`py-1.5 ${statusColor}`}>
                {translate('columns.failed')}
              </div>
            );
          case TransactionStatus.Expired:
            statusColor = 'text-purple-500';
            return (
              <div className={`py-1.5 ${statusColor}`}>
                {translate('columns.expired')}
              </div>
            );
          default:
            statusColor = 'text-foreground';
            return (
              <div className={`py-1.5 ${statusColor}`}>
                {translate('columns.expired')}
              </div>
            );
        }
      },
    },
    {
      accessorKey: 'amount',
      header: translate('columns.amount'),
      cell: ({ row }) => convertPrice(row.original.amount),
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
        {isLoadingTransactions ? (
          <DataTableSkeleton />
        ) : (
          <DataTable columns={transactionsColumns} data={transactions} />
        )}
      </div>
    </div>
  );
};

export default TransactionsTable;

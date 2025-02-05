import TransactionsTable from '@/components/features/sponsorship/transaction/table/TransactionsTable';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async (): Promise<Metadata> => {
  const translate = await getTranslations('dashboard.transactions.header');

  return {
    title: translate('heading'),
    description: translate('description'),
    robots: {
      index: false,
      follow: false,
    },
  };
};

const TransactionsPage = () => {
  return <TransactionsTable />;
};

export default TransactionsPage;

import SponsorsTable from '@/components/features/sponsorship/subscription/table/SponsorsTable';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async (): Promise<Metadata> => {
  const translate = await getTranslations('dashboard.sponsors.header');

  return {
    title: translate('heading'),
    description: translate('description'),
    robots: {
      index: false,
      follow: false,
    },
  };
};

const SponsorsPage = () => {
  return <SponsorsTable />;
};

export default SponsorsPage;

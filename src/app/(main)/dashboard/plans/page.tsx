import PlansTable from '@/components/features/sponsorship/plan/table/PlansTable';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async (): Promise<Metadata> => {
  const translate = await getTranslations('dashboard.plans.header');

  return {
    title: translate('heading'),
    description: translate('description'),
    robots: {
      index: false,
      follow: false,
    },
  };
};

const PlansPage = () => {
  return <PlansTable />;
};

export default PlansPage;

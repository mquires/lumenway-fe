import FollowersTable from '@/components/features/follow/table/FollowersTable';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async (): Promise<Metadata> => {
  const translate = await getTranslations('dashboard.followers.header');

  return {
    title: translate('heading'),
    description: translate('description'),
    robots: {
      index: false,
      follow: false,
    },
  };
};

const FollowersPage = () => {
  return <FollowersTable />;
};

export default FollowersPage;

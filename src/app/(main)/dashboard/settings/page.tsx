import { UserSettings } from '@/components/features/user/UserSettings';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async (): Promise<Metadata> => {
  const translate = await getTranslations('dashboard.settings.header');

  return {
    title: translate('heading'),
    description: translate('description'),
    robots: {
      index: false,
      follow: false,
    },
  };
};

const SettingsPage = () => {
  return <UserSettings />;
};

export default SettingsPage;

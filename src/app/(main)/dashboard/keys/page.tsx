import KeysSettings from '@/components/features/keys/settings/KeysSettings';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async (): Promise<Metadata> => {
  const translate = await getTranslations('dashboard.keys.header');

  return {
    title: translate('heading'),
    description: translate('description'),
    robots: {
      index: false,
      follow: false,
    },
  };
};

const KeysPage = () => {
  return <KeysSettings />;
};

export default KeysPage;

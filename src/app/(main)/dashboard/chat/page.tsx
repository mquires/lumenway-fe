import { ChangeChatSettings } from '@/components/features/chat/settings/ChangeChatSettings';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async (): Promise<Metadata> => {
  const translate = await getTranslations('dashboard.chat.header');

  return {
    title: translate('heading'),
    description: translate('description'),
    robots: {
      index: false,
      follow: false,
    },
  };
};

const ChatSettingsPage = () => {
  return <ChangeChatSettings />;
};

export default ChatSettingsPage;

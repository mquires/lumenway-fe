import NewPasswordForm from '@/components/features/auth/forms/NewPasswordForm';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async (): Promise<Metadata> => {
  const translate = await getTranslations('auth.newPassword');

  return {
    title: translate('heading'),
  };
};

const NewPasswordPage = () => {
  return <NewPasswordForm />;
};

export default NewPasswordPage;

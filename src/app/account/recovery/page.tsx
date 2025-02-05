import ResetPasswordForm from '@/components/features/auth/forms/ResetPasswordForm';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async (): Promise<Metadata> => {
  const translate = await getTranslations('auth.resetPassword');

  return {
    title: translate('heading'),
  };
};

const ResetPasswordPage = () => {
  return <ResetPasswordForm />;
};

export default ResetPasswordPage;

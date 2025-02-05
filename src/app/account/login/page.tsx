import LoginForm from '@/components/features/auth/forms/LoginForm';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async (): Promise<Metadata> => {
  const translate = await getTranslations('auth.login');

  return {
    title: translate('heading'),
  };
};

const LoginPage = () => {
  return <LoginForm />;
};

export default LoginPage;

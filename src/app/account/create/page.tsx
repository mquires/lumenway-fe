import CreateAccountForm from '@/components/features/auth/forms/CreateAccountForm';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async (): Promise<Metadata> => {
  const translate = await getTranslations('auth.register');

  return {
    title: translate('heading'),
  };
};

const CreateAccountPage = () => {
  return <CreateAccountForm />;
};

export default CreateAccountPage;

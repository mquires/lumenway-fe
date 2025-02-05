import DeactivateForm from '@/components/features/auth/forms/DeactivateForm';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async (): Promise<Metadata> => {
  const translate = await getTranslations('auth.deactivate');

  return {
    title: translate('heading'),
  };
};

const DeactivateAccountPage = () => {
  return <DeactivateForm />;
};

export default DeactivateAccountPage;

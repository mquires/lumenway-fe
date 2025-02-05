import VerifyAccountForm from '@/components/features/auth/forms/VerifyAccountForm';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { redirect } from 'next/navigation';

export const generateMetadata = async (): Promise<Metadata> => {
  const translate = await getTranslations('auth.verify');

  return {
    title: translate('heading'),
  };
};

const VerifyAccountPage = async (props: {
  searchParams: Promise<{ token: string }>;
}) => {
  const searchParams = await props.searchParams;

  if (!searchParams.token) {
    redirect('/account/create');
  }

  return <VerifyAccountForm />;
};

export default VerifyAccountPage;

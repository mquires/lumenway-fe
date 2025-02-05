'use client';

import { useAuth } from '@/hooks/useAuth';
import { Loader } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import AuthWrapper from '../AuthWrapper';

const VerifyAccountForm = () => {
  const translate = useTranslations('auth.verify');

  const router = useRouter();
  const searchParams = useSearchParams();

  const { login } = useAuth();

  //TODO: ADD login verifucation request
  const token = searchParams.get('token') ?? '';

  return (
    <AuthWrapper heading={translate('heading')}>
      <div className="flex justify-center">
        <Loader className="size-8 animate-spin" />
      </div>
    </AuthWrapper>
  );
};

export default VerifyAccountForm;

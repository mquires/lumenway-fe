'use client';

import { useVerifyAccountMutation } from '@/graphql/generated/output';
import { useAuth } from '@/hooks/useAuth';
import { RoutePaths } from '@/libs/constants/routes.constants';
import { Loader } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';
import AuthWrapper from '../AuthWrapper';

const VerifyAccountForm = () => {
  const translate = useTranslations('auth.verify');

  const router = useRouter();
  const searchParams = useSearchParams();

  const { auth } = useAuth();

  const token = searchParams.get('token') ?? '';

  const [verify] = useVerifyAccountMutation({
    onCompleted() {
      auth();
      toast.success(translate('successMessage'));
      router.push(RoutePaths.dashboard.settings);
    },
    onError() {
      toast.error(translate('errorMessage'));
    },
  });

  useEffect(() => {
    verify({
      variables: {
        data: { token },
      },
    });
  }, [token]);

  return (
    <AuthWrapper heading={translate('heading')}>
      <div className="flex justify-center">
        <Loader className="size-8 animate-spin" />
      </div>
    </AuthWrapper>
  );
};

export default VerifyAccountForm;

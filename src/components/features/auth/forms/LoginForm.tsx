'use client';

import { Button } from '@/components/ui/common/Button';
import { Form } from '@/components/ui/common/Form';
import { InputController } from '@/components/ui/elements/formControllers/InputController';
import { OTPController } from '@/components/ui/elements/formControllers/OTPController';
import { useLoginUserMutation } from '@/graphql/generated/output';
import { useAuth } from '@/hooks/useAuth';
import { RoutePaths } from '@/libs/constants/routes.constants';
import { loginSchema, type TypeLoginSchema } from '@/schemas/auth/login.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import AuthWrapper from '../AuthWrapper';

const LoginForm = () => {
  const translate = useTranslations('auth.login');
  const router = useRouter();
  const { auth } = useAuth();

  const form = useForm<TypeLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const [isShowTwoFactor, setIsShowTwoFactor] = useState(false);

  const [login, { loading: isLoadingLogin }] = useLoginUserMutation({
    onCompleted(data) {
      if (data.loginUser.message) {
        setIsShowTwoFactor(true);
      } else {
        auth();
        toast.success(translate('successMessage'));
        router.push(RoutePaths.dashboard.settings);
      }
    },
    onError() {
      toast.error(translate('errorMessage'));
    },
  });

  const { isValid } = form.formState;

  const onSubmit = (data: TypeLoginSchema) => {
    login({ variables: { data } });
  };

  return (
    <AuthWrapper
      heading={translate('heading')}
      backButtonLabel={translate('backButtonLabel')}
      backButtonHref={RoutePaths.auth.register}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-3">
          {isShowTwoFactor ? (
            <OTPController
              control={form.control}
              name="pin"
              disabled={isLoadingLogin}
              label={translate('pinLabel')}
              description={translate('pinDescription')}
            />
          ) : (
            <>
              <InputController
                control={form.control}
                name="login"
                disabled={isLoadingLogin}
                label={translate('loginLabel')}
                placeholder="linwest"
                description={translate('loginDescription')}
              />
              <InputController
                control={form.control}
                name="password"
                disabled={isLoadingLogin}
                label={translate('passwordLabel')}
                placeholder="********"
                type="password"
                description={translate('passwordDescription')}
                rightElement={
                  <Link
                    href={RoutePaths.auth.recovery}
                    className="ml-auto inline-block text-sm"
                  >
                    {translate('forgotPassword')}
                  </Link>
                }
              />
            </>
          )}
          <Button
            className="w-full mt-2"
            type="submit"
            disabled={!isValid || isLoadingLogin}
          >
            {translate('submitButton')}
          </Button>
        </form>
      </Form>
    </AuthWrapper>
  );
};

export default LoginForm;

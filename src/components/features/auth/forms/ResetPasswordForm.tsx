'use client';

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/common/Alert';
import { Button } from '@/components/ui/common/Button';
import { Form } from '@/components/ui/common/Form';
import { InputController } from '@/components/ui/elements/formControllers/InputController';
import { useResetPasswordMutation } from '@/graphql/generated/output';
import { RoutePaths } from '@/libs/constants/routes.constants';
import {
  resetPasswordSchema,
  type TypeResetPasswordSchema,
} from '@/schemas/auth/reset-password.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { CircleCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import AuthWrapper from '../AuthWrapper';

const ResetPasswordForm = () => {
  const translate = useTranslations('auth.resetPassword');

  const form = useForm<TypeResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const [resetPassword, { loading: isLoadingReset }] = useResetPasswordMutation(
    {
      onCompleted() {
        setIsSuccess(true);
      },
      onError() {
        toast.error(translate('errorMessage'));
      },
    },
  );

  const { isValid } = form.formState;

  const onSubmit = (data: TypeResetPasswordSchema) => {
    resetPassword({ variables: { data } });
  };

  return (
    <AuthWrapper
      heading={translate('heading')}
      backButtonLabel={translate('backButtonLabel')}
      backButtonHref={RoutePaths.auth.login}
    >
      {isSuccess ? (
        <Alert>
          <CircleCheck className="size-4" />
          <AlertTitle>{translate('successAlertTitle')}</AlertTitle>
          <AlertDescription>
            {translate('successAlertDescription')}
          </AlertDescription>
        </Alert>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-3">
            <InputController
              control={form.control}
              name="email"
              disabled={isLoadingReset}
              label={translate('emailLabel')}
              placeholder="linwest@example.com"
              type="email"
              description={translate('emailDescription')}
            />
            <Button
              className="w-full mt-2"
              disabled={!isValid || isLoadingReset}
              type="submit"
            >
              {translate('submitButton')}
            </Button>
          </form>
        </Form>
      )}
    </AuthWrapper>
  );
};

export default ResetPasswordForm;

'use client';

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/common/Alert';
import { Button } from '@/components/ui/common/Button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/common/Form';
import { Input } from '@/components/ui/common/Input';
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

  // const [create, { loading: isLoadingCreate }] = useCreateUserMutation({
  //   onCompleted() {
  //     toast.success('Регистрация прошла успешно!');
  // setIsSuccess(true)
  //   },
  //   onError() {
  //     toast.error(translate('errorMessage'));
  //   },
  // });

  const { isValid } = form.formState;

  const onSubmit = (data: TypeResetPasswordSchema) => {
    console.log(data);
    setIsSuccess(true);

    // create({ variables: { data } }); //TODO: Add reset
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
            <FormField
              control={form.control}
              name="email"
              // disabled={isLoadingCreate}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{translate('emailLabel')}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="linwest@example.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {translate('emailDescription')}
                  </FormDescription>
                </FormItem>
              )}
            />
            <Button
              className="w-full mt-2"
              // disabled={!isValid || isLoadingCreate}
              disabled={!isValid}
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

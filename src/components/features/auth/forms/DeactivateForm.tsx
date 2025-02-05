'use client';

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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/common/InputOTP';
import { useAuth } from '@/hooks/useAuth';
import { RoutePaths } from '@/libs/constants/routes.constants';
import {
  deactivateSchema,
  type TypeDeactivateSchema,
} from '@/schemas/auth/deactivate.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AuthWrapper from '../AuthWrapper';

const DeactivateForm = () => {
  const translate = useTranslations('auth.deactivate');
  const router = useRouter();
  const { exit } = useAuth();

  const form = useForm<TypeDeactivateSchema>({
    resolver: zodResolver(deactivateSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [isShowConfirm, setIsShowConfirm] = useState(false);

  // const [create, { loading: isLoadingCreate }] = useCreateUserMutation({
  //   onCompleted() {
  //     toast.success('Регистрация прошла успешно!');
  // setIsSuccess(true)
  //   },
  //   onError() {
  //     toast.error(translate('errorMessage'));
  //   },
  // }); //TODO: Add deactivate mutation

  const { isValid } = form.formState;

  const onSubmit = (data: TypeDeactivateSchema) => {
    console.log(data);
    exit();
    router.push(RoutePaths.main.home);

    // setIsShowTwoFactor(true);

    // create({ variables: { data } }); //TODO: Add login
  };

  return (
    <AuthWrapper
      heading={translate('heading')}
      backButtonLabel={translate('backButtonLabel')}
      backButtonHref={RoutePaths.dashboard.settings}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-3">
          {isShowConfirm ? (
            <FormField
              control={form.control}
              name="pin"
              // disabled={isLoadingCreate}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{translate('pinLabel')}</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormDescription>
                    {translate('pinDescription')}
                  </FormDescription>
                </FormItem>
              )}
            />
          ) : (
            <>
              <FormField
                control={form.control}
                name="email"
                // disabled={isLoadingCreate}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{translate('emailLabel')}</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="linwest@example.com"
                        // disabled={isLoadingDeactivate}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      {translate('emailDescription')}
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                // disabled={isLoadingCreate}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{translate('passwordLabel')}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="********"
                        type="password"
                        // disabled={isLoadingDeactivate}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      {translate('passwordDescription')}
                    </FormDescription>
                  </FormItem>
                )}
              />
            </>
          )}
          <Button
            className="w-full mt-2"
            type="submit"
            // disabled={!isValid || isLoadingCreate}
            disabled={!isValid}
          >
            {translate('submitButton')}
          </Button>
        </form>
      </Form>
    </AuthWrapper>
  );
};

export default DeactivateForm;

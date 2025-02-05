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
import { loginSchema, type TypeLoginSchema } from '@/schemas/auth/login.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AuthWrapper from '../AuthWrapper';

const LoginForm = () => {
  const translate = useTranslations('auth.login');
  const router = useRouter();
  const { login } = useAuth();

  const form = useForm<TypeLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const [isShowTwoFactor, setIsShowTwoFactor] = useState(false);

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

  const onSubmit = (data: TypeLoginSchema) => {
    console.log(data);
    login();
    router.push('/dashboard/settings');

    // setIsShowTwoFactor(true);

    // create({ variables: { data } }); //TODO: Add login
  };

  return (
    <AuthWrapper
      heading={translate('heading')}
      backButtonLabel={translate('backButtonLabel')}
      backButtonHref="/account/create"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-3">
          {isShowTwoFactor ? (
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
                name="login"
                // disabled={isLoadingCreate}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{translate('loginLabel')}</FormLabel>
                    <FormControl>
                      <Input placeholder="linwest" {...field} />
                    </FormControl>
                    <FormDescription>
                      {translate('loginDescription')}
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
                    <div className="flex items-center justify-between">
                      <FormLabel>{translate('passwordLabel')}</FormLabel>
                      <Link
                        href="/account/recovery"
                        className="ml-auto inline-block text-sm"
                      >
                        {translate('forgotPassword')}
                      </Link>
                    </div>
                    <FormControl>
                      <Input
                        placeholder="********"
                        type="password"
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

export default LoginForm;

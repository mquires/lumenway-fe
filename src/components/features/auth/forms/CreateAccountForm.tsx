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
  createAccountSchema,
  type TypeCreateAccountSchema,
} from '@/schemas/auth/create-account.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { CircleCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AuthWrapper from '../AuthWrapper';

const CreateAccountForm = () => {
  const translate = useTranslations('auth.register');

  const form = useForm<TypeCreateAccountSchema>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
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

  const onSubmit = (data: TypeCreateAccountSchema) => {
    console.log(data);
    setIsSuccess(true);

    // create({ variables: { data } }); //TODO: Add registration
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
              name="username"
              // disabled={isLoadingCreate}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{translate('usernameLabel')}</FormLabel>
                  <FormControl>
                    <Input placeholder="linwest" {...field} />
                  </FormControl>
                  <FormDescription>
                    {translate('usernameDescription')}
                  </FormDescription>
                </FormItem>
              )}
            />
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
            <FormField
              control={form.control}
              name="password"
              // disabled={isLoadingCreate}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{translate('passwordLabel')}</FormLabel>
                  <FormControl>
                    <Input placeholder="********" type="password" {...field} />
                  </FormControl>
                  <FormDescription>
                    {translate('passwordDescription')}
                  </FormDescription>
                </FormItem>
              )}
            />
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
      )}
    </AuthWrapper>
  );
};

export default CreateAccountForm;

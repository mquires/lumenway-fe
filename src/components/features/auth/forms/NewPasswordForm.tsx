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
import { RoutePaths } from '@/libs/constants/routes.constants';
import {
  newPasswordSchema,
  type TypeNewPasswordSchema,
} from '@/schemas/auth/new-password.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import AuthWrapper from '../AuthWrapper';

const NewPasswordForm = () => {
  const translate = useTranslations('auth.newPassword');
  const router = useRouter();

  const form = useForm<TypeNewPasswordSchema>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: '',
      repeatPassword: '',
    },
  });

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

  const onSubmit = (data: TypeNewPasswordSchema) => {
    console.log(data);
    router.push(RoutePaths.auth.login);

    // create({ variables: { data } }); //TODO: Add login
  };

  return (
    <AuthWrapper
      heading={translate('heading')}
      backButtonLabel={translate('backButtonLabel')}
      backButtonHref={RoutePaths.auth.login}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-3">
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
          <FormField
            control={form.control}
            name="repeatPassword"
            // disabled={isLoadingCreate}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{translate('repeatPasswordLabel')}</FormLabel>
                <FormControl>
                  <Input placeholder="********" type="password" {...field} />
                </FormControl>
                <FormDescription>
                  {translate('repeatPasswordDescription')}
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
    </AuthWrapper>
  );
};

export default NewPasswordForm;

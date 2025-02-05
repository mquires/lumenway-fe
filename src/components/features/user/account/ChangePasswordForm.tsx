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
import { Separator } from '@/components/ui/common/Separator';
import { Skeleton } from '@/components/ui/common/Skeleton';
import { FormWrapper } from '@/components/ui/elements/FormWrapper';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import {
  changePasswordSchema,
  type TypeChangePasswordSchema,
} from '@/schemas/user/change-password.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

const ChangePasswordForm = () => {
  const translate = useTranslations('dashboard.settings.account.password');
  const { isLoadingProfile, refetch } = useCurrentUser();

  const form = useForm<TypeChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema),
    values: {
      oldPassword: '',
      newPassword: '',
    },
  });

  const { isValid } = form.formState;

  // create({ variables: { data } }); //TODO: Add change password mutation

  const onSubmit = () => {
    console.log('work');
  };

  return isLoadingProfile ? (
    <ChangePasswordFormSkeleton />
  ) : (
    <FormWrapper heading={translate('heading')}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-3">
          <FormField
            control={form.control}
            name="oldPassword"
            // disabled={isLoadingCreate}
            render={({ field }) => (
              <FormItem className="px-5">
                <FormLabel>{translate('oldPasswordLabel')}</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="********"
                    // disabled={}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {translate('oldPasswordDescription')}
                </FormDescription>
              </FormItem>
            )}
          />
          <Separator />
          <FormField
            control={form.control}
            name="newPassword"
            // disabled={isLoadingCreate}
            render={({ field }) => (
              <FormItem className="px-5">
                <FormLabel>{translate('newPasswordLabel')}</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="********"
                    // disabled={}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {translate('newPasswordDescription')}
                </FormDescription>
              </FormItem>
            )}
          />
          <Separator />
          <div className="flex justify-end p-5">
            <Button disabled={!isValid}>{translate('submitButton')}</Button>
          </div>
        </form>
      </Form>
    </FormWrapper>
  );
};

export default ChangePasswordForm;

export const ChangePasswordFormSkeleton = () => {
  return <Skeleton className="h-96 w-full" />;
};

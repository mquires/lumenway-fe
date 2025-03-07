'use client';

import { Button } from '@/components/ui/common/Button';
import { Form } from '@/components/ui/common/Form';
import { Separator } from '@/components/ui/common/Separator';
import { Skeleton } from '@/components/ui/common/Skeleton';
import { InputController } from '@/components/ui/elements/formControllers/InputController';
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
    <Skeleton className="h-96 w-full" />
  ) : (
    <FormWrapper heading={translate('heading')}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-3">
          <InputController
            control={form.control}
            name="oldPassword"
            label={translate('oldPasswordLabel')}
            placeholder="********"
            type="password"
            description={translate('oldPasswordDescription')}
            className="px-5"
          />
          <Separator />
          <InputController
            control={form.control}
            name="newPassword"
            label={translate('newPasswordLabel')}
            placeholder="********"
            type="password"
            description={translate('newPasswordDescription')}
            className="px-5"
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

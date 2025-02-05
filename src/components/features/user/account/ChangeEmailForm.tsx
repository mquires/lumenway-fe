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
  changeEmailSchema,
  type TypeChangeEmailSchema,
} from '@/schemas/user/change-email.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

const ChangeEmailForm = () => {
  const translate = useTranslations('dashboard.settings.account.email');
  const { user, isLoadingProfile, refetch } = useCurrentUser();

  const form = useForm<TypeChangeEmailSchema>({
    resolver: zodResolver(changeEmailSchema),
    values: {
      email: user.email || '',
    },
  });

  const { isValid, isDirty } = form.formState;

  // create({ variables: { data } }); //TODO: Add change email mutation

  const onSubmit = () => {
    console.log('work');
  };

  return isLoadingProfile ? (
    <ChangeEmailFormSkeleton />
  ) : (
    <FormWrapper heading={translate('heading')}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-3">
          <FormField
            control={form.control}
            name="email"
            // disabled={isLoadingCreate}
            render={({ field }) => (
              <FormItem className="px-5">
                <FormLabel>{translate('emailLabel')}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="linwest@example.com"
                    // disabled={}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {translate('emailDescription')}
                </FormDescription>
              </FormItem>
            )}
          />
          <Separator />
          <div className="flex justify-end p-5">
            <Button disabled={!isValid || !isDirty}>
              {translate('submitButton')}
            </Button>
          </div>
        </form>
      </Form>
    </FormWrapper>
  );
};

export default ChangeEmailForm;

export const ChangeEmailFormSkeleton = () => {
  return <Skeleton className="h-64 w-full" />;
};

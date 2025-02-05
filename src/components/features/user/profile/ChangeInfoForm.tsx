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
import { Textarea } from '@/components/ui/common/Textarea';
import { FormWrapper } from '@/components/ui/elements/FormWrapper';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import {
  changeUserInfoSchema,
  type TypeChangeUserInfoSchema,
} from '@/schemas/user/change-user-info.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

const ChangeInfoForm = () => {
  const translate = useTranslations('dashboard.settings.profile.info');
  const { user, isLoadingProfile, refetch } = useCurrentUser();

  const form = useForm<TypeChangeUserInfoSchema>({
    resolver: zodResolver(changeUserInfoSchema),
    values: {
      username: user?.username || '',
      displayName: user?.displayName || '',
      bio: user?.bio || '',
    },
  });

  const { isValid, isDirty } = form.formState;

  // create({ variables: { data } }); //TODO: Add change info mutation

  const onSubmit = () => {
    console.log('work');
  };

  return isLoadingProfile ? (
    <ChangeInfoFormSkeleton />
  ) : (
    <FormWrapper heading={translate('heading')}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-3">
          <FormField
            control={form.control}
            name="username"
            // disabled={isLoadingCreate}
            render={({ field }) => (
              <FormItem className="px-5">
                <FormLabel>{translate('usernameLabel')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={translate('usernamePlaceholder')}
                    // disabled={}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {translate('usernameDescription')}
                </FormDescription>
              </FormItem>
            )}
          />
          <Separator />
          <FormField
            control={form.control}
            name="displayName"
            // disabled={isLoadingCreate}
            render={({ field }) => (
              <FormItem className="px-5">
                <FormLabel>{translate('displayNameLabel')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={translate('displayNamePlaceholder')}
                    // disabled={}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {translate('displayNameDescription')}
                </FormDescription>
              </FormItem>
            )}
          />
          <Separator />
          <FormField
            control={form.control}
            name="bio"
            // disabled={isLoadingCreate}
            render={({ field }) => (
              <FormItem className="px-5">
                <FormLabel>{translate('bioLabel')}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={translate('bioPlaceholder')}
                    // disabled={}
                    {...field}
                  />
                </FormControl>
                <FormDescription>{translate('bioDescription')}</FormDescription>
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

export default ChangeInfoForm;

export const ChangeInfoFormSkeleton = () => {
  return <Skeleton className="h-96 w-full" />;
};

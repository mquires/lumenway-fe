'use client';

import { Button } from '@/components/ui/common/Button';
import { Form } from '@/components/ui/common/Form';
import { Separator } from '@/components/ui/common/Separator';
import { Skeleton } from '@/components/ui/common/Skeleton';
import { InputController } from '@/components/ui/elements/formControllers/InputController';
import { TextareaController } from '@/components/ui/elements/formControllers/TextareaController';
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
    <Skeleton className="h-96 w-full" />
  ) : (
    <FormWrapper heading={translate('heading')}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-3">
          <InputController
            control={form.control}
            name="username"
            label={translate('usernameLabel')}
            placeholder={translate('usernamePlaceholder')}
            description={translate('usernameDescription')}
            className="px-5"
          />
          <Separator />
          <InputController
            control={form.control}
            name="displayName"
            label={translate('displayNameLabel')}
            placeholder={translate('displayNamePlaceholder')}
            description={translate('displayNameDescription')}
            className="px-5"
          />
          <Separator />
          <TextareaController
            control={form.control}
            name="bio"
            label={translate('bioLabel')}
            placeholder={translate('bioPlaceholder')}
            description={translate('bioDescription')}
            className="px-5"
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

'use client';

import { Button } from '@/components/ui/common/Button';
import { Form } from '@/components/ui/common/Form';
import { Separator } from '@/components/ui/common/Separator';
import { Skeleton } from '@/components/ui/common/Skeleton';
import { InputController } from '@/components/ui/elements/formControllers/InputController';
import { FormWrapper } from '@/components/ui/elements/FormWrapper';
import {
  socialLinksSchema,
  type TypeSocialLinksSchema,
} from '@/schemas/user/social-links.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import SocialLinksList from './SocialLinksList';

const SocialLinksForm = () => {
  const translate = useTranslations(
    'dashboard.settings.profile.socialLinks.createForm',
  );

  const form = useForm<TypeSocialLinksSchema>({
    resolver: zodResolver(socialLinksSchema),
    defaultValues: {
      title: '',
      url: '',
    },
  });

  const { isValid } = form.formState;

  // create({ variables: { data } }); //TODO: Add social links mutation

  const onSubmit = () => {
    console.log('work');
  };

  const isLoadingLinks = false; //TODO: Get from request

  return isLoadingLinks ? (
    <Skeleton className="h-72 w-full" />
  ) : (
    <FormWrapper heading={translate('heading')}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-3">
          <InputController
            control={form.control}
            name="title"
            label={translate('titleLabel')}
            placeholder={translate('titlePlaceholder')}
            description={translate('titleDescription')}
            className="px-5"
          />
          <Separator />
          <InputController
            control={form.control}
            name="url"
            label={translate('urlLabel')}
            placeholder={translate('urlPlaceholder')}
            description={translate('urlDescription')}
            className="px-5"
          />
          <Separator />
          <div className="flex justify-end p-5">
            <Button disabled={!isValid}>{translate('submitButton')}</Button>
          </div>
        </form>
      </Form>
      <SocialLinksList />
    </FormWrapper>
  );
};

export default SocialLinksForm;

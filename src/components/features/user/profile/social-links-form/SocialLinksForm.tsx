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
    <SocialLinksSkeleton />
  ) : (
    <FormWrapper heading={translate('heading')}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-3">
          <FormField
            control={form.control}
            name="title"
            // disabled={isLoadingCreate}
            render={({ field }) => (
              <FormItem className="px-5">
                <FormLabel>{translate('titleLabel')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={translate('titlePlaceholder')}
                    // disabled={}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {translate('titleDescription')}
                </FormDescription>
              </FormItem>
            )}
          />
          <Separator />
          <FormField
            control={form.control}
            name="url"
            // disabled={isLoadingCreate}
            render={({ field }) => (
              <FormItem className="px-5">
                <FormLabel>{translate('urlLabel')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={translate('urlPlaceholder')}
                    // disabled={}
                    {...field}
                  />
                </FormControl>
                <FormDescription>{translate('urlDescription')}</FormDescription>
              </FormItem>
            )}
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

export const SocialLinksSkeleton = () => {
  return <Skeleton className="h-72 w-full" />;
};

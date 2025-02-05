'use client';

import { Form, FormField } from '@/components/ui/common/Form';
import { Heading } from '@/components/ui/elements/Heading';
import {
  ToggleCard,
  ToggleCardSkeleton,
} from '@/components/ui/elements/ToggleCard';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import {
  changeChatSettingsSchema,
  TypeChangeChatSettingsSchema,
} from '@/schemas/stream/change-chat-settings.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

export const ChangeChatSettings = () => {
  const translate = useTranslations('dashboard.chat');

  const { user, isLoadingProfile } = useCurrentUser();

  const form = useForm<TypeChangeChatSettingsSchema>({
    resolver: zodResolver(changeChatSettingsSchema),
    values: {
      isChatEnabled: user?.stream.isChatEnabled ?? false,
      isChatFollowersOnly: user?.stream.isChatFollowersOnly ?? false,
      isChatPremiumFollowersOnly:
        user?.stream.isChatPremiumFollowersOnly ?? false,
    },
  });

  const onChange = (
    field: keyof TypeChangeChatSettingsSchema,
    value: boolean,
  ) => {
    form.setValue(field, value);
  };

  // TODO: Add mutations for changing chat settings

  return (
    <div className="lg:px-10">
      <Heading
        title={translate('header.heading')}
        description={translate('header.description')}
        size="lg"
      />
      <div className="mt-3 space-y-6">
        {isLoadingProfile ? (
          Array.from({ length: 3 }).map((_, index) => (
            <ToggleCardSkeleton key={index} />
          ))
        ) : (
          <Form {...form}>
            <FormField
              control={form.control}
              name="isChatEnabled"
              render={({ field }) => (
                <ToggleCard
                  heading={translate('isChatEnabled.heading')}
                  description={translate('isChatEnabled.description')}
                  // isDisabled={}
                  value={field.value}
                  onChange={value => onChange('isChatEnabled', value)}
                />
              )}
            />
            <FormField
              control={form.control}
              name="isChatFollowersOnly"
              render={({ field }) => (
                <ToggleCard
                  heading={translate('isChatFollowersOnly.heading')}
                  description={translate('isChatFollowersOnly.description')}
                  // isDisabled={}
                  value={field.value}
                  onChange={value => onChange('isChatFollowersOnly', value)}
                />
              )}
            />
            <FormField
              control={form.control}
              name="isChatPremiumFollowersOnly"
              render={({ field }) => (
                <ToggleCard
                  heading={translate('isChatPremiumFollowersOnly.heading')}
                  description={translate(
                    'isChatPremiumFollowersOnly.description',
                  )}
                  // isDisabled={}
                  value={field.value}
                  onChange={value =>
                    onChange('isChatPremiumFollowersOnly', value)
                  }
                />
              )}
            />
          </Form>
        )}
      </div>
    </div>
  );
};

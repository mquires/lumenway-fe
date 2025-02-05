'use client';

import { Form, FormField } from '@/components/ui/common/Form';
import {
  ToggleCard,
  ToggleCardSkeleton,
} from '@/components/ui/elements/ToggleCard';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import {
  changeNotificationsSettingsSchema,
  type TypeChangeNotificationsSettingsSchema,
} from '@/schemas/user/change-notifications-settings.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

const ChangeNotificationsSettingsForm = () => {
  const translate = useTranslations('dashboard.settings.notifications');

  const { user, isLoadingProfile } = useCurrentUser();

  const form = useForm<TypeChangeNotificationsSettingsSchema>({
    resolver: zodResolver(changeNotificationsSettingsSchema),
    values: {
      webNotifications: user?.notificationSettings?.webNotifications ?? false,
      telegramNotifications:
        user?.notificationSettings?.telegramNotifications ?? false,
    },
  });

  const onChange = (
    field: keyof TypeChangeNotificationsSettingsSchema,
    value: boolean,
  ) => {
    form.setValue(field, value);
  };

  // TODO: Add mutations for changing notifications settings

  return isLoadingProfile ? (
    Array.from({ length: 2 }).map((_, index) => (
      <ToggleCardSkeleton key={index} />
    ))
  ) : (
    <Form {...form}>
      <FormField
        control={form.control}
        name="webNotifications"
        render={({ field }) => (
          <ToggleCard
            heading={translate('webNotifications.heading')}
            description={translate('webNotifications.description')}
            // isDisabled={}
            value={field.value}
            onChange={value => onChange('webNotifications', value)}
          />
        )}
      />
      <FormField
        control={form.control}
        name="telegramNotifications"
        render={({ field }) => (
          <ToggleCard
            heading={translate('telegramNotifications.heading')}
            description={translate('telegramNotifications.description')}
            // isDisabled={}
            value={field.value}
            onChange={value => onChange('telegramNotifications', value)}
          />
        )}
      />
    </Form>
  );
};

export default ChangeNotificationsSettingsForm;

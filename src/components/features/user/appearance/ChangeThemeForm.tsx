'use client';

import { Form, FormField } from '@/components/ui/common/Form';
import { ToggleCard } from '@/components/ui/elements/ToggleCard';
import {
  changeThemeSchema,
  type TypeChangeThemeSchema,
} from '@/schemas/user/change-theme.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const ChangeThemeForm = () => {
  const translate = useTranslations('dashboard.settings.appearance.theme');
  const { theme, setTheme } = useTheme();

  const form = useForm<TypeChangeThemeSchema>({
    resolver: zodResolver(changeThemeSchema),
    values: {
      theme: theme === 'dark' ? 'dark' : 'light',
    },
  });

  const onChange = (value: boolean) => {
    const newTheme = value ? 'dark' : 'light';

    setTheme(newTheme);
    form.setValue('theme', newTheme);
    toast.success(translate('successMessage'));
  };

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="theme"
        render={({ field }) => (
          <ToggleCard
            heading={translate('heading')}
            description={translate('description')}
            value={field.value === 'dark'}
            onChange={onChange}
          />
        )}
      />
    </Form>
  );
};

export default ChangeThemeForm;

'use client';

import { Button } from '@/components/ui/common/Button';
import { Form } from '@/components/ui/common/Form';
import { InputController } from '@/components/ui/elements/formControllers/InputController';
import { useNewPasswordMutation } from '@/graphql/generated/output';
import { RoutePaths } from '@/libs/constants/routes.constants';
import {
  newPasswordSchema,
  type TypeNewPasswordSchema,
} from '@/schemas/auth/new-password.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import AuthWrapper from '../AuthWrapper';

const NewPasswordForm = () => {
  const translate = useTranslations('auth.newPassword');
  const router = useRouter();
  const params = useParams<{ token: string }>();

  const form = useForm<TypeNewPasswordSchema>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: '',
      passwordRepeat: '',
    },
  });

  const [newPassword, { loading: isLoadingNewPassword }] =
    useNewPasswordMutation({
      onCompleted() {
        toast.success(translate('successMessage'));
        router.push(RoutePaths.auth.login);
      },
      onError() {
        toast.error(translate('errorMessage'));
      },
    });

  const { isValid } = form.formState;

  const onSubmit = (data: TypeNewPasswordSchema) => {
    newPassword({ variables: { data: { ...data, token: params.token } } });
  };

  return (
    <AuthWrapper
      heading={translate('heading')}
      backButtonLabel={translate('backButtonLabel')}
      backButtonHref={RoutePaths.auth.login}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-3">
          <InputController
            control={form.control}
            name="password"
            disabled={isLoadingNewPassword}
            label={translate('passwordLabel')}
            placeholder="********"
            type="password"
            description={translate('passwordDescription')}
          />
          <InputController
            control={form.control}
            name="passwordRepeat"
            disabled={isLoadingNewPassword}
            label={translate('passwordRepeatLabel')}
            placeholder="********"
            type="password"
            description={translate('passwordRepeatDescription')}
          />
          <Button
            className="w-full mt-2"
            type="submit"
            disabled={!isValid || isLoadingNewPassword}
          >
            {translate('submitButton')}
          </Button>
        </form>
      </Form>
    </AuthWrapper>
  );
};

export default NewPasswordForm;

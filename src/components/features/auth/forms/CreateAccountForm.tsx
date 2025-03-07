'use client';

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/common/Alert';
import { Button } from '@/components/ui/common/Button';
import { Form } from '@/components/ui/common/Form';
import { InputController } from '@/components/ui/elements/formControllers/InputController';
import { useCreateUserMutation } from '@/graphql/generated/output';
import { RoutePaths } from '@/libs/constants/routes.constants';
import {
  createAccountSchema,
  type TypeCreateAccountSchema,
} from '@/schemas/auth/create-account.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { CircleCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import AuthWrapper from '../AuthWrapper';

const CreateAccountForm = () => {
  const translate = useTranslations('auth.register');

  const form = useForm<TypeCreateAccountSchema>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const [create, { loading: isLoadingCreate }] = useCreateUserMutation({
    onCompleted() {
      toast.success(translate('successMessage'));
      setIsSuccess(true);
    },
    onError() {
      toast.error(translate('errorMessage'));
    },
  });

  const { isValid } = form.formState;

  const onSubmit = useCallback(
    (data: TypeCreateAccountSchema) => {
      create({ variables: { data } });
    },
    [create],
  );

  return (
    <AuthWrapper
      heading={translate('heading')}
      backButtonLabel={translate('backButtonLabel')}
      backButtonHref={RoutePaths.auth.login}
    >
      {isSuccess ? (
        <Alert>
          <CircleCheck className="size-4" />
          <AlertTitle>{translate('successAlertTitle')}</AlertTitle>
          <AlertDescription>
            {translate('successAlertDescription')}
          </AlertDescription>
        </Alert>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-3">
            <InputController
              name="username"
              label={translate('usernameLabel')}
              description={translate('usernameDescription')}
              placeholder="linwest"
              disabled={isLoadingCreate}
              control={form.control}
            />
            <InputController
              name="email"
              label={translate('emailLabel')}
              description={translate('emailDescription')}
              type="email"
              placeholder="linwest@example.com"
              disabled={isLoadingCreate}
              control={form.control}
            />
            <InputController
              name="password"
              label={translate('passwordLabel')}
              description={translate('passwordDescription')}
              type="password"
              placeholder="********"
              disabled={isLoadingCreate}
              control={form.control}
            />
            <Button
              className="w-full mt-2"
              type="submit"
              disabled={!isValid || isLoadingCreate}
            >
              {translate('submitButton')}
            </Button>
          </form>
        </Form>
      )}
    </AuthWrapper>
  );
};

export default CreateAccountForm;

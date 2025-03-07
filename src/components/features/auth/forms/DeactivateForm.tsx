'use client';

import { Button } from '@/components/ui/common/Button';
import { Form } from '@/components/ui/common/Form';
import { InputController } from '@/components/ui/elements/formControllers/InputController';
import { OTPController } from '@/components/ui/elements/formControllers/OTPController';
import { useAuth } from '@/hooks/useAuth';
import { RoutePaths } from '@/libs/constants/routes.constants';
import {
  deactivateSchema,
  type TypeDeactivateSchema,
} from '@/schemas/auth/deactivate.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AuthWrapper from '../AuthWrapper';

const DeactivateForm = () => {
  const translate = useTranslations('auth.deactivate');
  const router = useRouter();
  const { exit } = useAuth();

  const form = useForm<TypeDeactivateSchema>({
    resolver: zodResolver(deactivateSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [isShowConfirm, setIsShowConfirm] = useState(false);

  // const [create, { loading: isLoadingCreate }] = useCreateUserMutation({
  //   onCompleted() {
  //     toast.success('Регистрация прошла успешно!');
  // setIsSuccess(true)
  //   },
  //   onError() {
  //     toast.error(translate('errorMessage'));
  //   },
  // }); //TODO: Add deactivate mutation

  const { isValid } = form.formState;

  const onSubmit = (data: TypeDeactivateSchema) => {
    console.log(data);
    exit();
    router.push(RoutePaths.main.home);

    // setIsShowTwoFactor(true);

    // create({ variables: { data } }); //TODO: Add deactivate
  };

  return (
    <AuthWrapper
      heading={translate('heading')}
      backButtonLabel={translate('backButtonLabel')}
      backButtonHref={RoutePaths.dashboard.settings}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-3">
          {isShowConfirm ? (
            <OTPController
              control={form.control}
              name="pin"
              // disabled={isLoadingDeactivate}
              label={translate('pinLabel')}
              description={translate('pinDescription')}
            />
          ) : (
            <>
              <InputController
                control={form.control}
                name="email"
                // disabled={isLoadingDeactivate}
                label={translate('emailLabel')}
                placeholder="linwest@example.com"
                type="email"
                description={translate('emailDescription')}
              />
              <InputController
                control={form.control}
                name="password"
                // disabled={isLoadingDeactivate}
                label={translate('passwordLabel')}
                placeholder="********"
                type="password"
                description={translate('passwordDescription')}
              />
            </>
          )}
          <Button
            className="w-full mt-2"
            type="submit"
            // disabled={!isValid || isLoadingCreate}
            disabled={!isValid}
          >
            {translate('submitButton')}
          </Button>
        </form>
      </Form>
    </AuthWrapper>
  );
};

export default DeactivateForm;

'use client';

import { Button } from '@/components/ui/common/Button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/common/Dialog';
import { Form } from '@/components/ui/common/Form';
import { OTPController } from '@/components/ui/elements/formControllers/OTPController';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import {
  enableTotpSchema,
  type TypeEnableTotpSchema,
} from '@/schemas/user/enable-totp.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface TwoFactorAuth {
  qrcodeUrl: string;
  secret: string;
}

const EnableTotp = () => {
  const translate = useTranslations(
    'dashboard.settings.account.twoFactor.enable',
  );
  const [isOpen, setIsOpen] = useState(false);
  const { refetch } = useCurrentUser();

  //TODO: Add generate totp code mutation and enable totp mutation

  const twoFactorAuth: TwoFactorAuth = {
    qrcodeUrl: 'https://localhost:3000/image.png',
    secret: 'hasdfjhashjf',
  }; //TODO: Add data

  const form = useForm<TypeEnableTotpSchema>({
    resolver: zodResolver(enableTotpSchema),
    defaultValues: {
      pin: '',
    },
  });

  const { isValid } = form.formState;

  const onSubmit = () => {};

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>{translate('trigger')}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{translate('heading')}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="flex flex-col items-center justify-center gap-4">
              <span className="text-sm text-muted-foreground">
                {twoFactorAuth?.qrcodeUrl ? translate('qrInstructions') : ''}
              </span>
              <Image
                src={twoFactorAuth?.qrcodeUrl}
                alt="QR"
                className="rounded-lg"
                width={250}
                height={250}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-center text-sm text-muted-foreground">
                {twoFactorAuth?.secret
                  ? `${translate('secretCodeLabel')}${twoFactorAuth?.secret}`
                  : ''}
              </span>
            </div>
            <OTPController
              control={form.control}
              name="pin"
              label={translate('pinLabel')}
              description={translate('pinDescription')}
              className="flex flex-col justify-center max-sm:items-center"
            />
            <DialogFooter>
              <Button type="submit" disabled={!isValid}>
                {translate('submitButton')}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EnableTotp;

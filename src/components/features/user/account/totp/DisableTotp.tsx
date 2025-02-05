'use client';

import { Button } from '@/components/ui/common/Button';
import { ConfirmModal } from '@/components/ui/elements/ConfirmModal';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useTranslations } from 'next-intl';

const DisableTotp = () => {
  const translate = useTranslations(
    'dashboard.settings.account.twoFactor.disable',
  );
  const { refetch } = useCurrentUser();

  //TODO: Add disable totp code mutation

  return (
    <ConfirmModal
      heading={translate('heading')}
      message={translate('message')}
      onConfirm={() => console.log('disable')}
    >
      {/* <Button variant="secondary" disabled={isLoadingDisable}> */}
      <Button variant="secondary">{translate('trigger')}</Button>
    </ConfirmModal>
  );
};

export default DisableTotp;

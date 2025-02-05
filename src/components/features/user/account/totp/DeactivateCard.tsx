'use client';

import { Button } from '@/components/ui/common/Button';
import { CardContainer } from '@/components/ui/elements/CardContainer';
import { ConfirmModal } from '@/components/ui/elements/ConfirmModal';
import { RoutePaths } from '@/libs/constants/routes.constants';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

const DeactivateCard = () => {
  const translate = useTranslations('dashboard.settings.account.deactivation');
  const router = useRouter();

  return (
    <CardContainer
      heading={translate('heading')}
      description={translate('description')}
      rightContent={
        <div className="flex items-center gap-x-4">
          <ConfirmModal
            heading={translate('confirmModal.heading')}
            message={translate('confirmModal.message')}
            onConfirm={() => router.push(RoutePaths.auth.deactivate)}
          >
            <Button>{translate('deactivateButton')}</Button>
          </ConfirmModal>
        </div>
      }
    ></CardContainer>
  );
};

export default DeactivateCard;

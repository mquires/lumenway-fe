'use client';

import { Skeleton } from '@/components/ui/common/Skeleton';
import { CardContainer } from '@/components/ui/elements/CardContainer';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useTranslations } from 'next-intl';
import DisableTotp from './DisableTotp';
import EnableTotp from './EnableTotp';

const WrapperTotp = () => {
  const translate = useTranslations('dashboard.settings.account.twoFactor');
  const { user, isLoadingProfile } = useCurrentUser();

  return isLoadingProfile ? (
    <Skeleton className="h-24 w-full" />
  ) : (
    <CardContainer
      heading={translate('heading')}
      description={translate('description')}
      rightContent={
        <div className="flex items-center gap-x-4">
          {!user.isTotpEnabled ? <EnableTotp /> : <DisableTotp />}
        </div>
      }
    />
  );
};

export default WrapperTotp;

'use client';

import { Button } from '@/components/ui/common/Button';
import { CardContainer } from '@/components/ui/elements/CardContainer';
import { ConfirmModal } from '@/components/ui/elements/ConfirmModal';
import { getBrowserIcon } from '@/utils/get-browser-icon';
import { useTranslations } from 'next-intl';
import { Session } from './session.interface';
import SessionModal from './SessionModal';

interface SessionItemProps {
  session: Session;
  isCurrentSession?: boolean;
}

const SessionItem = ({ session, isCurrentSession }: SessionItemProps) => {
  const translate = useTranslations('dashboard.settings.sessions.sessionItem');

  const Icon = getBrowserIcon(session.metadata.device.browser);

  //TODO: Add remove session mutation and find current session

  return (
    <CardContainer
      heading={`${session.metadata.device.browser}, ${session.metadata.device.os}`}
      description={`${session.metadata.location.country}, ${session.metadata.location.city}`}
      Icon={Icon}
      rightContent={
        <div className="flex items-center gap-x-4">
          {!isCurrentSession && (
            <ConfirmModal
              heading={translate('confirmModal.heading')}
              message={translate('confirmModal.message')}
              onConfirm={() => console.log('remove')}
            >
              <Button
                variant="secondary"
                //  disabled={isLoadingRemove}
              >
                {translate('deleteButton')}
              </Button>
            </ConfirmModal>
          )}
          <SessionModal session={session}>
            <Button>{translate('detailsButton')}</Button>
          </SessionModal>
        </div>
      }
    />
  );
};

export default SessionItem;

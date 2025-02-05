'use client';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/common/Dialog';
import { useFormatDate } from '@/utils/format-date';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { useTranslations } from 'next-intl';
import { type PropsWithChildren } from 'react';
import { Session } from './session.interface';

interface SessionModalProps {
  session: Session;
}

const SessionModal = ({
  children,
  session,
}: PropsWithChildren<SessionModalProps>) => {
  const translate = useTranslations('dashboard.settings.sessions.sessionModal');
  const formatDate = useFormatDate();

  const coordinates = [
    session.metadata.location.latitute,
    session.metadata.location.longitude,
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle className="text-xl">{translate('heading')}</DialogTitle>
        <div className="space-y-3">
          <div className="flex items-center">
            <span className="font-medium">{translate('device')}</span>
            <span className="ml-2 text-muted-foreground">
              {session.metadata.device.browser},{session.metadata.device.os}
            </span>
          </div>
          <div className="flex items-center">
            <span className="font-medium">{translate('location')}</span>
            <span className="ml-2 text-muted-foreground">
              {session.metadata.location.country},
              {session.metadata.location.city}
            </span>
          </div>
          <div className="flex items-center">
            <span className="font-medium">{translate('ipAddress')}</span>
            <span className="ml-2 text-muted-foreground">
              {session.metadata.ip}
            </span>
          </div>
          <div className="flex items-center">
            <span className="font-medium">{translate('createdAt')}</span>
            <span className="ml-2 text-muted-foreground">
              {formatDate(session.createdAt, true)}
            </span>
          </div>
          <YMaps>
            <div style={{ width: '100%', height: '300px' }}>
              <Map
                defaultState={{
                  center: coordinates,
                  zoom: 11,
                }}
                width="100%"
                height="100%"
              >
                <Placemark geometry={coordinates} />
              </Map>
            </div>
          </YMaps>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SessionModal;

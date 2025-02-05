'use client';

import { Heading } from '@/components/ui/elements/Heading';
import { ToggleCardSkeleton } from '@/components/ui/elements/ToggleCard';
import { useTranslations } from 'next-intl';
import SessionItem from './SessionItem';
import { Session } from './session.interface';

const SessionsList = () => {
  const translate = useTranslations('dashboard.settings.sessions');
  // TODO: Add mutations for sessions list and mutations

  const currentSession = {
    metadata: {
      device: {
        browser: 'chrome',
        os: 'os',
      },
      location: {
        country: 'country',
        city: 'city',
        latitute: 1,
        longitude: 2,
      },
      ip: '173.166.164.121',
    },
    createdAt: '2021-03-11T00:00:00Z',
  }; //TODO:
  const isLoadingCurrent = false; //TODO:
  const isLoadingSessions = false; //TODO:
  const sessions: Session[] = [];

  return (
    <div className="space-y-6">
      <Heading title={translate('info.current')} size="sm" />
      {isLoadingCurrent ? (
        <ToggleCardSkeleton />
      ) : (
        <SessionItem session={currentSession} isCurrentSession />
      )}
      <Heading title={translate('info.active')} size="sm" />
      {isLoadingSessions ? (
        Array.from({ length: 3 }).map((_, index) => (
          <ToggleCardSkeleton key={index} />
        ))
      ) : sessions.length ? (
        sessions.map((session, index) => (
          <SessionItem key={index} session={session} />
        ))
      ) : (
        <div className="text-muted-foreground">
          {translate('info.notFound')}
        </div>
      )}
    </div>
  );
};

export default SessionsList;

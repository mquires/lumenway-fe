'use client';

import { Separator } from '@/components/ui/common/Separator';
import { Skeleton } from '@/components/ui/common/Skeleton';
import { useSidebar } from '@/hooks/useSidebar';
import { useTranslations } from 'next-intl';
import { ChannelItem } from './ChannelItem';

const RecommendedChannels = () => {
  const translate = useTranslations('layout.sidebar.recommended');
  const { isCollapsed } = useSidebar();

  //TODO: Add request of channels

  const isLoadingRecommended = false;
  const channels: any[] = [];

  return (
    <div>
      <Separator className="mb-3" />
      {!isCollapsed && (
        <h2 className="mb-2 px-2 text-lg font-semibold text-foreground">
          {translate('heading')}
        </h2>
      )}
      {isLoadingRecommended
        ? Array.from({ length: 7 }).map((_, index) => (
            <Skeleton className="mt-3 h-11 w-full rounded-full" key={index} />
          ))
        : channels.map((channel, index) => (
            <ChannelItem key={index} channel={channel} />
          ))}
    </div>
  );
};

export default RecommendedChannels;

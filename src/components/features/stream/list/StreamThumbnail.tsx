'use client';

import { Card } from '@/components/ui/common/Card';
import { ChannelAvatar } from '@/components/ui/elements/ChannelAvatar';
import { LiveBadge } from '@/components/ui/elements/LiveBadge';
import { User } from '@/types/user.types';
import { getMediaSource } from '@/utils/get-media-source';
import { getRandomColor } from '@/utils/get-random-color';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface StreamThumbnailProps {
  url: string | null | undefined;
  user: User;
  isLive?: boolean;
}

export const StreamThumbnail = ({
  url,
  user,
  isLive,
}: StreamThumbnailProps) => {
  const [randomColor, setRandomColor] = useState('');

  useEffect(() => {
    setRandomColor(getRandomColor());
  }, []);

  return (
    <div className="group relative aspect-video cursor-pointer rounded-xl">
      <div
        className="absolute inset-0 flex items-center justify-center rounded-xl opacity-0 transition-opacity group-hover:opacity-100"
        style={{
          backgroundColor: randomColor,
        }}
      />
      {url ? (
        <Image
          src={getMediaSource(url)}
          alt={user.username}
          fill
          className="rounded-xl object-cover transition-transform group-hover:-translate-y-2 group-hover:translate-x-2"
        />
      ) : (
        <Card className="flex flex-col h-full w-full items-center justify-center gap-y-4 rounded-xl transition-transform group-hover:-translate-y-2 group-hover:translate-x-2">
          <ChannelAvatar channel={user} isLive={isLive} />
        </Card>
      )}
      {isLive && (
        <div className="absolute right-2 top-2 transition-transform group-hover:-translate-y-2 group-hover:translate-x-2">
          <LiveBadge />
        </div>
      )}
    </div>
  );
};

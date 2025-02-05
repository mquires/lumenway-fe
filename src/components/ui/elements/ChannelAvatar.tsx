import { getMediaSource } from '@/utils/get-media-source';
import { cn } from '@/utils/tw-merge';
import { cva, type VariantProps } from 'class-variance-authority';
import { Avatar, AvatarFallback, AvatarImage } from '../common/Avatar';

const avatarSizes = cva('', {
  variants: {
    size: {
      sm: 'size-7',
      default: 'size-9',
      lg: 'size-14',
      xl: 'size-32',
    },
    defaultVariants: {
      size: 'default',
    },
  },
});

interface ChannelAvatarProps extends VariantProps<typeof avatarSizes> {
  channel: {
    username: string;
    avatar: string;
  };
  isLive?: boolean;
}

export const ChannelAvatar = ({ channel, size, isLive }: ChannelAvatarProps) => {
  return (
    <div className="relative">
      <Avatar className={cn(avatarSizes({ size }), isLive && 'ring-2 ring-rose-500')}>
        <AvatarImage src={getMediaSource(channel.avatar)} className="object-cover" />
        <AvatarFallback className={cn(size === 'xl' && 'text-4xl')}>{channel.username[0]}</AvatarFallback>
      </Avatar>
    </div>
  );
};

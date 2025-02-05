import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/common/Popover';
import { Bell } from 'lucide-react';
import NotificationsList from './NotificationsList';

const Notifications = () => {
  const count = 0; //TODO: ADD count mutation

  const displayCount = count > 10 ? '9+' : count;

  return (
    <Popover>
      <PopoverTrigger>
        {count !== 0 && (
          <div className="absolute right=[72px] top-5 rounded-full bg-primary px-[5px] text-xs font-semibold text-white">
            {displayCount}
          </div>
        )}
        <Bell className="size-5 text-foreground" />
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="max-h-[500px] w-[320px] overflow-y-auto"
      >
        <NotificationsList />
      </PopoverContent>
    </Popover>
  );
};

export default Notifications;

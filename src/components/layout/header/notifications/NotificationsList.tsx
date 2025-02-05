import { Separator } from '@/components/ui/common/Separator';
// import { getNotificationIcon } from '@/utils/get-notification-icon';
import parse from 'html-react-parser';
import { Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Fragment } from 'react';

const NotificationsList = () => {
  const translate = useTranslations(
    'layout.header.menu.profileMenu.notifications',
  );
  const notifications = [
    {
      id: 1,
      message: 'test',
      type: 'test',
    },
  ]; //TODO: add mutations
  const isLoadingNotifications = false;

  return (
    <>
      <h2 className="text-center text-lg font-medium">
        {translate('heading')}
      </h2>
      <Separator className="my-3" />
      {isLoadingNotifications ? (
        <div className="flex items-center justify-center gap-x-2 text-sm text-foreground">
          <Loader2 className="size-5 animate-spin" />
          {translate('loading')}
        </div>
      ) : notifications.length ? (
        notifications.map((notification, index) => {
          // const Icon = getNotificationIcon(notification.type);

          return (
            <Fragment key={notification.id}>
              <div className="flex items-center gap-x-3 text-sm">
                <div className="rounded-full bg-foreground p-2">
                  {/* <Icon className="size-6 text-secondary" /> */}
                </div>
                <div>{parse(notification.message)}</div>
              </div>
              {index < notifications.length - 1 && (
                <Separator className="my-3" />
              )}
            </Fragment>
          );
        })
      ) : (
        <div className="text-center text-muted-foreground">
          {translate('empty')}
        </div>
      )}
    </>
  );
};

export default NotificationsList;

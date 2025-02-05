import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/common/Tabs';
import { Heading } from '@/components/ui/elements/Heading';
import { useTranslations } from 'next-intl';
import ChangeEmailForm from './account/ChangeEmailForm';
import ChangePasswordForm from './account/ChangePasswordForm';
import DeactivateCard from './account/totp/DeactivateCard';
import WrapperTotp from './account/totp/WrapperTotp';
import ChangeBaseColorForm from './appearance/ChangeBaseColorForm';
import ChangeLanguageForm from './appearance/ChangeLanguageForm';
import ChangeThemeForm from './appearance/ChangeThemeForm';
import ChangeNotificationsSettingsForm from './notifications/ChangeNotificationsSettingsForm';
import ChangeAvatarForm from './profile/ChangeAvatarForm';
import ChangeInfoForm from './profile/ChangeInfoForm';
import SocialLinksForm from './profile/social-links-form/SocialLinksForm';
import SessionsList from './sessions/SessionsList';

export const UserSettings = () => {
  const translate = useTranslations('dashboard.settings');

  return (
    <div className="lg:px-10">
      <Heading
        title={translate('header.heading')}
        description={translate('header.description')}
        size="lg"
      />
      <Tabs defaultValue="profile" className="mt-3 w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile">
            {translate('header.profile')}
          </TabsTrigger>
          <TabsTrigger value="account">
            {translate('header.account')}
          </TabsTrigger>
          <TabsTrigger value="appearance">
            {translate('header.appearance')}
          </TabsTrigger>
          <TabsTrigger value="notifications">
            {translate('header.notifications')}
          </TabsTrigger>
          <TabsTrigger value="sessions">
            {translate('header.sessions')}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <div className="mt-5 space-y-6">
            <Heading
              title={translate('profile.header.heading')}
              description={translate('profile.header.description')}
            />
            <ChangeAvatarForm />
            <ChangeInfoForm />
            <SocialLinksForm />
          </div>
        </TabsContent>
        <TabsContent value="account">
          <div className="mt-5 space-y-6">
            <Heading
              title={translate('account.header.heading')}
              description={translate('account.header.description')}
            />
            <ChangeEmailForm />
            <ChangePasswordForm />
            <Heading
              title={translate('account.header.securityHeading')}
              description={translate('account.header.securityDescription')}
            />
            <WrapperTotp />
            <Heading
              title={translate('account.header.deactivationHeading')}
              description={translate('account.header.deactivationDescription')}
            />
            <DeactivateCard />
          </div>
        </TabsContent>
        <TabsContent value="appearance">
          <div className="mt-5 space-y-6">
            <Heading
              title={translate('appearance.header.heading')}
              description={translate('appearance.header.description')}
            />
            <ChangeThemeForm />
            <ChangeLanguageForm />
            <ChangeBaseColorForm />
          </div>
        </TabsContent>
        <TabsContent value="notifications">
          <div className="mt-5 space-y-6">
            <Heading
              title={translate('notifications.header.heading')}
              description={translate('notifications.header.description')}
            />
            <ChangeNotificationsSettingsForm />
          </div>
        </TabsContent>
        <TabsContent value="sessions">
          <div className="mt-5 space-y-6">
            <Heading
              title={translate('sessions.header.heading')}
              description={translate('sessions.header.description')}
            />
            <SessionsList />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

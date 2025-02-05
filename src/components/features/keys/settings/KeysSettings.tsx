'use client';

import CreateIngressForm from '@/app/(main)/dashboard/keys/settings/forms/CreateIngressForm';
import StreamKeyForm from '@/app/(main)/dashboard/keys/settings/forms/StreamKeyForm';
import StreamURLForm from '@/app/(main)/dashboard/keys/settings/forms/StreamURLForm';
import { Heading } from '@/components/ui/elements/Heading';
import { ToggleCardSkeleton } from '@/components/ui/elements/ToggleCard';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useTranslations } from 'next-intl';
import InstructionModal from './InstructionModal';

const KeysSettings = () => {
  const translate = useTranslations('dashboard.keys.header');
  const { user, isLoadingProfile } = useCurrentUser();

  return (
    <div className="lg:px-10">
      <div className="block items-center justify-between space-y-3 lg:flex lg:space-y-0">
        <Heading
          title={translate('heading')}
          description={translate('description')}
          size="lg"
        />
        <div className="flex items-center gap-x-4">
          <InstructionModal />
          <CreateIngressForm />
        </div>
      </div>
      <div className="mt-5 space-y-6">
        {isLoadingProfile ? (
          Array.from({ length: 2 }).map((_, index) => (
            <ToggleCardSkeleton key={index} />
          ))
        ) : (
          <>
            <StreamURLForm value={user?.stream.serverUrl} />
            <StreamKeyForm value={user?.stream.streamKey} />
          </>
        )}
      </div>
    </div>
  );
};

export default KeysSettings;

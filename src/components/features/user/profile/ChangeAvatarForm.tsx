'use client';

import { Button } from '@/components/ui/common/Button';
import { Form, FormField } from '@/components/ui/common/Form';
import { Skeleton } from '@/components/ui/common/Skeleton';
import { ChannelAvatar } from '@/components/ui/elements/ChannelAvatar';
import { ConfirmModal } from '@/components/ui/elements/ConfirmModal';
import { FormWrapper } from '@/components/ui/elements/FormWrapper';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import {
  TypeUploadFileSchema,
  uploadFileSchema,
} from '@/schemas/upload-file.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Trash } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { type ChangeEvent, useRef } from 'react';
import { useForm } from 'react-hook-form';

const ChangeAvatarForm = () => {
  const translate = useTranslations('dashboard.settings.profile.avatar');
  const { user, isLoadingProfile } = useCurrentUser();
  const inputRef = useRef<HTMLInputElement>(null);

  const form = useForm<TypeUploadFileSchema>({
    resolver: zodResolver(uploadFileSchema),
    defaultValues: {
      file: user?.avatar || '',
    },
  });

  // create({ variables: { data } }); //TODO: Add change avatar
  //TODO: Add remove avatar

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e, 'work');
  };

  return isLoadingProfile ? (
    <Skeleton className="h-52 w-full" />
  ) : (
    <FormWrapper heading={translate('heading')}>
      <Form {...form}>
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <div className="px-5">
              <div className="w-full items-center space-x-6 lg:flex">
                <ChannelAvatar
                  channel={{
                    username: user?.username,
                    avatar:
                      field.value instanceof File
                        ? URL.createObjectURL(field.value)
                        : field.value ?? '',
                  }}
                  size="xl"
                />
                <div className="space-y-3">
                  <div className="flex items-center gap-x-3">
                    <input
                      className="hidden"
                      type="file"
                      ref={inputRef}
                      onChange={handleImageChange}
                    />
                    <Button
                      variant="secondary"
                      onClick={() => inputRef.current?.click()}
                    >
                      {/* disabled={isLoadingUpdate || isLoadingRemove} */}
                      {translate('updateButton')}
                    </Button>
                    {user.avatar && (
                      <ConfirmModal
                        heading={translate('confirmModal.heading')}
                        message={translate('confirmModal.message')}
                        onConfirm={() => console.log('test')}
                      >
                        <Button variant="ghost" size="lgIcon">
                          {/* disabled={isLoadingUpdate || isLoadingRemove} */}
                          <Trash className="size-4" />
                        </Button>
                      </ConfirmModal>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {translate('info')}
                  </p>
                </div>
              </div>
            </div>
          )}
        />
      </Form>
    </FormWrapper>
  );
};

export default ChangeAvatarForm;

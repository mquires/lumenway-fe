'use client';

import { Button } from '@/components/ui/common/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from '@/components/ui/common/Form';
import { Input } from '@/components/ui/common/Input';
import {
  socialLinksSchema,
  type TypeSocialLinksSchema,
} from '@/schemas/user/social-links.schema';
import type { DraggableProvided } from '@hello-pangea/dnd';
import { zodResolver } from '@hookform/resolvers/zod';
import { GripVertical, Pencil, Trash2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SocialLink } from './social-link.interface';

interface SocialLinkItemProps {
  socialLink: SocialLink;
  provided: DraggableProvided;
}

const SocialLinkItem = ({ socialLink, provided }: SocialLinkItemProps) => {
  const translate = useTranslations(
    'dashboard.settings.profile.socialLinks.editForm',
  );

  const [editingId, setEditingId] = useState<string | null>(null);

  const form = useForm<TypeSocialLinksSchema>({
    resolver: zodResolver(socialLinksSchema),
    values: {
      title: socialLink.title || '',
      url: socialLink.url || '',
    },
  });

  const { isValid, isDirty } = form.formState;

  // create({ variables: { data } }); //TODO: Add social links mutation

  const toggleEditing = (id: string | null) => {
    setEditingId(id);
  };

  const onSubmit = () => {
    console.log('work');
  };

  return (
    <div
      className="mb-4 flex items-center gap-x-2 rounded-md border border-border bg-background text-sm"
      ref={provided.innerRef}
      {...provided.draggableProps}
    >
      <div
        className="rounded-l-md border-r border-r-border px-2 py-9 text-foreground transition"
        {...provided.dragHandleProps}
      >
        <GripVertical className="size-5" />
      </div>
      <div className="space-y-1 px-2">
        {editingId === socialLink.id ? (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex gap-x-6"
            >
              <div className="w-96 space-y-2">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Youtube"
                          className="h-8"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="url"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="https://youtube.com/@channelname"
                          className="h-8"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center gap-x-4">
                <Button onClick={() => toggleEditing(null)} variant="secondary">
                  {translate('cancelButton')}
                </Button>
                <Button>{translate('submitButton')}</Button>
              </div>
            </form>
          </Form>
        ) : (
          <>
            <h2 className="text-[17px] font-semibold text-foreground">
              {socialLink.title}
            </h2>
            <p className="text-muted-foreground">{socialLink.url}</p>
          </>
        )}
      </div>
      <div className="ml-auto flex items-center gap-x-2 pr-4">
        {editingId !== socialLink.id && (
          <Button
            onClick={() => toggleEditing(socialLink.id)}
            variant="ghost"
            size="lgIcon"
          >
            <Pencil className="size-4 text-muted-foreground" />
          </Button>
        )}
        <Button variant="ghost" size="lgIcon">
          <Trash2 className="size-4 text-muted-foreground" />
        </Button>
      </div>
    </div>
  );
};

export default SocialLinkItem;

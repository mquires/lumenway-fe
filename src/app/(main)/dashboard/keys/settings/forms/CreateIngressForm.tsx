'use client';

import { Button } from '@/components/ui/common/Button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/common/Dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/common/Form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/common/Select';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import {
  createIngressSchema,
  IngressType,
  type TypeCreateIngressSchema,
} from '@/schemas/stream/create-ingress.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const CreateIngressForm = () => {
  const translate = useTranslations('dashboard.keys.createModal');
  const { refetch } = useCurrentUser();
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<TypeCreateIngressSchema>({
    resolver: zodResolver(createIngressSchema),
    defaultValues: {
      ingressType: IngressType.RTMP,
    },
  });

  //TODO: Create ingress mutation

  const { isValid } = form.formState;

  const onSubmit = (data: TypeCreateIngressSchema) => {};

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>{translate('trigger')}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{translate('heading')}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="ingressType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{translate('ingressTypeLabel')}</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={value => {
                        field.onChange(Number(value));
                      }}
                      defaultValue={field.value.toString()}
                    >
                      <SelectTrigger>
                        <SelectValue
                          placeholder={translate('ingressTypePlaceholder')}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem
                          value={IngressType.RTMP.toString()}
                          // disabled={isLoadingCreate}
                        >
                          RTMP
                        </SelectItem>
                        <SelectItem
                          value={IngressType.WHIP.toString()}
                          // disabled={isLoadingCreate}
                        >
                          WHIP
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    {translate('ingressTypeDescription')}
                  </FormDescription>
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button disabled={!isValid}>{translate('submitButton')}</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateIngressForm;

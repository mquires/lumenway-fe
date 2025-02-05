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
import { Input } from '@/components/ui/common/Input';
import { Textarea } from '@/components/ui/common/Textarea';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import {
  createPlanSchema,
  type TypeCreatePlanSchema,
} from '@/schemas/plan/create-plan.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const CreatePlanForm = () => {
  const translate = useTranslations('dashboard.plans.createForm');
  const { refetch } = useCurrentUser();
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<TypeCreatePlanSchema>({
    resolver: zodResolver(createPlanSchema),
    defaultValues: {
      title: '',
      description: '',
      price: 0,
    },
  });

  //TODO: Create plan mutation

  const { isValid } = form.formState;

  const onSubmit = (data: TypeCreatePlanSchema) => {
    console.log(data);
  };

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
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{translate('titleLabel')}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={translate('titlePlaceholder')}
                      // disabled={isLoadingCreate}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {translate('titleDescription')}
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{translate('descriptionLabel')}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={translate('descriptionPlaceholder')}
                      // disabled={isLoadingCreate}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {translate('descriptionDescription')}
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{translate('priceLabel')}</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder={translate('pricePlaceholder')}
                      // disabled={isLoadingCreate}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {translate('priceDescription')}
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

export default CreatePlanForm;

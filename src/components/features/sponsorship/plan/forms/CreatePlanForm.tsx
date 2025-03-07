'use client';

import { Button } from '@/components/ui/common/Button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/common/Dialog';
import { Form } from '@/components/ui/common/Form';
import { InputController } from '@/components/ui/elements/formControllers/InputController';
import { TextareaController } from '@/components/ui/elements/formControllers/TextareaController';
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
            <InputController
              control={form.control}
              name="title"
              label={translate('titleLabel')}
              placeholder={translate('titlePlaceholder')}
              description={translate('titleDescription')}
            />
            <TextareaController
              control={form.control}
              name="description"
              label={translate('descriptionLabel')}
              placeholder={translate('descriptionPlaceholder')}
              description={translate('descriptionDescription')}
            />
            <InputController
              control={form.control}
              name="price"
              label={translate('priceLabel')}
              placeholder={translate('pricePlaceholder')}
              description={translate('priceDescription')}
              type="number"
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

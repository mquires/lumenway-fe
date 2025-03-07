import { cn } from '@/utils/tw-merge';
import { FormDescription } from '../../common/Form';

import { FormField } from '../../common/Form';

import { FormControl } from '../../common/Form';

import { ReactNode } from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';
import { FormItem, FormLabel } from '../../common/Form';
import { Input } from '../../common/Input';

interface InputControllerProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  description: string;
  type?: string;
  placeholder: string;
  disabled?: boolean;
  control: Control<T>;
  rightElement?: ReactNode;
  className?: string;
  inputClassName?: string;
}

export const InputController = <T extends FieldValues>({
  name,
  label,
  description,
  type = 'text',
  placeholder,
  disabled,
  control,
  rightElement,
  className,
  inputClassName,
}: InputControllerProps<T>) => (
  <FormField
    control={control}
    name={name}
    disabled={disabled}
    render={({ field }) => (
      <FormItem className={cn(className)}>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input
            placeholder={placeholder}
            type={type}
            className={cn(inputClassName)}
            {...field}
          />
        </FormControl>
        <FormDescription>{description}</FormDescription>
        {rightElement}
      </FormItem>
    )}
  />
);

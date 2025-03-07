import { cn } from '@/utils/tw-merge';
import { Control, FieldValues, Path } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '../../common/Form';
import { Textarea } from '../../common/Textarea';

interface TextareaControllerProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  description: string;
  placeholder: string;
  disabled?: boolean;
  control: Control<T>;
  className?: string;
}

export const TextareaController = <T extends FieldValues>({
  name,
  label,
  description,
  placeholder,
  disabled,
  control,
  className,
}: TextareaControllerProps<T>) => (
  <FormField
    control={control}
    name={name}
    disabled={disabled}
    render={({ field }) => (
      <FormItem className={cn(className)}>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Textarea placeholder={placeholder} {...field} />
        </FormControl>
        <FormDescription>{description}</FormDescription>
      </FormItem>
    )}
  />
);

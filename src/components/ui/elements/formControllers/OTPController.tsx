import { cn } from '@/utils/tw-merge';
import { Control, FieldValues, Path } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '../../common/Form';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../../common/InputOTP';

interface OTPControllerProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  description: string;
  disabled?: boolean;
  control: Control<T>;
  maxLength?: number;
  className?: string;
}

export const OTPController = <T extends FieldValues>({
  name,
  label,
  description,
  disabled,
  control,
  maxLength = 6,
  className,
}: OTPControllerProps<T>) => (
  <FormField
    control={control}
    name={name}
    disabled={disabled}
    render={({ field }) => (
      <FormItem className={cn(className)}>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <InputOTP maxLength={maxLength} {...field}>
            <InputOTPGroup>
              {Array.from({ length: maxLength }).map((_, index) => (
                <InputOTPSlot key={index} index={index} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </FormControl>
        <FormDescription>{description}</FormDescription>
      </FormItem>
    )}
  />
);

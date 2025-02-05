import { useTranslations } from 'next-intl';
import { type PropsWithChildren } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../common/AlertDialog';

interface ConfirmModalProps {
  heading: string;
  message: string;
  onConfirm: () => void;
}

export const ConfirmModal = ({
  children,
  heading,
  message,
  onConfirm,
}: PropsWithChildren<ConfirmModalProps>) => {
  const translate = useTranslations('components.confirmModal');

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{heading}</AlertDialogTitle>
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{translate('cancel')}</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>
            {translate('continue')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

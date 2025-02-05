import { Input } from '@/components/ui/common/Input';
import { CardContainer } from '@/components/ui/elements/CardContainer';
import { CopyButton } from '@/components/ui/elements/CopyButton';
import { useTranslations } from 'next-intl';

interface StreamURLFormProps {
  value: string | null;
}

const StreamURLForm = ({ value }: StreamURLFormProps) => {
  const translate = useTranslations('dashboard.keys.url');

  return (
    <CardContainer
      heading={translate('heading')}
      isRightContentFull
      rightContent={
        <div className="flex w-full items-center gap-x-4">
          <Input
            placeholder={translate('heading')}
            value={value ?? ''}
            disabled
          />
          <CopyButton value={value} />
        </div>
      }
    />
  );
};

export default StreamURLForm;

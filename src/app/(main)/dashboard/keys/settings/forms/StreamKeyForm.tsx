'use client';

import { Button } from '@/components/ui/common/Button';
import { Input } from '@/components/ui/common/Input';
import { CardContainer } from '@/components/ui/elements/CardContainer';
import { CopyButton } from '@/components/ui/elements/CopyButton';
import { Eye, EyeOff } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface StreamURLFormProps {
  value: string | null;
}

const StreamKeyForm = ({ value }: StreamURLFormProps) => {
  const translate = useTranslations('dashboard.keys.key');
  const [isShow, setIsShow] = useState(false);

  const Icon = isShow ? Eye : EyeOff;

  return (
    <CardContainer
      heading={translate('heading')}
      isRightContentFull
      rightContent={
        <div className="flex w-full items-center gap-x-4">
          <Input
            placeholder={translate('heading')}
            value={value ?? ''}
            type={isShow ? 'text' : 'password'}
            disabled
          />
          <CopyButton value={value} />
          <Button
            variant="ghost"
            size="lgIcon"
            onClick={() => setIsShow(!isShow)}
          >
            <Icon className="size-5" />
          </Button>
        </div>
      }
    />
  );
};

export default StreamKeyForm;

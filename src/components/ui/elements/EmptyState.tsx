import { SearchX } from 'lucide-react';
import { useTranslations } from 'next-intl';

const EmptyState = () => {
  const translate = useTranslations('components.emptyState');

  return (
    <div className="flex h-[75vh] w-full flex-col items-center justify-center">
      <SearchX className="size-20 text-muted-foreground" />
      <h1 className="mt-6 text-2xl font-semibold">{translate('heading')}</h1>
      <p className="mt-3 w-full text-center items-center text-muted-foreground lg:w-[60%]">
        {translate('text')}
      </p>
    </div>
  );
};

export default EmptyState;

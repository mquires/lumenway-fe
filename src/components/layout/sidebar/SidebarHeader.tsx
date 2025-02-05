'use client';

import { Button } from '@/components/ui/common/Button';
import { Hint } from '@/components/ui/elements/Hint';
import { useSidebar } from '@/hooks/useSidebar';
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react';
import { useTranslations } from 'next-intl';

const SidebarHeader = () => {
  const translate = useTranslations('layout.sidebar.header');

  const { isCollapsed, open, close } = useSidebar();

  const label = isCollapsed ? translate('expand') : translate('collapse');

  return isCollapsed ? (
    <div className="mb-4 hidden w-full items-center justify-center pt-4 lg:flex">
      <Hint label={label} side="right" asChild>
        <Button onClick={() => open()} variant="ghost" size="icon">
          <ArrowRightFromLine className="size-4" />
        </Button>
      </Hint>
    </div>
  ) : (
    <div className="mb-2 flex w-full items-center justify-between p-3 pl-4">
      <h2 className="text-lg font-semibold text-foreground">
        {translate('navigation')}
      </h2>
      <Hint label={label} side="right" asChild>
        <Button onClick={() => close()} variant="ghost" size="icon">
          <ArrowLeftFromLine className="size-4" />
        </Button>
      </Hint>
    </div>
  );
};

export default SidebarHeader;

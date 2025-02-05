import { type PropsWithChildren } from 'react';
import { Skeleton } from '../common/Skeleton';
import { Switch } from '../common/Switch';
import { CardContainer } from './CardContainer';

interface ToggleCardProps {
  heading: string;
  description: string;
  isDisabled?: boolean;
  value: boolean;
  onChange: (value: boolean) => void;
}

export const ToggleCard = ({
  children,
  heading,
  description,
  isDisabled,
  value,
  onChange,
}: PropsWithChildren<ToggleCardProps>) => {
  return (
    <CardContainer
      heading={heading}
      description={description}
      rightContent={
        <Switch
          checked={value}
          onCheckedChange={onChange}
          disabled={isDisabled}
        />
      }
    ></CardContainer>
  );
};

export const ToggleCardSkeleton = () => {
  return <Skeleton className="mt-6 h-20 w-full" />;
};

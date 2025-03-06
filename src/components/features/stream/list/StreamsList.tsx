import EmptyState from '@/components/ui/elements/EmptyState';
import { Heading } from '@/components/ui/elements/Heading';
import { FindRandomStreamsQuery } from '../stream.types';
import { StreamCard } from './StreamCard';

interface StreamsListProps {
  heading?: string;
  streams: FindRandomStreamsQuery[];
}

export const StreamsList = ({ heading, streams }: StreamsListProps) => {
  return streams.length ? (
    <>
      {heading && <Heading title={heading} />}
      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {streams.map(stream => (
          <StreamCard key={stream.id} stream={stream} />
        ))}
      </div>
    </>
  ) : (
    <EmptyState />
  );
};

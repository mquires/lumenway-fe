'use client';

import { useSidebar } from '@/hooks/useSidebar';
import { getMediaSource } from '@/utils/get-media-source';
import { getRandomColor } from '@/utils/get-random-color';
import { cn } from '@/utils/tw-merge';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FindRandomCategoriesQuery } from '../../stream/stream.types';

interface CategoryCardProps {
  category: FindRandomCategoriesQuery;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  const { isCollapsed } = useSidebar();
  const [randomColor, setRandomColor] = useState('');

  useEffect(() => {
    setRandomColor(getRandomColor());
  }, []);

  return (
    <Link
      href={`/category/${category.slug}`}
      className="h-full w-full space-y-3"
    >
      <div
        className={cn(
          'group relative cursor-pointer rounded-xl',
          isCollapsed ? 'h-60' : 'h-52',
        )}
      >
        <div
          className="absolute inset-0 flex items-center justify-center rounded-xl opacity-0 transition-opacity group-hover:opacity-100"
          style={{
            backgroundColor: randomColor,
          }}
        />
        <Image
          src={getMediaSource(category.thumbnailUrl)}
          alt={category.title}
          fill
          className="rounded-lg object-cover transition-transform group-hover:-translate-y-2 group-hover:translate-x-2"
        />
      </div>
    </Link>
  );
};

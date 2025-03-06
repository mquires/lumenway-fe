import EmptyState from '@/components/ui/elements/EmptyState';
import { Heading } from '@/components/ui/elements/Heading';
import type { FindRandomCategoriesQuery } from '../../stream/stream.types';
import { CategoryCard } from './CategoryCard';

interface CategoriesListProps {
  heading?: string;
  categories: FindRandomCategoriesQuery[];
}

export const CategoriesList = ({
  heading,
  categories,
}: CategoriesListProps) => {
  return categories.length ? (
    <>
      {heading && <Heading title={heading} />}
      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </>
  ) : (
    <EmptyState />
  );
};

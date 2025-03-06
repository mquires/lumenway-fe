import { User } from '@/types/user.types';

export interface FindRandomStreamsQuery {
  id: string;
  title: string;
  user: User;
  thumbnailUrl: string;
  isLive: boolean;
  category: {
    title: string;
    slug: string;
  };
}

export interface FindRandomCategoriesQuery {
  id: string;
  title: string;
  slug: string;
  thumbnailUrl: string;
}

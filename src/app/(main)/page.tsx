import { CategoriesList } from '@/components/features/category/list/CategoriesList';
import { StreamsList } from '@/components/features/stream/list/StreamsList';
import {
  type FindRandomCategoriesQuery,
  type FindRandomStreamsQuery,
} from '@/components/features/stream/stream.types';
import { getTranslations } from 'next-intl/server';

// const findRandomStreams = async () => {
//   try {
//     const query = FindRandomStreamsDocument.loc?.source.body;

//     const response = await fetch(SERVER_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ query }),
//       next: {
//         revalidate: 30,
//       },
//     });

//     const data = await response.json();

//     return {
//       streams: data.data.findRandomStreams as FindRandomStreamsQuery[],
//     };
//   } catch (e) {
//     return {
//       streams: [],
//       error: e instanceof Error ? e.message : 'Unknown error',
//     };
//   }
// };

// const findRandomCategories = async () => {
//   try {
//     const query = findRandomCategoryDocument.loc?.source.body;

//     const response = await fetch(SERVER_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ query }),
//       next: {
//         revalidate: 30,
//       },
//     });

//     const data = await response.json();

//     return {
//       categories: data.data.findRandomCategories as FindRandomCategoriesQuery[],
//     };
//   } catch (e) {
//     return {
//       categories: [],
//       error: e instanceof Error ? e.message : 'Unknown error',
//     };
//   }
// };

const Home = async () => {
  const translate = await getTranslations('home');

  // const { streams } = await findRandomStreams();
  // const { categories } = await findRandomCategories();

  const mockCategories = [
    {
      id: '123',
      title: 'title',
      slug: 'sdf',
      thumbnailUrl: '/asdfdsa',
    },
  ] as FindRandomCategoriesQuery[];

  const mockStreams = [
    {
      id: '123',
      title: 'title',
      user: {
        username: 'Test',
        displayName: 'Lin West',
        bio: 'Bio',
        email: 'email@email.com',
        avatar: '/avatar.jpg',
        isTotpEnabled: false,
        isVerified: true,
        notificationSettings: {
          webNotifications: false,
          telegramNotifications: false,
        },
      },
    },
  ] as FindRandomStreamsQuery[];

  return (
    <div className="space-y-10">
      <StreamsList
        heading={translate('streamsHeading')}
        streams={mockStreams}
      />
      <CategoriesList
        heading={translate('categoriesHeading')}
        categories={mockCategories}
      />
    </div>
  );
};

export default Home;

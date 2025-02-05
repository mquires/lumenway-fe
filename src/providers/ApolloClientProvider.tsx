'use client';

import { client } from '@/libs/apollo-client';
import { ApolloProvider } from '@apollo/client';
import type { PropsWithChildren } from 'react';

export const ApolloClientProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

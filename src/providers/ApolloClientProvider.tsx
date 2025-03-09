'use client';

import { client } from '@/libs/apollo-client';
import { ApolloProvider } from '@apollo/client';
import type { PropsWithChildren } from 'react';

/**
 * Provides Apollo Client context for GraphQL operations
 * Wraps the app with configured Apollo Client instance
 */

export const ApolloClientProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

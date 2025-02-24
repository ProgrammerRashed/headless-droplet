import { ApolloClient, InMemoryCache } from '@apollo/client';
const ApolloClientLib = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_SITES_API,
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
        timeout: 30000,
      },
    },
  });

  export default ApolloClientLib

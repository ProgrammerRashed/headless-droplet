import { ApolloClient, InMemoryCache } from '@apollo/client';
const ApolloClientLib = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_SITES_API,
    cache: new InMemoryCache(),
  });

  export default ApolloClientLib

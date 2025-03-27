import { gql } from "@apollo/client";

export const pageContentQuery = gql`
  query PageContentQuery($uri: String!) {
    pageBy(uri: $uri) {
      id
      content
    
    }
  }
`;

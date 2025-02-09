import { gql } from "@apollo/client";

export const slugsQuery = gql`
query GetAllSlugs {
  menuItems {
    nodes {
      uri
    }
  }
  pages(first: 100) {
    nodes {
      uri
    }
  }
}
`;

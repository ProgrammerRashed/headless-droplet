import { gql } from "@apollo/client";

export const blogsByIdQuery = gql`
  query BlogsByIdQuery($ids: [ID!]) {
    posts(where: { in: $ids }, first: 100) {
      nodes {
        id
        slug
        title
        date
        customPostDate
        customCategory{
         label
          value
          }
        content
         categories {
          edges {
            node {
              slug
              name
            }
          }
        }
        featuredImage {
          node {
            id
            mediaItemUrl
          }
        }
      }
    }
  }
`;

import { gql } from "@apollo/client";

export const blogQuery = gql`
  query BlogQuery($categoryName: String!) {
    posts(where: { categoryName: $categoryName }, first: 100) {
      nodes {
        id
        slug
        title
        date
        content
        customPostDate
        customCategory
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

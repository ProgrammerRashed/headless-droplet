import { gql } from "@apollo/client";

export const blogQuery = gql`
  query BlogQuery($categoryName: String!) {
    posts(where: { categoryName: $categoryName }) {
      nodes {
        id
        slug
        title
        date
        content
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

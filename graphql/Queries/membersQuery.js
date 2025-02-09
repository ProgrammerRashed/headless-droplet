import { gql } from "@apollo/client";

export const membersQuery = gql`
  query membersQuery($categoryName: String!) {
    members(where: { categoryName: $categoryName }) {
      edges {
        node {
          id
          title
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          content
          position
        }
      }
      nodes {
        id
      }
    }
  }
`;

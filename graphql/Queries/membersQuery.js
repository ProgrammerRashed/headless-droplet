import { gql } from "@apollo/client";

export const membersQuery = gql`
  query AllMembersQuery($ids: [ID!]) {
    members(where: { in: $ids }) {
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

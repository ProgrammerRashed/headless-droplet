import { gql } from "@apollo/client";

export const projectsByCategoryQuery = gql`
  query AllProjectQuery($categoryName: String!) {
    projects(where: { categoryName: $categoryName }) {
      nodes {
        content
        donor
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        categories {
          nodes {
            slug
            name
          }
        }
        projectStatus {
          label
          value
        }
        slug
        tenure {
          end_date
          start_date
        }
        smallDescription
        title
      }
    }
  }
`;

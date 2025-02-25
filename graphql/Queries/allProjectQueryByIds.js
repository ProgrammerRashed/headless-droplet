import { gql } from "@apollo/client";

export const allProjectQueryByIDS = gql`
  query AllProjectQuery($ids: [ID!]) {
    projects(where: { in: $ids }, first: 100) {
      nodes {
        id
        content
        donor
        databaseId
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
        pdfFile
      }
    }
  }
`;

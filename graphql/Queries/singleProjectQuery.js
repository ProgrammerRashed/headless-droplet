import { gql } from "@apollo/client";

export const singleProjectQuery = gql`
  query SingleProjectQuery($slug: String!) {
    projectBy(slug: $slug) {
      id
      donor
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      pdfFile
      projectStatus {
        value
        label
      }
      slug
      tenure {
        end_date
        start_date
      }
      title
      pdfFile
      content
      categories {
      nodes {
        slug
      }
    }
    }
  }
`;

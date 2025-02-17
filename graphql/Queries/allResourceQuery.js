import { gql } from "@apollo/client";

export const allResourceQuery = gql`
 query AllResouceQuery($ids: [ID!]) {
    resources(where: { in: $ids }, first: 100) {
    edges {
      node {
        id
        customCategory
        customDate
        date
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        pdfFile
        title
        year
        country {
          value
          label
          id
        }
        publicationType {
          label
          value
        }
      }
    }
  }
}
`;

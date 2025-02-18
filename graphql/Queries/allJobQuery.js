import { gql } from "@apollo/client";

export const allJobQuery = gql`query AllJobQuery {
  jobs(first: 100) {
    edges {
      node {
        id
        deadline
        department {
          label
          value
          id
        }
        location {
          label
          value
          id
        }
        title
        vacancies
        slug
      }
    }
  }
}

`;

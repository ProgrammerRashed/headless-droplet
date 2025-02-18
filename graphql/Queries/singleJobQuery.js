import { gql } from "@apollo/client";

export const singleJobQuery = gql`query JobBySlug($slug: String!) {
  jobBy(slug: $slug) {
    id
    deadline
    location {
      label
    }
    title
    slug
    content
  }
}
`;

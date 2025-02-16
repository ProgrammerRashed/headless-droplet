import { gql } from "@apollo/client";

export const singleBlogQuery = gql`
  query SingleBlogQuery($slug: String!) {
    postBy(slug: $slug) {
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
  }`;

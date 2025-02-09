import { gql } from "@apollo/client";

export const blogQuery = gql`query BlogQuery {
    posts(where: {categoryName: "latest_news"}) {
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
  }`
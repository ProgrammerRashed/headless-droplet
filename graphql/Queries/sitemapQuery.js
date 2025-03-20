import { gql } from "@apollo/client";

export const sitemapQuery = gql`query SitemapQuery {
    pages(first: 100) {
      edges {
        node {
          id
          slug
          modified
        }
      }
    }
    posts(first: 100) {
      edges {
        node {
          id
          slug
          modified
          categories {
            edges {
              node {
                id
                name
                slug
              }
            }
          }
        }
      }
    }
    projects(first: 100) {
      edges {
        node {
          id
          slug
           modified
        }
      }
    }
  }`;
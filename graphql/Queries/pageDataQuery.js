export const pageDataQuery = `
  query PageDataQuery($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Page {
        id
        title
        blocks {
          order
          name
          attributesJSON
        }
        seo {
          canonical
          cornerstone
          metaDesc
          metaKeywords
          title
          opengraphImage {
            id
            uri
            sourceUrl
          }
        }
      }
    }
  }
`;
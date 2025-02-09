import { gql } from "@apollo/client";
import ApolloClientLib from "./ApolloClientLib";

const getGqlData = async (query, variables = {}) => {
  try {
    const { data } = await ApolloClientLib.query({
      query,  
      variables,
      fetchPolicy: "network-only",
      context: {
        fetchOptions: {
          next: {
            tags: ["cms"],
            revalidate: 10,
          },
        },
      },
    });

    return data;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw error;
  }
};

export default getGqlData;

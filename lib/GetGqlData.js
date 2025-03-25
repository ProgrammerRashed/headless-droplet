import ApolloClientLib from "./ApolloClientLib";

const getGqlData = async (query, variables = {}, retries = 3) => {
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
    console.log("GraphQL Error!!!");

    // Retry logic
    if (retries > 0) {
      console.log(`Retrying... Attempts left: ${retries}`);
      return getGqlData(query, variables, retries - 1);
    } else {
      console.log("retry error while getting gql data")
    }
  }
};

export default getGqlData;

import { gql } from "@apollo/client";
import ApolloClientLib from "./ApolloClientLib";

const getGqlData = async (query, variables = null) => {
    const { data, loading } = await ApolloClientLib.query({
        query: gql`${query}`,
        variables,
        fetchPolicy: "network-only",
        context: {
            fetchOptions: {
                next: {
                    tags: ['cms'],
                    revalidate: 10,
                },
            },
        },
    });
    
    return data;
};

export default getGqlData;

const { GraphQLClient } = require('graphql-request');

const execQuery = async (query, variables) => {
  try {
    const graphQLClient = new GraphQLClient(process.env.graphcms_endpoint, {
      headers: {
        authorization: `Bearer ${process.env.graphcms_pat}`,
      },
      method: 'POST',
    });
    const result = await graphQLClient.request(query, variables);
    return result;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return null;
  }
};

module.exports = { execQuery };

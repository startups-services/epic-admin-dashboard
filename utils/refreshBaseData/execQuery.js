const { GraphQLClient } = require('graphql-request');

const execQuery = async (query, variables) => {
  try {
    const graphQLClient = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
      headers: {
        authorization: `Bearer ${process.env.GRAPHCMS_PAT}`,
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

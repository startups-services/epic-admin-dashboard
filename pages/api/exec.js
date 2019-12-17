const { GraphQLClient } = require('graphql-request');

export default async function exec(req, res) {
  try {
    const graphQLClient = new GraphQLClient(process.env.graphcms_endpoint, {
      headers: {
        authorization: `Bearer ${process.env.graphcms_pat}`,
      },
      method: 'POST',
    });
    const result = await graphQLClient.request(req.body.query, req.body.variables);
    return res.status(200).send(result);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return res.status(502).send('bad request');
  }
}

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { GraphQLClient } = require('graphql-request');
require('dotenv').config();

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

const app = express();

app.use(cors({ origin: true }));
app.use(bodyParser.json());

app.use('/', async (req, res) => {
  if (req.body && req.body.query) {
    const result = await execQuery(req.body.query, req.body.variables);
    return res.status(200).send(result);
  }
  return res.status(502).send('bad request');
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}`);
});

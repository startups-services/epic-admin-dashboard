import fetch from 'isomorphic-unfetch';


// const endpoint = 'http://api.graph.cool/simple/v1/ck2q05fg73scp016883ya67lw';
const endpoint = 'http://localhost:4000';

const execQuery = async (query, variables) => {
  // const token = Token.getToken();
  try {
    const response = await fetch(endpoint, {
      body: JSON.stringify({ query, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return null;
  }
};

export default execQuery;

export const execQueryWithNoToken = async (query, variables) => {
  try {
    const graphQLClient = new GraphQLClient(endpoint);
    return await graphQLClient.request(query, variables);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return null;
  }
};

export const signInUserQ = `
mutation ($email: String!, $password: String!) {
  signinUser(email: { email: $email, password:$password }) {
    token
    user {
      id
    }
  }
}
`;

export const createUserQ = `
  mutation ($email: String!, $password: String!) {
    createUser(authProvider: { email: { email: $email, password:$password }}) {
      id
      ava
      email
      password
    }
  }
`;

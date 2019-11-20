import { GraphQLClient } from 'graphql-request';
import cookie from 'cookie';
import Router from 'next/router';
import Cookies from 'js-cookie';
import { COOKIE_TOKEN_NAME } from '../../components/constants';

const endpoint = 'https://api.graph.cool/simple/v1/ck2q05fg73scp016883ya67lw';

export const Token = {};

Token.value = '';
Token.checkAndUpdateToken = (userToken) => {
  if (userToken.length > 0) {
    Token.value = userToken;
    return Token;
  }
  return null;
};

const execQuery = async (query, variables) => {
  try {
    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: `Bearer ${Token.value}`,
      },
    });
    return await graphQLClient.request(query, variables);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return null;
  }
};

export default execQuery;

export const signInUserQ = `
mutation ($email: String!, $password: String!) {
  signinUser(email: { email: $email, password:$password }) {
    token
    user {
      id
      password
      name
      projects {
        id
      }
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

export const isomorphicRedirectToLogin = (res) => {
  if (res) {
    res.writeHead(302, {
      Location: '/login',
    });
    res.end();
  } else {
    Router.push('/login');
  }
  return {};
};

export const isomorphicGetTokenFromCookie = (req) => {
  if (req) {
    if (req.headers.cookie) {
      const cookies = cookie.parse(req.headers.cookie);
      return cookies[COOKIE_TOKEN_NAME];
    }
    return null;
  }
  return Cookies.get(COOKIE_TOKEN_NAME);
};

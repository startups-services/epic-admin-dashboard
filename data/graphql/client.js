import fetch from 'isomorphic-unfetch';

let baseUrl = '';
export const setBaseUrl = (url) => {
  baseUrl = url;
};

const endpoint = '/api/exec';
const fetchQuery = async (query, variables) => {
  if (typeof window !== 'undefined') {
    setBaseUrl(window.location.host);
  }
  try {
    const response = await fetch(`http://${baseUrl}${endpoint}`, {
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

export default fetchQuery;

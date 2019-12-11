import fetch from 'isomorphic-unfetch';

// const endpoint = 'http://api.graph.cool/simple/v1/ck2q05fg73scp016883ya67lw';
const endpoint = 'http://localhost:4000';

const execQuery = async (query, variables) => {
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

import auth0 from '../../utils/auth0';

export default async function callback(req, res) {
  try {
    await auth0.handleCallback(req, res, { redirectTo: '/' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}
